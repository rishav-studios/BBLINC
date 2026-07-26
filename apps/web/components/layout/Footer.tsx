"use client";

import { INDUSTRIES_DATA } from "@/constants/industries_data";
import { MATERIALS_DATA as materials } from "@/constants/materials_data";
import useIsMobile from "@/hooks/useIsMobile";
import { TextHoverEffect } from "@bbl/ui/components/ui/text-hover-effect";
import { cn } from "@bbl/ui/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";
import Fade from "../animations/Fade";
import { CustomLink } from "../shared/clickables/CustomLink";
import { variantClasses } from "../shared/clickables/variantClasses";
import Container from "./Container";



// import { Linkedin, Twitter, Instagram } from "lucide-react";

const FOOTER_LINKS = {
    company: [
        { id: "f8f6c2c2-2d6dd7b", label: "About Us", href: "/about" },
        // { id: "f8f6c2c2-2d6dd7c", label: "Facilities", href: "/facilities" },
        { id: "f8f6c2c2-2d6dd7d", label: "Contact", href: "/contact" },
        { id: "f8f6c2f2-2d6dd7d", label: "Quote", href: "/quote" },
        // { id: "f8f6c2c2-2d6dd5d", label: "Blogs", href: "/blogs" },

    ],
    industries: INDUSTRIES_DATA.map((industry, index) => ({
        ...industry,
        id: `industry-${index}`,
        href: `/industries/${industry.slug}`
    })),
    materials: materials.map((material, index) => ({
        label: material.name,
        id: `material-${index}`,
        href: `/materials/${material.name}`
    })),
    legal: [
        { id: "f8f6c2c2-2d6dd7h", label: "Privacy Policy", href: "/privacy-policy" },
        { id: "f8f6c2c2-2d6dd7i", label: "Terms of Service", href: "/terms-of-service" },
        { id: "f8f6c2c2-2d6dd7j", label: "Quality Policy", href: "/quality-policy" },
    ],
    socials: [
        {
            id: "f8f6c2c2-2d6dd7k",
            // WhatsApp SVG icon inline — sized correctly at size-5 (20px)
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0" viewBox="0 0 640 640">
                <path
                    className="fill-background/80 group-hover/custom-link:fill-primary transition-colors duration-300" d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
            </svg>,
            label: "Whatsapp", href: "https://wa.me/9173355608"
        },
        {
            id: "f8f6c2c2-2d6dd7m",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0" viewBox="0 0 640 640">
                <path
                    className="fill-background/80 group-hover/custom-link:fill-primary transition-colors duration-300" d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM165 266.2L231.5 266.2L231.5 480L165 480L165 266.2zM236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160C219.5 160 236.7 177.2 236.7 198.5zM413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480L413.9 480z" />
            </svg>,
            label: "LinkedIn", href: "https://www.linkedin.com/company/bblinc."
        },
        {
            id: "f8f6c2c2-2d6dd7z",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5 shrink-0">
                <path className="fill-background/80 group-hover/custom-link:fill-primary transition-colors duration-300" d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg>,
            label: "Instagram", href: "https://www.linkedin.com/company/bblinc."
        },
    ]
};

// Glow orb — a radial gradient circle perfectly centered in its own viewBox.
// Use blur + opacity via className to tune intensity at the call site.
export const GlowOrb = ({ className = "", id }: { className?: string; id: string }) => {
    const gradId = `orb-grad-${id}`;
    return (
        <svg
            className={cn("absolute pointer-events-none", className)}
            xmlns="http://www.w3.org/2000/svg"
            width="1440"
            height="1440"
            viewBox="0 0 1440 1440"
            fill="none"
            aria-hidden="true"
        >
            <defs>
                <radialGradient id={gradId} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#D9C073" stopOpacity="0.85" />
                    <stop offset="30%" stopColor="#D9C073" stopOpacity="0.50" />
                    <stop offset="60%" stopColor="#D9C073" stopOpacity="0.18" />
                    <stop offset="85%" stopColor="#D9C073" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#D9C073" stopOpacity="0" />
                </radialGradient>
            </defs>
            <circle cx="720" cy="720" r="720" fill={`url(#${gradId})`} />
        </svg>
    );
}

type GridItemProps = {
    className?: string;
    children: ReactNode;
}
const GridItem = ({ className, children }: GridItemProps) => {
    return (
        <div className={cn("w-full space-y-6 p-1", className)}>
            {children}
        </div>
    )
}

const Heading = ({ children }: { children: string }) => {
    return <h2 className="font-heading text-background font-medium text-3xl ">{children}</h2>
}

