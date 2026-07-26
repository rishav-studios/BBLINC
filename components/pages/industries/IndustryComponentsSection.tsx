import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Heading, SectionHeader, Separator } from "@/components/shared/SectionHeader";
import Image from "next/image";

type IndustryComponentsSectionProps = {
    components: string[];
};

export default function IndustryComponentsSection({ components }: IndustryComponentsSectionProps) {
    return (
        <Section>
            <Container>
                <SectionHeader className="mb-12">
                    <Heading>Components</Heading>
                    <Separator />
                </SectionHeader>

                {components.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {components.map((imageSrc, index) => (
                            <div
                                key={index}
                                className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-200 group"
                            >
                                <div className="absolute w-full h-full inset-0 z-1" />
                                <Image
                                    src={imageSrc}
                                    alt={`Component ${index + 1}`}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-64 w-full">
                        <h3 className="text-5xl font-medium animate-pulse text-gray-400">
                            Coming Soon...
                        </h3>
                    </div>
                )}
            </Container>
        </Section>
    );
}
