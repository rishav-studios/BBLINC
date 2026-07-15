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
            <BackgroundBeamsWithCollision className="h-[50dvh]!">
                <Fade>
                    <Container className="grid grid-cols-1 lg:grid-cols-3 py-16 ">
                        <div className="col-span-2 my-auto space-y-4">
                            <EyeBrow text="Trusted Manufacturing Partner" />
                            <h1 className="text-6xl lg:text-7xl font-medium">From raw <span className="text-primary">materials</span> <br /> to <span className="text-primary">precision</span> components</h1>
                        </div>
                        <div className="flex flex-col gap-4 my-auto">
                            <p>// since 2002 // </p>
                            <p>BBLINC delivers precision-manufactured components across a range of materials, powering mission-critical industries worldwide with reliability and on-time delivery.</p>
                            <CustomLink href="/industries" variant="button-black" className="w-max">
                                Explore Industries
                                <Arrow variant="primary" />
                            </CustomLink>
                        </div>
                    </Container>
                </Fade>
            </BackgroundBeamsWithCollision>

            <Fade delay={0.3}>
                <div className="h-dvh w-full">
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