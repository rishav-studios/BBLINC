import CTA from "@/components/pages/home/CTA";
import IndustriesGrid from "@/components/pages/industries/IndustriesGrid";
import PageHeader from "@/components/shared/PageHeader";
import { INDUSTRIES_DATA } from "@/constants/industries_data";

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
