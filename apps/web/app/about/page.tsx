import AboutIdentity from "@/components/pages/about/AboutIdentity";
import Certifications from "@/components/pages/about/Certifications";
import CompanyJourney from "@/components/pages/about/CompanyJourney";
import CoreValues from "@/components/pages/about/CoreValues";
import MissionStatement from "@/components/pages/about/MissionStatement";
import CTA from "@/components/pages/home/CTA";
import PageHeader from "@/components/shared/PageHeader";

export default function Page() {
    return (
        <>
            <PageHeader title="About Us" eyebrowText="Who we are" />
            <MissionStatement />
            <AboutIdentity />
            <CoreValues />
            <Certifications />
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
        </>
    );
}

