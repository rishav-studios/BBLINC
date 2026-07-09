import ContactChannels from "@/components/pages/contact/ContactChannels";
import ContactMain from "@/components/pages/contact/ContactMain";
import QuoteCTA from "@/components/pages/contact/QuoteCTA";
import PageHeader from "@/components/shared/PageHeader";

export default function Page() {
    return (
        <>
            <PageHeader title="Have a project in mind?" eyebrowText="Contact Us" />
            <ContactChannels />
            <ContactMain />
            <QuoteCTA />
        </>
    );
}
