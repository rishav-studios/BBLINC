type IndustryComponent = {
    industry: string;
    components: string[]
}

export const industryComponents: IndustryComponent[] = [
    {
        industry: "aerospace",
        components: Array(10).fill(null).map((_, index) => {

            if (index + 1 < 10) {

                return `https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/aerospace/Aerospace_0${index + 1}.webp`
            }
            return `https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/aerospace/Aerospace_${index + 1}.webp`
        })
    },
    {
        industry: "automobile",
        components: Array(30).fill(null).map((_, index) => {

            if (index + 1 < 10) {

                return `https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/automobile/Automotive_0${index + 1}.webp`
            }
            return `https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/automobile/Automotive_${index + 1}.webp`
        })
    },
    {
        industry: "hvac",
        components: []
    },
    {
        industry: "oll-gas",
        components: Array(14).fill(null).map((_, index) => {

            if (index + 1 < 10) {

                return `https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/oil-gas/Oil%20&%20Gas%20Industry_0${index + 1}.webp`
            }
            return `https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/oil-gas/Oil%20&%20Gas%20Industry_${index + 1}.webp`
        })
    },
    {
        industry: "chemical",
        components: [
            "https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/chemical/Ball%20Valve_01.webp",
            "https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/chemical/Ball%20Valve_04.webp",
            "https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/chemical/Ball%20Valve_05.webp",
            "https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/chemical/Ball%20Valve_06.webp",
            "https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/chemical/Ball%20Valve_07.webp",
            "https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/chemical/Ball%20Valve_08.webp",
            "https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/chemical/Ball%20Valve_09.webp",
        ]
    },
    {
        industry: "marine",
        components: Array(30).fill(null).map((_, index) => {

            if (index + 1 < 10) {

                return `https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/marine/Marine%20Comp._0${index}.webp`
            }
            return `https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/marine/Marine%20Comp._${index}.webp`
        })
    },
    {
        industry: "defense",
        components: Array(15).fill(null).map((_, index) => {

            if (index + 1 < 10) {

                return `https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/defense/Defence_0${index}.webp`
            }
            return `https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/defense/Defence_${index}.webp`
        })
    },
    {
        industry: "agriculture",
        components: Array(10).fill(null).map((_, index) => {

            if (index + 1 < 10) {

                return `https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/agriculture/Agriculture_0${index + 1}.webp`
            }
            return `https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/agriculture/Agriculture_${index + 1}.webp`
        })
    },
]