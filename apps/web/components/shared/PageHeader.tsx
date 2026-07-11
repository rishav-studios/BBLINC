import { BackgroundBeamsWithCollision } from '@bbl/ui/components/ui/background-beams-with-collision';
import { cn } from '@bbl/ui/lib/utils';
import { CSSProperties } from 'react';
import Fade from '../animations/Fade';
import Container from '../layout/Container';
import Section from '../layout/Section';
import EyeBrow from './EyeBrow';
type PageHeaderProps = {
    title: string;
    eyebrowText: string;
    style?: CSSProperties;
    eyeBrowClassName?: string;
    otherTextClassName?: string;
    className?: string;
}
const PageHeader = ({ title, eyebrowText, style, eyeBrowClassName = "", otherTextClassName = "", className = "" }: PageHeaderProps) => {
    return (
        <Section className={cn('py-0! lg:py-0! min-h-max', className)} style={style}>
            <BackgroundBeamsWithCollision className="h-[70dvh]!">
                <Container className="py-16 relative h-full flex flex-col justify-center">
                    <Fade className='flex flex-col items-center'>
                        <EyeBrow className={eyeBrowClassName} text={eyebrowText} />
                        <h1 className='text-8xl font-semibold text-center'>{title}</h1>
                    </Fade>


                    {/* ── Bottom info strip ── */}
                    <Fade delay={0.3} className="flex items-end absolute bottom-4  justify-between w-full mt-16 gap-4">

                        {/* Left — address */}
                        <div className="flex flex-col gap-1">
                            <a href="https://maps.app.goo.gl/sGKyVJ9uXdXvq8Ny6" target='_blank'>
                                <p className={cn("text-xs uppercase tracking-widest text-foreground/60 font-medium leading-snug", otherTextClassName)}>
                                    Jamnagar, Gujarat, India
                                </p>
                            </a>
                        </div>

                        {/* Centre — scroll down indicator */}
                        <div className="flex flex-col items-center gap-2 shrink-0">
                            <div className="relative h-10 w-0.5 bg-foreground/15 overflow-hidden">
                                <span
                                    className="absolute top-0 left-0 w-full bg-primary"
                                    style={{
                                        height: "40%",
                                        animation: "scrollTrack 1.6s cubic-bezier(0.4,0,0.2,1) infinite",
                                    }}
                                />
                            </div>
                            <span className={cn("text-[0.6rem] uppercase tracking-[0.18em] text-foreground/60 font-medium", otherTextClassName)}>
                                Scroll
                            </span>

                        </div>

                        {/* Right — GPS coordinates */}
                        <div className="flex flex-col items-end gap-1">
                            <a href="https://maps.app.goo.gl/sGKyVJ9uXdXvq8Ny6" target='_blank'>
                                <p className={cn("text-xs uppercase tracking-widest text-foreground/60 font-medium leading-snug text-end", otherTextClassName)}>
                                    22.4707° N, 70.0577° E
                                </p>
                            </a>
                        </div>
                    </Fade>

                    {/* Keyframe for the travelling scroll bar */}
                    <style>{`
                        @keyframes scrollTrack {
                            0%   { transform: translateY(-100%); opacity: 1; }
                            80%  { transform: translateY(300%); opacity: 1; }
                            100% { transform: translateY(300%); opacity: 0; }
                        }
                    `}</style>

                </Container>
            </BackgroundBeamsWithCollision>
        </Section>

    )

}

export default PageHeader