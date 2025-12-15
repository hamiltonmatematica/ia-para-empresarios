export type ContractDuration = 3 | 6 | 12;

export interface PriceTier {
  duration: ContractDuration;
  price: number;
}

export interface PlanFeature {
  title: string;
  description?: string;
  items?: string[];
}

export interface Plan {
  id: string;
  title: string;
  subtitle: string;
  targetAudience: string;
  features: PlanFeature[];
  pricing?: PriceTier[]; // For subscription plans
  fixedPrice?: {
    original: number;
    current: number;
    note?: string;
  }; // For one-time purchases
  isPopular?: boolean;
  colorTheme: 'dark' | 'light' | 'orange';
}