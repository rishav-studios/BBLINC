"use client"


import Fade from "@/components/animations/Fade"
import Container from "@/components/layout/Container"
import Section from "@/components/layout/Section"
import CatalogueDownloadDialog from "@/components/pages/home/CatalogueDownloadDialog"
import { Arrow, CustomLink } from "@/components/shared/clickables/CustomLink"
import { variantClasses } from "@/components/shared/clickables/variantClasses"
import { Description, Heading, SectionHeader, Separator } from "@/components/shared/SectionHeader"
import { TextRevealOnScroll } from "@/components/shared/TextReveal"
import { cn } from "@bbl/ui/lib/utils"
import { RiDownloadLine } from "@remixicon/react"
import { useState } from "react"


const Circle = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-42 aspect-square border border-primary border-dashed rounded-full flex items-center justify-center">{children}</div>

    )
}

const About = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    return (
        <>

            <Section className="bg-gray-100">
                <Container className="relative z-2">

                    {/* ── Row 1: Header bar ── */}
                    <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
                        <SectionHeader>
                            <Heading>About</Heading>
                            <Separator />
                            <Description>
                                {`Excellence is not an act\nBut a habit.`}
                            </Description>
                        </SectionHeader>
                        <Fade className="flex gap-4 items-center">
                            <button type="button" onClick={() => setDialogOpen(true)} className={cn(variantClasses['outline-black'].base, variantClasses['outline-black'].hover, "py-3.25")}>
                                Download Catalogue
                                <RiDownloadLine />
                            </button>
                            <CustomLink href="/about" variant="button-brand" className="hidden lg:flex h-max">
                                About us
                                <Arrow variant="black" />
                            </CustomLink>
                        </Fade>
                    </div>

                    {/* ── Row 2: Scroll-reveal statement ── */}
                    <div className="py-16 pt-6 md:pt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

                        <div className="lg:col-span-2">

                            <TextRevealOnScroll as="div" className="text-xl md:text-2xl lg:text-4xl leading-snug">
                                {`We are precision engineering partner commited to transforming ideas into world class metal components. Our passion for the innovation, technical excellence, and uncompromising quality enables us to deliver solutions that power industries across the globe.`}
                            </TextRevealOnScroll>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between md:justify-start md:gap-12 lg:gap-0 lg:justify-between">
                            <Fade>

                                <div className="flex flex-col w-max items-center gap-2">
                                    <Circle>
                                        <div className=" font-semibold flex">
                                            <span className="text-5xl">26</span>
                                            <span className="text-4xl text-primary -translate-y-4">+</span>
                                        </div>
                                    </Circle>
                                    <Description>Years of experience</Description>
                                </div>
                            </Fade>
                            <Fade delay={0.5} className="ml-auto md:ml-0 lg:translate-y-24">

                                <div className="flex flex-col items-center gap-2  w-max ">
                                    <Circle>
                                        <div className=" font-semibold flex">
                                            <span className="text-5xl">100</span>
                                            <span className="text-4xl text-primary -translate-y-4">+</span>
                                        </div>
                                    </Circle>
                                    <Description>Clients Worldwide</Description>
                                </div>
                            </Fade>
                        </div>


                    </div>

                    <Fade className="w-full flex justify-center items-center lg:mt-24">
                        <img className="w-full" src="/exploded-black.webp" />
                    </Fade>

                </Container>
            </Section>
            <CatalogueDownloadDialog open={dialogOpen} onOpenChange={setDialogOpen} />
        </>

    )
}

export default About