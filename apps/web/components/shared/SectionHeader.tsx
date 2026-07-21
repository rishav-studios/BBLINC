import { cn } from "@bbl/ui/lib/utils";
import Fade from "../animations/Fade";

type SectionHeaderProps = {
    children: React.ReactNode;
    className?: string
}
const SectionHeader = ({ children, className }: SectionHeaderProps) => {
    return (
        <Fade className={cn("flex flex-col lg:flex-row lg:h-20 lg:items-center gap-1 lg:gap-6 w-max", className)}>
            {children}
        </Fade>
    )
}

const Separator = () => {
    return (
        <div className="w-px h-8/10 bg-linear-to-b from-transparent via-primary/70 to-transparent" />
    )
}

const Heading = ({ children }: { children: string }) => {
    return (
        <h2 className="text-4xl lg:text-6xl">{children}</h2>
    )
}
const Description = ({ children, className }: { children: string, className?: string }) => {
    if (children.includes("\n")) {
        const lines = children.split("\n")
        return (
            <p className={cn("flex flex-col text-gray-500", className)}>
                {lines.map((line, index) => (
                    <span key={index} className="">{line}</span>
                ))}
            </p>
        )
    }
    return (
        <p className={cn("text-gray-500", className)}>{children}</p>
    )
}

export { Description, Heading, SectionHeader, Separator };

