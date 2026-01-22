export interface BikeSpec {
  item: string;
  value: string;
  detail?: string;
  highlight?: boolean;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  secondary?: number;
}

export interface BikePart {
  id: string;
  label: string;
  description: string;
  specs: { label: string; value: string }[];
  coordinates: { x: number; y: number }; // Percentage positions for hotspots
}

export interface ConfigOption {
  id: string;
  label: string;
  price: number;
  type: "livery" | "upgrade" | "accessory";
  detail?: string;
}

export interface OrderState {
  livery: string;
  upgrades: string[];
}
