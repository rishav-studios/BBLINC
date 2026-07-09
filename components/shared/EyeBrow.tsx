
const EyeBrow = ({ text }: { text: string }) => {
    return (
        <div className="bg-background text-sm font-medium flex items-center gap-2 px-3 py-1.5 border border-chart-3/50 rounded-full w-fit ">
            <div className="w-1 h-1 bg-primary" />
            {text}
        </div>
    )
}

export default EyeBrow