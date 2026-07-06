import Container from "@/components/layout/Container"
import Section from "@/components/layout/Section"
import { Arrow, CustomLink } from "@/components/shared/clickables/CustomLink"
import { Description, Heading, SectionHeader, Separator } from "@/components/shared/SectionHeader"
import { TextRevealOnScroll } from "@/components/shared/TextReveal"
import { InfiniteMovingCards } from "@bbl/ui/components/ui/infinite-moving-cards"


const Circle = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-42 aspect-square border border-primary border-dashed rounded-full flex items-center justify-center">{children}</div>

    )
}

const About = () => {
    return (
        <Section className="bg-white">
            <Container>

                {/* ── Row 1: Header bar ── */}
                <div className="flex justify-between items-center">
                    <SectionHeader>
                        <Heading>About</Heading>
                        <Separator />
                        <Description>
                            {`Excellence is not an act\nBut a habit.`}
                        </Description>
                    </SectionHeader>

                    <CustomLink href="/about" variant="button-brand" className="h-max">
                        About us
                        <Arrow variant="black" />
                    </CustomLink>
                </div>

                {/* ── Row 2: Scroll-reveal statement ── */}
                <div className="py-16 grid grid-cols-3 gap-12">

                    <div className="col-span-2">

                        <TextRevealOnScroll as="div" className="text-4xl leading-snug">
                            {`We are precision engineering partner commited to transforming ideas into world class metal components. Our passion for the innovation, technical excellence, and uncompromising quality enables us to deliver solutions that power industries across the globe.`}
                        </TextRevealOnScroll>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col w-max items-center gap-2">
                            <Circle>
                                <div className=" font-semibold flex">
                                    <span className="text-5xl">25</span>
                                    <span className="text-4xl text-primary -translate-y-4">+</span>
                                </div>
                            </Circle>
                            <Description>Years of experience</Description>
                        </div>
                        <div className="flex flex-col items-center gap-2 ml-auto w-max translate-y-24">
                            <Circle>
                                <span className="text-5xl font-semibold">25+</span>
                            </Circle>
                            <Description>Years of experience</Description>
                        </div>
                    </div>


                </div>

                {/* row 3 moving logos */}
                <div className="mt-12">

                    <InfiniteMovingCards speed="normal">
                        {Array(10).fill("logos").map((item, idx) => (
                            <div key={idx}>{item}</div>
                        ))}
                    </InfiniteMovingCards>
                </div>


            </Container>
        </Section>
    )
}

export default About