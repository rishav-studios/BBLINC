import CTA from "@/components/pages/home/CTA";
import MaterialsGrid from "@/components/pages/materials/MaterialsGrid";
import PageHeader from "@/components/shared/PageHeader";
import { materials } from "@/constants/materials_data";

export default function Page() {
    return (
        <>
            <PageHeader eyebrowText="Materials" title="Materials We Supply" />
            <MaterialsGrid materials={materials} />
            <CTA
                title={
                    <>
                        Ready to engineer
                        <br className="hidden sm:block" />
                        <span className="text-black font-medium">
                            the future?
                        </span>
                    </>
                }
                titleClassName="text-white"
                descriptionClassName="text-white/80"
                className="bg-linear-to-r from-gold to-primary" />
        </>
    );
}
