import ContactChannels from "@/components/pages/contact/ContactChannels";
import ContactMain from "@/components/pages/contact/contactMain/ContactMain";
import QuoteCTA from "@/components/pages/contact/QuoteCTA";
import PageHeader from "@/components/shared/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with BBLINC for precision brass and metal component enquiries. Reach our team in Jamnagar, Gujarat, India via email at info@bblinc.in or call +91 9173355608.",
    alternates: { canonical: "https://www.bblinc.in/contact" },
    openGraph: {
        title: "Contact BBLINC — Precision Brass & Metal Components",
        description:
            "Have a project in mind? Contact BBLINC's engineering team for custom brass, stainless steel, aluminium, and copper component manufacturing. Fast response guaranteed.",
        url: "https://www.bblinc.in/contact",
    },
}
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
