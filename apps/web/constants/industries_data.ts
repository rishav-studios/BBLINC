export type Industry = {
    id: string;
    label: string;
    slug: string;
    description: string;
    stats: { value: string; unit: string }[];
    frameSrc: {
        dir: string;
        prefix: string;
        count: number;
        padDigits: number;
    };
    posterSrc: string;
    imageSrc?: string;
}

export const INDUSTRIES_DATA: Industry[] = [
    {
        id: "aerospace",
        label: "Aerospace",
        slug: "aerospace",
        description:
            "From hydraulic fittings to instrument housings, our brass components are machined to AS9100-certified precision — holding tight tolerances in applications where margin for error simply doesn't exist.",
        stats: [
            { value: "±0.005", unit: "mm Tolerance" },
            { value: "AS9100", unit: "Certified" },
        ],
        imageSrc: "/sectors/images/aerospace.webp",
        posterSrc: "/sectors/posters/aerospace.webp",
        frameSrc: {
            dir: "/sectors/frames/aerospace",
            prefix: "frame_",
            count: 64,
            padDigits: 4,
        },

    },
    {
        id: "automobile",
        label: "Automobile",
        slug: "automobile",
        description:
            "Fuel-system inserts, EV battery terminal blocks, and precision-turned connectors delivered to OEM and Tier-1 manufacturers under IATF 16949-compliant quality systems, at volumes that keep pace with modern production lines.",
        stats: [
            { value: "IATF", unit: "16949 Certified" },
            { value: "1M+", unit: "Parts / Year" },
        ],
        imageSrc: "/sectors/images/automobile.webp",
        posterSrc: "/sectors/posters/automobile.webp",
        frameSrc: {
            dir: "/sectors/frames/automobile",
            prefix: "frame_",
            count: 65,
            padDigits: 4,
        },
    },
    {
        id: "agriculture",
        label: "Agriculture",
        slug: "agriculture",
        description:
            "Irrigation fittings, sprayer nozzles, and pump components engineered from corrosion-resistant brass alloys — built to perform through seasons of exposure to soil, moisture, and agrochemicals.",
        stats: [
            { value: "20+", unit: "Years Service Life" },
            { value: "IP65", unit: "Weather Sealed" },
        ],
        posterSrc: "/sectors/posters/agriculture.webp",
        imageSrc: "/sectors/images/agriculture.webp",
        frameSrc: {
            dir: "/sectors/frames/agriculture",
            prefix: "frame_",
            count: 64,
            padDigits: 4,
        },
    },
    {
        id: "defense",
        label: "Defense",
        slug: "defense",
        description:
            "Precision-machined casings, connector bodies, and structural fittings manufactured to strict military specifications — where consistency and traceability are non-negotiable.",
        stats: [
            { value: "JSS", unit: "Compliant" },
            { value: "100%", unit: "Traceable" },
        ],
        posterSrc: "/sectors/posters/defense.webp",
        imageSrc: "/sectors/images/defense.webp",
        frameSrc: {
            dir: "/sectors/frames/defense",
            prefix: "frame_",
            count: 52,
            padDigits: 4,
        },
    },

    {
        id: "oil-gas",
        label: "Oil & Gas",
        slug: "oil-gas",
        description:
            "Offshore and onshore valve bodies, manifolds, and coupling fittings machined from dezincification-resistant brass — engineered for aggressive media and extreme operating pressures.",
        stats: [
            { value: "600", unit: "Bar Rated" },
            { value: "DZR", unit: "Brass Alloy" },
        ],
        posterSrc: "/sectors/posters/oil-gas.webp",
        imageSrc: "/sectors/images/oil-gas.webp",
        frameSrc: {
            dir: "/sectors/frames/oil-gas",
            prefix: "frame_",
            count: 65,
            padDigits: 4,
        },
    },
];

// {
//     id: "chemical",
//     label: "Chemical",
//     slug: "chemical",
//     description:
//         "Valve bodies, dosing components, and fluid-transfer fittings crafted from dezincification-resistant brass, designed to hold up against corrosive chemical media in demanding processing environments.",
//     stats: [
//         { value: "DZR", unit: "Brass Alloy" },
//         { value: "PN40", unit: "Pressure Rated" },
//     ],
//     videoSrc: "/sectors/videos/chemical.mp4",
//     posterSrc: "/sectors/posters/chemical.webp",
//     imgeSrc: "/sectors/images/chemical.webp"
// },


// {
//     id: "hvac",
//     label: "HVAC",
//     slug: "hvac",
//     description:
//     "Refrigerant fittings, valve components, and manifold parts precision-turned for leak-tight performance across heating, ventilation, and climate control systems worldwide.",
//     stats: [
//     { value: "Leak-Tight", unit: "Sealing" },
//     { value: "ISO 9001", unit: "Certified" },
//     ],
//     videoSrc: "/sectors/videos/hvac.mp4",
//     posterSrc: "/sectors/posters/hvac.webp",
//     imgeSrc: "/sectors/images/hvac.webp"
//     },
//     {
//     id: "marine",
//     label: "Marine",
//     slug: "marine",
//     description:
//     "Through-hull fittings, propeller components, and seawater-grade hardware machined from naval brass — engineered to resist corrosion in the harshest marine conditions.",
//     stats: [
//     { value: "Naval", unit: "Grade Brass" },
//     { value: "Salt-Spray", unit: "Tested" },
//     ],
//     videoSrc: "/sectors/videos/marine.mp4",
//     posterSrc: "/sectors/posters/marine.webp",
//     imgeSrc: "/sectors/images/marine.webp"
//     },