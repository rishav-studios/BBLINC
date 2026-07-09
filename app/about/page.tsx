import CTA from "@/components/pages/home/CTA";
import AboutIdentity from "@/components/pages/about/AboutIdentity";
import Certifications from "@/components/pages/about/Certifications";
import CoreValues from "@/components/pages/about/CoreValues";
import MissionStatement from "@/components/pages/about/MissionStatement";
import PageHeader from "@/components/shared/PageHeader";

export default function Page() {
    return (
        <>
            <PageHeader title="About Us" eyebrowText="Who we are" />
            <MissionStatement />
            <AboutIdentity />
            <CoreValues />
            <Certifications />
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
        </>
    );
}

