import CTA from "@/components/pages/home/CTA";
import IndustryComponentsSection from "@/components/pages/industries/IndustryComponentsSection";
import PageHeader from "@/components/shared/PageHeader";
import { INDUSTRIES_DATA } from "@/constants/industries_data";
import { industryComponents } from "@/constants/industry_components";

type PageProps = {
    params: Promise<{ slug: string }>;
}

const page = async ({ params }: PageProps) => {
    const { slug } = await params
    const industry = INDUSTRIES_DATA.find((industry) => industry.slug === slug)
    const components = industryComponents.find((comp) => comp.industry === slug)?.components || []
    return (
        <>
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
        </>
    )
}

export default page