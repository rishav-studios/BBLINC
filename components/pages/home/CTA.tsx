import Fade from '@/components/animations/Fade'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import { Arrow, CustomLink } from '@/components/shared/clickables/CustomLink'
import { cn } from '@bbl/ui/lib/utils'
import { ReactNode } from 'react'
type CTAProps = {
    title?: ReactNode;
    description?: string;
    className?: string;
    descriptionClassName?: string;
    titleClassName?: string;
}
const CTA = ({
    descriptionClassName = "",
    titleClassName = "",
    className = "",
    title = <>
        Ready to engineer
        <br className="hidden sm:block" />
        <span className="text-primary font-medium">
            the future?
        </span>
    </>,
    description = "We turn your ideas into reality with precision engineering and on-time delivery."
}: CTAProps) => {


    return (
        <Section className={cn('bg-white flex', className)}>
            <Container className='my-auto'>
                <Fade
                    className="relative z-20 flex flex-col items-center justify-center mx-auto text-center px-4 w-full max-w-5xl"
                >
                    <h2 className={cn("text-4xl md:text-6xl lg:text-8xl font-bold mb-6 ", titleClassName)}>
                        {title}
                    </h2>

                    <p className={cn("text-gray-500 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-medium ", descriptionClassName)}>
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full sm:w-auto">

                        <CustomLink href="/quote" variant="button-black" className="text-xl font-semibold">
                            Request a Quote
                            <Arrow variant="primary" />
                        </CustomLink>

                        <CustomLink href="/contact" variant="outline-black" className="text-xl py-3 px-10 font-semibold">Contact</CustomLink>
                    </div>
                </Fade>
            </Container>
        </Section>
    )
}

export default CTA