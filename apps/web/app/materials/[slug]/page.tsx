import CTA from "@/components/pages/home/CTA";
import IndustryComponentsSection from "@/components/pages/industries/IndustryComponentsSection";
import PageHeader from "@/components/shared/PageHeader";
import { materialComponents } from "@/constants/material_components";
import { MATERIALS_DATA } from "@/constants/materials_data";

type PageProps = {
    params: Promise<{ slug: string }>;
}

const page = async ({ params }: PageProps) => {
    const { slug } = await params
    const material = MATERIALS_DATA.find((material) => material.id === slug)
    const components = materialComponents.find((comp) => comp.material === slug)?.components || []
    return (
        <main key={slug + "-material"}>
            <PageHeader
                title={material?.name || ""}
                eyebrowText="Material"
                otherTextClassName="text-gray-200"
                eyeBrowClassName="text-foreground"
                style={{
                    backgroundImage: `linear-gradient(to bottom,transparent,rgba(0,0,0,0.50),rgba(0,0,0,0.75)), url("${material?.imageSrc}")`,
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