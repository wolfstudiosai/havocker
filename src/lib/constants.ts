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
    label: "DRIVE MOTOR",
    description: "Smooth, high-torque brushless motor tuned for instant acceleration.",
    specs: [{ label: "Power", value: "21KW" }, { label: "Torque", value: "550N.m" }],
    coordinates: { x: 50, y: 65 },
  },
  {
    id: "battery",
    label: "BATTERY SYSTEM",
    description: "Long-range 72V pack with easy swap capability for endless riding.",
    specs: [{ label: "Capacity", value: "58Ah" }, { label: "Voltage", value: "72V" }],
    coordinates: { x: 45, y: 45 },
  },
  {
    id: "suspension",
    label: "SUSPENSION",
    description: "Plush, adjustable forks designed to handle any terrain comfortably.",
    specs: [{ label: "Travel", value: "200mm" }, { label: "Type", value: "Air/Oil" }],
    coordinates: { x: 25, y: 70 },
  },
  {
    id: "chassis",
    label: "HYBRID FRAME",
    description: "Lightweight alloy and carbon fiber blend for agile handling.",
    specs: [{ label: "Material", value: "Alloy/Carbon" }, { label: "Weight", value: "89KG" }],
    coordinates: { x: 60, y: 50 },
  },
];

export const CONFIG_OPTIONS: ConfigOption[] = [
  { id: "stealth_black", label: "Matte Black", price: 0, type: "livery", detail: "Satin Finish" },
  { id: "ion_blue", label: "Kinetic Orange", price: 250, type: "livery", detail: "Gloss Finish" },
  { id: "arctic_camo", label: "ARCTIC CAMO", price: 400, type: "livery", detail: "Geometric Pattern" },

  { id: "fast_charger", label: "Faster Charger", price: 300, type: "upgrade", detail: "2.5h Charge Time" },
  { id: "street_tires", label: "Street Tires", price: 450, type: "upgrade", detail: "Slick Tires / 17 Inch" },
  { id: "controller_unlock", label: "Unlock: Sport Mode", price: 150, type: "upgrade", detail: "Max Speed: 120km/h" },
];

export const BASE_PRICE = 4500;

export const BLOG_POSTS = [
  {
    id: 1,
    title: "MOJAVE DESERT TELEMETRY REPORT",
    category: "ENGINEERING",
    date: "OCT 24, 2025",
    image: "https://images.unsplash.com/photo-1558981403-8833075b3b19?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "THE FUTURE OF ELECTRIC FREEDOM",
    category: "LIFESTYLE",
    date: "OCT 20, 2025",
    image: "https://images.unsplash.com/photo-1444491741275-3747c33cc99b?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 3,
    title: "URBAN ASSAULT: X1 IN THE CITY",
    category: "TECH",
    date: "OCT 15, 2025",
    image: "https://images.unsplash.com/photo-1609630875171-b132137746f1?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "REDEFINING TORQUE VECTORING",
    category: "ENGINEERING",
    date: "OCT 12, 2025",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
];

export const FORUM_THREADS = [
  {
    id: 1,
    title: "OPTIMAL TIRE PRESSURE FOR SAND DUNES?",
    author: "SAND_RAIDER",
    category: "TECH",
    time: "2H AGO",
    replies: 24,
    pinned: true,
  },
  {
    id: 2,
    title: "FIRST 500KM REVIEW: L3e PERFORMANCE",
    author: "VOLT_RIDER",
    category: "ENGINEERING",
    time: "5H AGO",
    replies: 12,
    pinned: false,
  },
  {
    id: 3,
    title: "BEST AFTERMARKET PEGS FOR GRIP?",
    author: "DIRT_KING",
    category: "TECH",
    time: "1D AGO",
    replies: 8,
    pinned: false,
  },
  {
    id: 4,
    title: "CUSTOM LIVERY GALLERY - SHOW YOUR X1",
    author: "DESIGN_LAB",
    category: "LIFESTYLE",
    time: "2D AGO",
    replies: 56,
    pinned: false,
  },
];
