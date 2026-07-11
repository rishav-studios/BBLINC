import { cn } from "@bbl/ui/lib/utils"

const EyeBrow = ({ text, className }: { text: string, className?: string }) => {
    return (
        <div className={cn("bg-background text-sm font-medium flex items-center gap-2 px-3 py-1.5 border border-chart-3/50 rounded-full w-fit ", className)}>
            <div className="w-1 h-1 bg-primary" />
            {text}
        </div>
    )
}

export default EyeBrow