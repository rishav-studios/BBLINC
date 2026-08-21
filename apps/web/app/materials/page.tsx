import CTA from "@/components/pages/home/CTA";
import MaterialsGrid from "@/components/pages/materials/MaterialsGrid";
import PageHeader from "@/components/shared/PageHeader";
import { MATERIALS_DATA } from "@/constants/materials_data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Materials We Work With",
    description:
        "BBLINC precision-machines components in brass, stainless steel, aluminium, copper, bronze, mild steel, gun metal, and titanium. Explore material capabilities and request a quote.",
    alternates: { canonical: "https://www.bblinc.in/materials" },
    openGraph: {
        title: "Precision Metal Materials — BBLINC Components Manufacturer",
        description:
            "From free-machining brass to DZR alloys, stainless steel, and titanium — explore BBLINC's full range of precision-machined materials for industrial OEM applications.",
        url: "https://www.bblinc.in/materials",
    },
};


export default function Page() {
    return (
        <main key="materials">
            <PageHeader eyebrowText="Materials" title="Materials We Supply" />
            <MaterialsGrid materials={MATERIALS_DATA} />
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
