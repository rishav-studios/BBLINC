import Fade from "@/components/animations/Fade"
import Container from "@/components/layout/Container"
import Section from "@/components/layout/Section"
import { Arrow, CustomLink } from "@/components/shared/clickables/CustomLink"
import EyeBrow from "@/components/shared/EyeBrow"
import { BackgroundBeamsWithCollision } from "@bbl/ui/components/ui/background-beams-with-collision"
import ReactPlayer from "react-player"

const Hero = () => {
    return (
        <Section className="py-0!">
            <BackgroundBeamsWithCollision className="h-dvh relative lg:h-[50dvh]!">
                <Fade className="relative z-10 h-full flex">
                    <Container className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-3 mt-auto mb-4 md:py-12 lg:py-16">
                        <div className="lg:col-span-2 my-auto space-y-4">
                            <EyeBrow text="Trusted Manufacturing Partner" className="hidden sm:flex" />
                            <h1 className="text-4xl sm:text-5xl xl:text-7xl font-medium leading-tight lg:leading-tight text-white lg:text-foreground">From raw <span className="text-primary">materials</span> <br className="hidden md:block" /> to <span className="text-primary">precision</span> components</h1>
                        </div>
                        <div className="flex flex-col gap-4 my-auto text-white lg:text-foreground">
                            <p className="text-xs sm:text-sm md:text-base">// since 2002 // </p>
                            <p className="text-xs sm:text-sm md:text-base">BBLINC delivers precision-manufactured components across a range of materials, powering mission-critical industries worldwide with reliability and on-time delivery.</p>
                            <CustomLink
                                href="/quote"
                                variant="button-white"
                                className="w-max flex md:hidden">
                                Request a quote
                                <Arrow variant="primary" />
                            </CustomLink>
                            <CustomLink
                                href="/industries"
                                variant="button-black"
                                className="w-max hidden md:flex">
                                Explore Industries
                                <Arrow variant="primary" />
                            </CustomLink>
                        </div>
                    </Container>

                </Fade>
                <div className="lg:hidden bg-linear-to-b from-transparent via-black/70 to-black/90 h-full absolute z-2 inset-0" />
                <div className="flex absolute lg:hidden h-full z-1 w-full">
                    <ReactPlayer
                        src="/hero-video.webm"
                        playing={true}
                        muted={true}
                        controls={false}
                        width={"100%"}
                        height={"100%"}
                        className="object-cover"
                        loop
                    />
                </div>
            </BackgroundBeamsWithCollision>

            <Fade delay={0.3}>
                <div className="hidden lg:flex h-[50dvh] md:h-[75dvh] lg:h-dvh w-full">
                    <ReactPlayer
                        src="/hero-video.webm"
                        playing={true}
                        muted={true}
                        controls={false}
                        width={"100%"}
                        height={"100%"}
                        className="object-cover"
                        loop
                    />
                </div>
            </Fade>
        </Section>
    )
}

export default Hero