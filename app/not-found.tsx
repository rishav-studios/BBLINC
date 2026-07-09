import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Arrow, CustomLink } from "@/components/shared/clickables/CustomLink";

export default function NotFound() {
    return (
        <Section className="bg-[#fafaf8] min-h-dvh flex items-center justify-center">
            <Container>
                <div className="flex flex-col items-center justify-center text-center gap-6 max-w-2xl mx-auto py-20">
                    <div className="flex flex-col gap-2 items-center">
                        <span className="font-display text-8xl md:text-[120px] font-bold text-black/5 leading-none tracking-tighter">
                            404
                        </span>
                        <h1 className="text-3xl md:text-5xl font-semibold text-foreground mt-4">
                            Page not found
                        </h1>
                    </div>
                    
                    <p className="text-gray-500 text-lg">
                        The page you are looking for doesn't exist, has been moved, or is temporarily unavailable. Let's get you back on track.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                        <CustomLink href="/" variant="button-brand">
                            Return Home
                            <Arrow variant="black" />
                        </CustomLink>
                        <CustomLink href="/contact" variant="outline-black">
                            Contact Support
                        </CustomLink>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
