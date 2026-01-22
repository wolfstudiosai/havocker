import { BikeSpec, ChartDataPoint, BikePart, ConfigOption } from "./types";

export const HAVOCKER_SPECS: BikeSpec[] = [
  { item: "Model Name", value: "Havocker", detail: "Electric Dirtbike (L3e)" },
  { item: "0-50km Accel", value: "2.1s", highlight: true },
  { item: "Peak Power", value: "21KW", detail: "8000rpm High Perf. Brushless", highlight: true },
  { item: "Max Torque", value: "550N.m", highlight: true },
  { item: "Battery", value: "72V/58Ah", detail: "Quick Removable" },
  { item: "Range", value: "100km", detail: "@50km/h" },
  { item: "Charge Time", value: "2.5 Hours", detail: "22A Charger" },
  { item: "Max Speed", value: "100km/h" },
  { item: "Net Weight", value: "89KG" },
  { item: "Seat Height", value: "900mm" },
  { item: "Ground Clearance", value: "315mm" },
  { item: "Launch Date", value: "NOV 2025" },
];

export const POWER_CURVE: ChartDataPoint[] = [
  { name: "0", value: 0, secondary: 550 },
  { name: "1000", value: 5, secondary: 550 },
  { name: "2000", value: 12, secondary: 540 },
  { name: "3000", value: 16, secondary: 520 },
  { name: "4000", value: 19, secondary: 480 },
  { name: "5000", value: 20.5, secondary: 420 },
  { name: "6000", value: 21, secondary: 350 },
  { name: "7000", value: 20.8, secondary: 280 },
  { name: "8000", value: 19.5, secondary: 200 },
];

export const CHASSIS_SPECS = [
  { label: "Frame", value: "Alloy w/ Carbon Fiber" },
  { label: "Front Shock", value: "Adjustable Inverted" },
  { label: "Rear Shock", value: "Adjustable w/ Airbag" },
  { label: "Brakes", value: "Hydraulic Disc" },
];

export const BIKE_PARTS: BikePart[] = [
  {
    id: "motor",
    label: "VECTOR MOTOR",
    description: "High-performance brushless motor with intelligent sine wave controller.",
    specs: [{ label: "Power", value: "21KW" }, { label: "Torque", value: "550N.m" }],
    coordinates: { x: 50, y: 65 },
  },
  {
    id: "battery",
    label: "POWER MATRIX",
    description: "Quick-swap 72V system with advanced thermal management.",
    specs: [{ label: "Capacity", value: "58Ah" }, { label: "Voltage", value: "72V" }],
    coordinates: { x: 45, y: 45 },
  },
  {
    id: "suspension",
    label: "AERO SUSPENSION",
    description: "Fully adjustable inverted forks with nitrogen-charged rear shock.",
    specs: [{ label: "Travel", value: "200mm" }, { label: "Type", value: "Air/Oil" }],
    coordinates: { x: 25, y: 70 },
  },
  {
    id: "chassis",
    label: "CARBON FRAME",
    description: "Hybrid alloy and carbon fiber construction for optimal rigidity.",
    specs: [{ label: "Material", value: "Alloy/Carbon" }, { label: "Weight", value: "89KG" }],
    coordinates: { x: 60, y: 50 },
  },
];

export const CONFIG_OPTIONS: ConfigOption[] = [
  { id: "stealth_black", label: "VOID BLACK", price: 0, type: "livery", detail: "Matte Finish / Absorb" },
  { id: "ion_blue", label: "ION BLUE", price: 250, type: "livery", detail: "Gloss / High Voltage" },
  { id: "arctic_camo", label: "ARCTIC CAMO", price: 400, type: "livery", detail: "Pattern / Geometric" },

  { id: "fast_charger", label: "HYPER CHARGER (20A)", price: 300, type: "upgrade", detail: "2.5h Charge Time" },
  { id: "street_tires", label: "SUPERMOTO WHEELSET", price: 450, type: "upgrade", detail: "Slick Tires / 17 Inch" },
  { id: "controller_unlock", label: "FIRMWARE: LUDICROUS", price: 150, type: "upgrade", detail: "Unlocks 120km/h" },
];

export const BASE_PRICE = 4500;
