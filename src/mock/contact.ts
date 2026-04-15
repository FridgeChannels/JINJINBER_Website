// Using mockData; dev team will replace with real API hook useFetchXxx()

export type IndustryOption =
  | "Oil & Gas"
  | "Municipal"
  | "Irrigation"
  | "Fire Protection"
  | "Power"
  | "HVAC"
  | "Other"; // from API

export type ProductInterestOption =
  | "Gate Valves"
  | "Butterfly Valves"
  | "Check Valves"
  | "Ball Valves"
  | "Pumps"
  | "Fittings"
  | "Other"; // from API

export interface QuickQuoteFormValues {
  yourName: string; // from API
  companyName: string; // from API
  email: string; // from API
  phone: string; // from API
  country: string; // from API
  industry: IndustryOption; // from API
  productInterest: ProductInterestOption; // from API
  projectDetails: string; // from API
  uploadDrawings?: File | null; // from API
}

export const quickQuoteDefaults: QuickQuoteFormValues = {
  yourName: "",
  companyName: "",
  email: "",
  phone: "",
  country: "",
  industry: "Oil & Gas",
  productInterest: "Gate Valves",
  projectDetails: "",
  uploadDrawings: null,
};

