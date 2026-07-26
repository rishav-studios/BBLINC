import { cn } from "@bbl/ui/lib/utils";

type BackgroundNoiseProps = {
    className?: string;
    image?: string;
}
const BackgroundNoise = ({ className = "", image = '/background-noise.gif' }: BackgroundNoiseProps) => {
    return (
        <div
            style={{
                backgroundImage: `url("${image}")`
            }}
            className={cn("absolute inset-0 w-full h-full opacity-10 z-1", className)} />
    )
}

export default BackgroundNoise