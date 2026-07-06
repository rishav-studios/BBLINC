import { cn } from "@bbl/ui/lib/utils";
import { RiArrowRightLine } from "@remixicon/react";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    text: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, text, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                "group/arrow-btn relative flex items-center justify-between gap-4 rounded-full bg-primary px-2 pl-5 py-2 text-primary-foreground overflow-hidden transition-all duration-300",
                className
            )}
            {...props}
        >
            <div className="relative overflow-hidden">
                <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/arrow-btn:translate-y-[-150%] flex flex-col">
                    <span className=" font-medium">{text}</span>
                    <span className="absolute left-4- top-[150%] font-medium">{text}</span>
                </div>
            </div>
            {children}

        </button>
    )
})
Button.displayName = "Button"

type ArrowProps = {
    className?: string,
    arrowClassName?: string
}

const Arrow = ({ className, arrowClassName }: ArrowProps) => {
    return (
        <div className={cn("relative flex items-center justify-center overflow-hidden rounded-full bg-foreground/80 p-2", className)}>
            <RiArrowRightLine
                className={cn(
                    "transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/arrow-btn:translate-x-[200%]",
                    arrowClassName
                )}
            />
            <RiArrowRightLine
                className={cn(
                    "absolute translate-x-[-200%] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/arrow-btn:translate-x-0",
                    arrowClassName
                )}
            />
        </div>
    )
}

export { Arrow, Button };

