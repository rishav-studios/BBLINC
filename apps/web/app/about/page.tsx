import AboutIdentity from "@/components/pages/about/AboutIdentity";
import CompanyJourney from "@/components/pages/about/CompanyJourney";
import CoreValues from "@/components/pages/about/CoreValues";
import MissionStatement from "@/components/pages/about/MissionStatement";
import CTA from "@/components/pages/home/CTA";
import PageHeader from "@/components/shared/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about BBLINC — a precision engineering company based in Jamnagar, Gujarat, India, with 26+ years of experience manufacturing world-class brass, stainless steel, aluminium, and copper components for global industries.",
    alternates: { canonical: "https://www.bblinc.in/about" },
    openGraph: {
        title: "About BBLINC — Precision Engineering Since 1999",
        description:
            "Discover BBLINC's story, mission, core values, and engineering capabilities. Trusted by 100+ clients worldwide across aerospace, automotive, HVAC, marine, and more.",
        url: "https://www.bblinc.in/about",
    },
};

export default function Page() {
    return (
        <main key="about">
            <PageHeader title="About Us" eyebrowText="Who we are" />
            <MissionStatement />
            <AboutIdentity />
            <CoreValues />
            {/* <Certifications /> */}
            <CompanyJourney />
            <CTA
                title={
                    <>
                        Ready to engineer
                        <br className="hidden sm:block" />
                        <span className="text-primary font-medium">
                            the future?
                        </span>
                    </>
                } />
        </main>
    );
}

