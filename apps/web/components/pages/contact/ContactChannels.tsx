import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

const channels = [
    {
        title: "Email",
        value: "info@bblinc.in",
        link: "mailto:info@bblinc.in",
        cta: "Send a message →",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
    },
    {
        title: "Phone",
        value: "+91 91733 55608",
        link: "tel:+919173355608",
        cta: "Call us →",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
    {
        title: "WhatsApp",
        value: "+91 91733 55608",
        link: "https://wa.me/919173355608",
        cta: "Chat now →",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
        ),
    },
] as const;

export default function ContactChannels() {
    return (
        <Section className="bg-white py-12 lg:py-16 min-h-max">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {channels.map((ch) => (
                        <a
                            key={ch.title}
                            href={ch.link}
                            target={ch.link.startsWith("http") ? "_blank" : undefined}
                            rel={ch.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="group flex flex-col gap-4 p-8 rounded-2xl border border-black/8 bg-[#fafaf8] hover:bg-white hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-primary">
                                    {ch.icon}
                                </div>
                                <h3 className="font-semibold text-lg">{ch.title}</h3>
                            </div>
                            <div className="flex flex-col gap-4 mt-2">
                                <p className="text-xl font-medium tracking-tight text-foreground">
                                    {ch.value}
                                </p>
                                <div className="h-px w-full bg-black/10 group-hover:bg-primary/30 transition-colors" />
                                <span className="text-sm font-medium text-primary flex items-center gap-1">
                                    {ch.cta}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
