import CTA from "@/components/pages/home/CTA";
import IndustryComponentsSection from "@/components/pages/industries/IndustryComponentsSection";
import PageHeader from "@/components/shared/PageHeader";
import { INDUSTRIES_DATA } from "@/constants/industries_data";
import { fetchIndustryComponents } from "@/lib/industry-components";
import { Metadata } from "next";

type PageProps = {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const industry = INDUSTRIES_DATA.find((i) => i.slug === slug);

    if (!industry) return { title: "Industry" };

    const title = `${industry.label} Brass Components`;
    const description = `BBLINC manufactures precision brass and metal components for the ${industry.label.toLowerCase()} sector. ${industry.description}`;
    const url = `https://www.bblinc.in/industries/${slug}`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title: `${title} | BBLINC`,
            description,
            url,
        },
    };
}

const page = async ({ params }: PageProps) => {
    const { slug } = await params
    const industry = INDUSTRIES_DATA.find((industry) => industry.slug === slug)
    const components = await fetchIndustryComponents(slug)
    return (
        <main key={slug + "-industry"}>
            <PageHeader
                title={industry?.label || ""}
                eyebrowText="Industry"
                otherTextClassName="text-gray-200"
                eyeBrowClassName="text-foreground"
                style={{
                    backgroundImage: `linear-gradient(to bottom,transparent,rgba(0,0,0,0.50),rgba(0,0,0,0.75)), url("${industry?.imageSrc}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    color: "white"
                }} />
            <IndustryComponentsSection components={components} />
            <CTA className="bg-white" />
        </main>
    )
}

export default page