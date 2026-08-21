import CTA from "@/components/pages/home/CTA";
import IndustriesGrid from "@/components/pages/industries/IndustriesGrid";
import PageHeader from "@/components/shared/PageHeader";
import { INDUSTRIES_DATA } from "@/constants/industries_data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Industries We Serve",
    description:
        "BBLINC supplies precision brass, stainless steel, aluminium, and copper components to the aerospace, automotive, agriculture, defense, oil & gas, chemical, HVAC, and marine industries worldwide.",
    alternates: { canonical: "https://www.bblinc.in/industries" },
    openGraph: {
        title: "Industries Served by BBLINC — Precision Metal Components",
        description:
            "Explore BBLINC's sector expertise: aerospace-grade fittings, automotive connectors, HVAC components, marine hardware, and more — all precision-machined in Jamnagar, India.",
        url: "https://www.bblinc.in/industries",
    },
};

export default function Page() {
    return (
        <main key="industries">
            <PageHeader title="Industries We Serve" eyebrowText="Industries" />
            <IndustriesGrid industries={INDUSTRIES_DATA} />
            <CTA
                title={
                    <>
                        Ready to engineer
                        <br className="hidden sm:block" />
                        <span className="text-black font-medium">
                            the future?
                        </span>
                    </>
                }
                titleClassName="text-white"
                descriptionClassName="text-white/80"
                className="bg-linear-to-r from-gold to-primary" />
        </main>
    );
}
