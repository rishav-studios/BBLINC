import CTA from "@/components/pages/home/CTA";
import IndustryComponentsSection from "@/components/pages/industries/IndustryComponentsSection";
import PageHeader from "@/components/shared/PageHeader";
import { MATERIALS_DATA } from "@/constants/materials_data";
import { fetchMaterialComponents } from "@/lib/materials";
import { Metadata } from "next";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const material = MATERIALS_DATA.find((m) => m.id === slug);

    if (!material) return { title: "Material" };

    const title = `${material.name} Components Manufacturer`;
    const description = `BBLINC manufactures precision ${material.name.toLowerCase()} components (${material.properties.join(", ")}) for industrial and OEM applications. ${material.shortDescription}`;
    const url = `https://www.bblinc.in/materials/${slug}`;

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

type PageProps = {
    params: Promise<{ slug: string }>;
}



const page = async ({ params }: PageProps) => {
    const { slug } = await params
    const material = MATERIALS_DATA.find((material) => material.id === slug)
    const components = await fetchMaterialComponents(slug)
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