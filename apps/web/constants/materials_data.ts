export type Material = {
    id: string;
    name: string;
    /** Periodic-table-style shorthand */
    symbol: string;
    /** Atomic-number-style tag */
    tag: string;
    shortDescription: string;
    properties: string[];
    /** Tailwind inline gradient — from/via/to */
    gradientFrom: string;
    gradientTo: string;
    /** Accent border / glow colour */
    accent: string;
    /** Text colour for name on this background */
    textColor: string;
    /** Unsplash macro photo for hover panel */
    imageSrc: string;
};

export const MATERIALS_DATA: Material[] = [
    {
        id: "brass",
        name: "Brass",
        symbol: "Bs",
        tag: "Cu·Zn",
        shortDescription:
            "A machinable copper–zinc alloy prized for its corrosion resistance, low friction, and golden lustre. The workhorse of precision fittings.",
        properties: ["Free-machining", "Corrosion Resistant", "Low Friction"],
        gradientFrom: "#7C5C0A",
        gradientTo: "#C9A227",
        accent: "#D4AF37",
        textColor: "#FFF8DC",
        imageSrc:
            "/materials/brass.webp",
    },
    {
        id: "aluminium",
        name: "Aluminium",
        symbol: "Al",
        tag: "13",
        shortDescription:
            "Lightweight, high-strength alloy ideal for aerospace and automotive precision components where every gram counts.",
        properties: ["Lightweight", "High Strength", "Recyclable"],
        gradientFrom: "#3A3F4A",
        gradientTo: "#7A8898",
        accent: "#A8B2C0",
        textColor: "#E8EEF4",
        imageSrc:
            "/materials/aluminium.webp",
    },
    {
        id: "copper",
        name: "Copper",
        symbol: "Cu",
        tag: "29",
        shortDescription:
            "Exceptional thermal and electrical conductivity for demanding applications — from bus bars to heat exchangers.",
        properties: ["High Conductivity", "Ductile", "Antimicrobial"],
        gradientFrom: "#6B3A1F",
        gradientTo: "#C1703A",
        accent: "#DA8A52",
        textColor: "#FFE8D6",
        imageSrc:
            "/materials/copper.webp",
    },
    {
        id: "bronze",
        name: "Bronze",
        symbol: "Br",
        tag: "Cu·Sn",
        shortDescription:
            "Hard-wearing copper–tin alloy with superior wear resistance, self-lubricating properties ideal for bearings and bushings.",
        properties: ["Wear Resistant", "High Hardness", "Self-Lubricating"],
        gradientFrom: "#3D2409",
        gradientTo: "#7A4D20",
        accent: "#A0724A",
        textColor: "#F5E6D8",
        imageSrc:
            "/materials/bronze.webp",
    },
    {
        id: "mild-steel",
        name: "Mild Steel",
        symbol: "Ms",
        tag: "Fe·C",
        shortDescription:
            "The structural backbone of industry — affordable, weldable, and versatile for heavy components and structural fabrications.",
        properties: ["Weldable", "High Tensile", "Cost Effective"],
        gradientFrom: "#1C1C1C",
        gradientTo: "#4A4A4A",
        accent: "#888888",
        textColor: "#E0E0E0",
        imageSrc:
            "/materials/mild-steel.webp",
    },
    {
        id: "stainless-steel",
        name: "Stainless Steel",
        symbol: "SS",
        tag: "Fe·Cr",
        shortDescription:
            "Chromium-alloyed steel delivering hygienic, rust-proof performance in pharmaceutical, food and chemical environments.",
        properties: ["Rust-Proof", "Hygienic", "High Temp Rated"],
        gradientFrom: "#2A3540",
        gradientTo: "#556B7B",
        accent: "#9EAAB5",
        textColor: "#D8E4EC",
        imageSrc:
            "/materials/stainless-steel.webp",
    },
    {
        id: "gun-metal",
        name: "Gun Metal",
        symbol: "Gm",
        tag: "Cu·Sn·Zn",
        shortDescription:
            "Dense, pressure-tight alloy engineered for valves, pumps and marine hardware subjected to extreme load and corrosive media.",
        properties: ["Pressure Tight", "Marine Grade", "High Density"],
        gradientFrom: "#1A1D2E",
        gradientTo: "#3A4252",
        accent: "#5B6675",
        textColor: "#CCD4DC",
        imageSrc:
            "/materials/gun-metal.webp",
    },
    {
        id: "titanium",
        name: "Titanium",
        symbol: "Ti",
        tag: "22",
        shortDescription:
            "The pinnacle of strength-to-weight ratio — biocompatible and impervious to corrosion for aerospace and medical grade parts.",
        properties: ["Biocompatible", "Ultra-Light", "Corrosion Proof"],
        gradientFrom: "#2A2840",
        gradientTo: "#544E7A",
        accent: "#9A9CC6",
        textColor: "#E0DEFF",
        imageSrc:
            "/materials/titanium.webp",
    },
];
