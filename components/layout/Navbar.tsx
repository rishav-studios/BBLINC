"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuSeparator, DropdownMenuTrigger } from "@bbl/ui/components/dropdown-menu"
import { cn } from "@bbl/ui/lib/utils"
import { RemixiconComponentType, RiMenu3Line } from "@remixicon/react"
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Arrow, CustomLink } from "../shared/clickables/CustomLink"
import { variantClasses } from "../shared/clickables/variantClasses"

const SCROLL_START = 0;
const SCROLL_END = 150;

// ─── Nav Link Types ────────────────────────────────────────────────────────────
type SubLink = {
    title: string
    href: string
    icon?: RemixiconComponentType
}
type NavLinkItem = {
    type: "link"
    title: string
    href: string
    // subLinks intentionally absent — links are leaf nodes
}
type NavDropdownItem = {
    type: "dropdown"
    title: string
    subLinks: SubLink[]
    // href intentionally absent — dropdowns are not navigable themselves
}
type NavItem = NavLinkItem | NavDropdownItem
// ─── Nav Data ──────────────────────────────────────────────────────────────────
const navItems: NavItem[] = [
    { type: "link", title: "Home", href: "/" },
    {
        type: "link",
        title: "Industries",
        href: "/industries"
    },
    {
        type: "link",
        title: "Materials",
        href: "/materials"
    },
    { type: "link", title: "About", href: "/about" },
    { type: "link", title: "Contact", href: "/contact" },
]

const NavItemRenderer = ({ item }: { item: NavItem }) => {
    if (item.type === "link") {
        return <CustomLink href={item.href} className="w-max hover:text-current before:bg-gold">{item.title}</CustomLink>
    }
    const [isOpen, setIsOpen] = useState(false)
    return (
        <DropdownMenu open={isOpen} modal={false}>
            <DropdownMenuTrigger onMouseEnter={() => setIsOpen(true)} className={cn("", variantClasses["hover-underline"].hover, variantClasses["hover-underline"].base)}>
                {item.title}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-4 w-max p-4">
                <DropdownMenuGroup className="space-y-3">
                    <div className={cn((item.subLinks.length > 7) ? "grid grid-cols-2 gap-6" : "grid grid-cols-1")}>

                        {item.subLinks.map((sub) => (
                            <CustomLink key={sub.href} href={sub.href}>
                                {sub.icon && <sub.icon className="size-4" />}
                                {sub.title}
                            </CustomLink>
                        ))}
                    </div>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
const Navbar = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [SCROLL_START + 100, SCROLL_END + 160], [380, 18])
    const containerWidth = useTransform(scrollY, [SCROLL_START, SCROLL_END], ["30%", "90%"])

    // Derive a numeric width (30 → 90) to detect the 60% threshold
    const widthNum = useTransform(containerWidth, (v) => parseFloat(v))


    const pathname = usePathname()
    const isHomePage = pathname === "/"
    const [isExpanded, setIsExpanded] = useState(!isHomePage)

    useEffect(() => {
        if (!isHomePage) {
            setIsExpanded(true)
        } else {
            setIsExpanded(widthNum.get() >= 60)
        }
    }, [isHomePage, widthNum])

    useMotionValueEvent(widthNum, "change", (v) => {
        if (!isHomePage) {
            return
        }
        setIsExpanded(v >= 60)
    })

    return (
        <motion.nav
            style={{ y: isHomePage ? y : 18 }}
            className="fixed w-full z-50">
            {/* container */}
            <motion.div
                style={{ width: isHomePage ? containerWidth : "90%" }}
                className="mx-auto backdrop-blur-md bg-foreground/60 text-white flex items-center justify-between rounded-md overflow-hidden px-2">

                {/* Logo — always visible */}
                <div className="flex py-2 shrink-0">
                    <Link href="/">
                        <Image src="/only-logo.png" alt="Logo" width={56} height={56} />
                    </Link>
                </div>

                {/* Nav links — visible only when expanded (≥ 60%) */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.ul
                            key="nav-links"
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="flex gap-6 absolute left-1/2 -translate-x-1/2"
                        >
                            {navItems.map((item) => (
                                <li key={item.title}>
                                    <NavItemRenderer item={item} />
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>

                {/* Right slot — CTA ↔ Menu btn, swapped with AnimatePresence mode="wait" */}
                <div className="flex items-center shrink-0">
                    <AnimatePresence mode="wait">
                        {isExpanded ? (
                            <motion.div
                                key="cta"
                                initial={{ opacity: 0, x: 8 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 8 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            >
                                <CustomLink href="/quote" variant="button-brand">
                                    Request a Quote
                                    <Arrow variant="black" />
                                </CustomLink>
                            </motion.div>
                        ) : (


                            <motion.div
                                key="menu-div"

                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -8 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="p-2 rounded-md hover:bg-white/10 transition-colors"
                            >

                                <DropdownMenu>
                                    <DropdownMenuTrigger
                                        className="my-auto flex"
                                        aria-label="Open menu"
                                        key="menu-btn">
                                        <RiMenu3Line className="w-6 h-6 text-white" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        side="bottom"
                                        className="mt-6 w-max p-4">
                                        <DropdownMenuGroup>
                                            <ul
                                                key="nav-links"
                                                className="flex flex-col gap-6 items-center"
                                            >

                                                {navItems.map((item) => (
                                                    <li key={item.title}>
                                                        <NavItemRenderer item={item} />
                                                    </li>
                                                ))}
                                            </ul>
                                        </DropdownMenuGroup>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuGroup>
                                            <CustomLink href="/quote" variant="button-brand">
                                                Request a Quote
                                                <Arrow variant="black" />
                                            </CustomLink>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </motion.div>
        </motion.nav>
    )
}



export default Navbar