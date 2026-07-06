"use client"
const HeroVideo = () => {
    return (
        <div className=" relative w-screen h-[120dvh]">
            <video src="/hero-video.mp4" className="w-full top-0 bottom-0 right-0 left-0 absolute" autoPlay loop muted>
            </video>
            <div className="absolute z-1 top-0 left-0 bottom-0 right-0 w-full h-full bg-linear-to-t from-primary/40 via-transparent to-transparent flex items-center justify-center">
                <div className="flex flex-col gap-4 items-center">
                    <div className="w-84 p-2 bg-foreground/50 rounded-2xl flex flex-col gap-2 items-center pb-4">
                        <img src="https://framerusercontent.com/images/yZK2vzwKqUH8m15aeLGrA2alok.png?scale-down-to=512&width=4800&height=3616" alt="alt text" className="rounded-xl" />
                        <p className="font-semibold text-background text-lg">Tejas Mungra</p>
                        <p className=" text-background/60 font-semibold">Founder & CEO</p>
                    </div>
                    <p className="text-background max-w-sm text-lg text-center font-semibold">Great manufacturing isn't just about precision it's about vision, commitment, and the relentless pursuit of excellence.</p>
                </div>
            </div>

        </div>
    )
}

export default HeroVideo