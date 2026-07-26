type MaterialComponent = {
    material: string;
    components: string[]
}

const populateMaterialsComponentsArray = (material: string, count: number, componentNamePrefix: string) => {
    return Array(count).fill(null).map((_, index) => {
        if (index + 1 < 10) {
            return `https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/materials/${material.toLowerCase()}/${componentNamePrefix}_0${index + 1}.webp`
        }
        return `https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/products/materials/${material.toLowerCase()}/${componentNamePrefix}_${index + 1}.webp`
    })
}

export const materialComponents: MaterialComponent[] = [
    {
        material: "brass",
        components: [
            ...populateMaterialsComponentsArray("brass", 10, "Brass Auto Parts"),
            ...populateMaterialsComponentsArray("brass", 5, "Brass Bushing"),
            ...populateMaterialsComponentsArray("brass", 30, "Brass Fitting"),
            ...populateMaterialsComponentsArray("brass", 10, "Brass Forgings Parts"),
            ...populateMaterialsComponentsArray("brass", 24, "Cnc Turned Com."),
        ]
    },
    {
        material: "aluminium",
        components: populateMaterialsComponentsArray("aluminium", 5, "Aluminium Comp.")
    },
    {
        material: "stainless-steel",
        components: populateMaterialsComponentsArray("stainless-steel", 15, "Stainless Steel Comp.")
    },
    {
        material: "copper",
        components: populateMaterialsComponentsArray("copper", 5, "Copper Comp.")
    },
    {
        material: "mild-steel",
        components: []
    },
    {
        material: "bronze",
        components: []
    },
    {
        material: "gun-metal",
        components: []
    },
    {
        material: "titanium",
        components: []
    },

]