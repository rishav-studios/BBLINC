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
                <Container className="grid grid-cols-1 lg:grid-cols-3 py-16 ">
                    <div className="col-span-2 my-auto">
                        <EyeBrow text="Trusted Manufacturing Partner" />
                        <h1 className="text-6xl lg:text-7xl font-medium">From raw <span className="text-primary">materials</span> <br /> to finished components</h1>
                    </div>
                    <div className="flex flex-col gap-4 my-auto">
                        <p>// since 2005 // </p>
                        <p>We deliver end-to-end manufacturing solutions from machining and fabrication to molding and assembly engineered for quality, efficiency, and on-time delivery.</p>
                        <CustomLink href="/capabilities" variant="button-black" className="w-max">
                            Explore Capabilities
                            <Arrow variant="primary" />
                        </CustomLink>
                    </div>
                </Container>
            </BackgroundBeamsWithCollision>
            <div className="h-dvh w-full">
                <ReactPlayer
                    src="https://asteroidmetal.com/videos/video1Officialmuted.mp4"
                    playing={true}
                    muted={true}
                    controls={false}
                    width={"100%"}
                    height={"100%"}
                    className="object-cover"
                    loop
                />
            </div>
        </Section>
    )
}

export default Hero