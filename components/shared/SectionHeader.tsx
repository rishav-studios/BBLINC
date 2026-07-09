import { cn } from "@bbl/ui/lib/utils";

type SectionHeaderProps = {
    children: React.ReactNode;
    className?: string
}
const SectionHeader = ({ children, className }: SectionHeaderProps) => {
    return (
        <div className={cn("flex h-20 items-center gap-6 w-max", className)}>
            {children}
        </div>
    )
}

const Separator = () => {
    return (
        <div className="w-[0.5px] h-8/10 mt-auto bg-linear-to-b from-transparent via-primary/70 to-transparent" />
    )
}

const Heading = ({ children }: { children: string }) => {
    return (
        <h2 className="text-6xl">{children}</h2>
    )
}
const Description = ({ children, className }: { children: string, className?: string }) => {
    if (children.includes("\n")) {
        const lines = children.split("\n")
        return (
            <p className={cn("flex flex-col translate-y-2", className)}>
                {lines.map((line, index) => (
                    <span key={index} className="text-gray-500">{line}</span>
                ))}
            </p>
        )
    }
    return (
        <p className={cn("text-gray-500", className)}>{children}</p>
    )
}

export { Description, Heading, SectionHeader, Separator };