type LinksListProps = {
    links: {
        id: string,
        label: string,
        href: string,
        icon?: ReactNode
    }[];
    direction?: "vertical" | "horizontal",
    shouldOpenExternal?: boolean
}
const LinksList = ({ links, direction = "vertical", shouldOpenExternal = false }: LinksListProps) => {
    return (
        <ul className={cn(" gap-4", direction === "horizontal" ? "grid grid-cols-1 md:flex" : "grid grid-cols-3 md:grid-cols-1")}>
            {links.map((link) => (
                <li key={link.id}>
                    <CustomLink
                        href={link.href}
                        variant="hover-underline"
                        className="text-background/80 w-max font-medium md:text-lg gap-2"
                        target={shouldOpenExternal ? "_blank" : "_self"}
                    >
                        {link.icon && <>{link.icon}</>}
                        {link.label}
                    </CustomLink>
                </li>
            ))}
        </ul>
    )
}

const FooterQuickLinks = () => {
    return (
        <GridItem>
            <Heading>Quick Links</Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
                <div>
                    <h3 className="text-xs text-background/50 font-medium mb-1 md:mb-4">Company</h3>
                    <LinksList links={FOOTER_LINKS.company} />
                </div>
                <div>
                    <h3 className="text-xs text-background/50 font-medium mb-1 md:mb-4">Industries</h3>
                    <LinksList links={FOOTER_LINKS.industries} />
                </div>
                <div>
                    <h3 className="text-xs text-background/50 font-medium mb-1 md:mb-4">Materials</h3>
                    <LinksList links={FOOTER_LINKS.materials} />
                </div>
            </div>
        </GridItem>
    )
}

const FooterContactInfo = () => {
    const combinedClasses = cn(
        "w-max",
        variantClasses["hover-underline"].base,
        variantClasses["hover-underline"].hover,
    )
    return (
        <GridItem>
            <div className="space-y-6">
                <Heading>Contact info</Heading>
                <div className="space-y-4 text-background/80 w-max font-medium md:text-lg">

                    <a href="https://maps.app.goo.gl/X7yP2VG1YgezafVe7" target="_blank" rel="noopener noreferrer" className={combinedClasses}>
                        Jamnagar, Gujarat, India
                    </a>
                    <a href="mailto:info@bblinc.in" target="_blank" className={combinedClasses}>
                        info@bblinc.in
                    </a>
                    <a href="tel:+919173355608" target="_blank" className={combinedClasses}>
                        +91 9173355608
                    </a>
                    <a href="tel:+919879614827" target="_blank" className={combinedClasses}>
                        +91 9879614827
                    </a>


                </div>
            </div>
        </GridItem>
    )
}

const FooterWorkingHours = () => {
    return (
        <GridItem>
            <div className="space-y-6">

                <Heading>Working hours</Heading>

                <ul className="space-y-4 text-background/80 w-max font-medium md:text-lg">
                    <li>Sat to Thu &nbsp;-&nbsp; 9:00 AM &nbsp;to&nbsp; 6:00 PM</li>
                    <li>Fri &nbsp;-&nbsp; Closed</li>
                </ul>
            </div>

        </GridItem >
    )
}

const Footer = () => {
    const isMobile = useIsMobile()
    return (
        <footer className="bg-foreground pt-24 relative overflow-hidden">

            <Container className="relative z-10">
                {/* top */}
                <Fade>
                    <GridItem className="flex gap-4 md:gap-12 flex-col md:flex-row  md:items-center">
                        <Image src="/logo-white.svg" alt="" width={120} height={120} />
                        <p className="text-background/80 max-w-sm font-normal">We are a precision engineering firm specializing in various materials with over 26 years of industry experience.</p>
                    </GridItem>
                </Fade>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 mt-12">


                    <Fade delay={.3} className="lg:col-span-2">

                        <FooterQuickLinks />
                    </Fade>
                    <Fade delay={.4}>

                        <FooterContactInfo />
                    </Fade>
                    <Fade delay={.5}>

                        <FooterWorkingHours />
                    </Fade>

                </div>
                {/* middle */}

                <div className="flex justify-between md:mt-24  my-12 flex-col xl:flex-row gap-12">
                    <Fade>

                        <LinksList links={FOOTER_LINKS.legal} direction={isMobile ? "vertical" : "horizontal"} />
                    </Fade>
                    <Fade delay={.2}>

                        <LinksList links={FOOTER_LINKS.socials} direction="horizontal" shouldOpenExternal />
                    </Fade>
                </div>

                {/* bottom */}
                <TextHoverEffect text="BBLINC" />
            </Container>

        </footer >
    )
}
export default Footer;