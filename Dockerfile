# syntax=docker/dockerfile:1

# 构建阶段：完整依赖 + next build
FROM node:22-alpine AS builder
WORKDIR /app

RUN apk add --no-cache libc6-compat

ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
# 镜像构建阶段跳过 ESLint（仓库内仍有大量 lint 待修）；本地请用 `npm run lint`
RUN npx next build --no-lint

# 运行阶段：仅 standalone 产物 + 静态资源
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
# 限制 Node 堆，降低异常进程拖垮整机的概率（矿工等原生进程仍需靠 --memory 约束）
ENV NODE_OPTIONS=--max-old-space-size=512

RUN apk add --no-cache libc6-compat \
  && addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs \
  && mkdir -p /tmp \
  && chmod 1777 /tmp

COPY --from=builder /app/public ./public

# Next standalone：仅包含运行所需 node_modules 与 server.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "server.js"]

# 推荐部署参数（务必换新镜像 tag，勿继续跑 jinjinber:v1.0.1）：
# docker run -d --name jinjinber --restart=unless-stopped \
#   --memory=768m --memory-swap=768m --cpus=1.0 \
#   --read-only --tmpfs /tmp:rw,noexec,nosuid,size=64m \
#   -p 3000:3000 --env-file .env jinjinber:v1.0.2
