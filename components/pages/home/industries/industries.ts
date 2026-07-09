import type { Industry } from "./IndustryCard";

/**
 * SECTORS_DATA
 *
 * Replace `videoSrc` with your actual WebM/MP4 paths.
 * Keep both formats side-by-side in /public:
 *   /sectors/aerospace.webm  (primary — Chrome/Firefox)
 *   /sectors/aerospace.mp4   (fallback — Safari)
 *
 * Videos should be processed with ffmpeg:
 *   ffmpeg -i input.mp4 -movflags faststart -g 30 -vf scale=1280:-2 -crf 28 -vcodec libx264 output.mp4
 */
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
        videoSrc: "/sectors/videos/aerospace.mp4",
        posterSrc: "/sectors/posters/aerospace.webp",
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
        videoSrc: "/sectors/videos/automobile.mp4",
        posterSrc: "/sectors/posters/automobile.webp",
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
        videoSrc: "/sectors/videos/agriculture.mp4",
        posterSrc: "/sectors/posters/agriculture.webp",
    },
    {
        id: "chemical",
        label: "Chemical",
        slug: "chemical",
        description:
            "Valve bodies, dosing components, and fluid-transfer fittings crafted from dezincification-resistant brass, designed to hold up against corrosive chemical media in demanding processing environments.",
        stats: [
            { value: "DZR", unit: "Brass Alloy" },
            { value: "PN40", unit: "Pressure Rated" },
        ],
        videoSrc: "/sectors/videos/chemical.mp4",
        posterSrc: "/sectors/posters/chemical.webp",
    },
    // {
    //     id: "defense",
    //     label: "Defense",
    //     slug: "defense",
    //     description:
    //         "Precision-machined casings, connector bodies, and structural fittings manufactured to strict military specifications — where consistency and traceability are non-negotiable.",
    //     stats: [
    //         { value: "MIL-SPEC", unit: "Compliant" },
    //         { value: "100%", unit: "Traceable" },
    //     ],
    //     videoSrc: "/sectors/videos/defense.mp4",
    //     posterSrc: "/sectors/posters/defense.webp",
    // },
    // {
    //     id: "hvac",
    //     label: "HVAC",
    //     slug: "hvac",
    //     description:
    //         "Refrigerant fittings, valve components, and manifold parts precision-turned for leak-tight performance across heating, ventilation, and climate control systems worldwide.",
    //     stats: [
    //         { value: "Leak-Tight", unit: "Sealing" },
    //         { value: "ISO 9001", unit: "Certified" },
    //     ],
    //     videoSrc: "/sectors/videos/hvac.mp4",
    //     posterSrc: "/sectors/posters/hvac.webp",
    // },
    {
        id: "marine",
        label: "Marine",
        slug: "marine",
        description:
            "Through-hull fittings, propeller components, and seawater-grade hardware machined from naval brass — engineered to resist corrosion in the harshest marine conditions.",
        stats: [
            { value: "Naval", unit: "Grade Brass" },
            { value: "Salt-Spray", unit: "Tested" },
        ],
        videoSrc: "/sectors/videos/marine.mp4",
        posterSrc: "/sectors/posters/marine.webp",
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
        videoSrc: "/sectors/videos/oil-gas.mp4",
        posterSrc: "/sectors/posters/oil-gas.webp",
    },
];