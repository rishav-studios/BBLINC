"use client"
import Fade from '@/components/animations/Fade'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import { Description, Heading, SectionHeader, Separator } from '@/components/shared/SectionHeader'
import { exportCountries, type ExportCountry } from '@/constants/export_countries'
import { useGlobe } from '@/contexts/GlobeContext'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@bbl/ui/components/select'
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
                    className='text-sm font-medium tracking-[0.18em] capitalize text-gray-600 group-hover:text-primary transition-colors duration-300 text-center leading-tight max-w-20'
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

            <Container className='relative gap-12 z-2 flex flex-col h-full mx-0 ml-[5%]'>
                <SectionHeader>
                    <Heading>Exports</Heading>
                    <Separator />
                    <Description className='max-w-70 sm:max-w-md'>With a robust global reach, we serve a diverse clientele across multiple continents, delivering exceptional value worldwide.</Description>
                </SectionHeader>

                {/* countries grid – visible md+ */}
                <div className='md:grid hidden grid-cols-3 gap-6 '>
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

                {/* countries select – visible below md */}
                <div className='md:hidden mt-auto'>
                    <Select
                        value={selectedCountry ?? ''}
                        onValueChange={(value) => setSelectedCountry(value || null)}
                    >
                        <SelectTrigger className='w-full'>
                            <SelectValue placeholder='Select a country' />
                        </SelectTrigger>
                        <SelectContent>
                            {exportCountries.map((country: ExportCountry) => (
                                <SelectItem key={country.name} value={country.name}>
                                    <country.flag className='w-5 h-5 rounded-full inline-block' />
                                    <span className='capitalize'>{country.alias ?? country.name}</span>
                                </SelectItem>
                            ))}
                            <SelectItem key="none" value="">
                                <span className='capitalize'>Select a country</span>
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </Container>
        </Section>
    )
}

export default Exports