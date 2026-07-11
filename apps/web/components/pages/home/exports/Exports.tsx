"use client"
import Fade from '@/components/animations/Fade'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import { Description, Heading, SectionHeader, Separator } from '@/components/shared/SectionHeader'
import { exportCountries, type ExportCountry } from '@/constants/export_countries'
import { useGlobe } from '@/contexts/GlobeContext'
import Globe from './Globe'

const highlightedCountries = exportCountries.map((country: ExportCountry) => country.name)
type CountryCardProps = {
    country: ExportCountry;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}
const CountryCard = ({ country, onMouseEnter, onMouseLeave }: CountryCardProps) => {
    return (
        <Fade>
            <div
                className='group relative flex bg-background rounded-xl border border-gray-300 p-4 items-center gap-3 cursor-pointer shadow-lg'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {/* Flag ring + glow */}
                <div className='w-8 h-8 rounded-full overflow-hidden ring-2 ring-white/10'>
                    <country.flag className='w-full h-full object-cover' />
                </div>

                {/* Country name */}
                <span
                    className='text-sm font-medium tracking-[0.18em] capitalize text-gray-600 group-hover:text-primary transition-colors duration-300 text-center leading-tight max-w-[80px]'
                >
                    {country.alias ? country.alias : country.name}
                </span>
            </div>
        </Fade>
    )
}

const Exports = () => {
    const { selectedCountry, setSelectedCountry } = useGlobe()
    return (
        <Section className='bg-white h-[calc(100dvh+8rem)] '>


            <div className='absolute inset-0 mt-16 w-screen h-screen'>

                <Globe highlightedCountries={highlightedCountries} selectedCountry={selectedCountry} />
            </div>

            <Container className='relative space-y-12 z-2 max-w-xl mx-0 ml-[5%]'>
                <SectionHeader>
                    <Heading>Exports</Heading>
                    <Separator />
                    <Description>{`With a robust global reach, we serve a diverse clientele\nacross multiple continents, delivering exceptional value worldwide.`}</Description>
                </SectionHeader>

                {/* countries grid */}
                <div className='grid grid-cols-3 gap-6 '>
                    {
                        exportCountries.map((country: ExportCountry) => (
                            <CountryCard
                                key={country.name}
                                country={country}
                                onMouseEnter={() => setSelectedCountry(country.name)}
                                onMouseLeave={() => setSelectedCountry(null)}
                            />
                        ))
                    }
                </div>
            </Container>
        </Section>
    )
}

export default Exports