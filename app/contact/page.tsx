import ContactChannels from "@/components/pages/contact/ContactChannels";
import ContactMain from "@/components/pages/contact/contactMain/ContactMain";
import QuoteCTA from "@/components/pages/contact/QuoteCTA";
import PageHeader from "@/components/shared/PageHeader";

export default function Page() {
    return (
        <main key="contact">
            <PageHeader title="Have a project in mind?" eyebrowText="Contact Us" />
            <ContactChannels />
            <ContactMain />
            <QuoteCTA />
        </main>
    );
}
