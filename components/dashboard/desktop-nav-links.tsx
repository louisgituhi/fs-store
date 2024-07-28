"use client"
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

// ui components 
import { 
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
 } from "../ui/tooltip";

// icons
import { 
    Package,
    Package2, 
    Users2, 
    ShoppingCart, 
    LineChart, 
    Settings, 
    Home 
} from "lucide-react";

const links = [
    {name: "Dashboard", href: "/dashboard", icon: Home },
    {name: "Products", href: "/dashboard/products", icon: Package },
    {name: "Customers", href: "/dashboard/customers", icon: Users2 },
    {name: "Analytics", href: "/analytics/analytics",icon: LineChart},
    {name: "Orders", href: "/dashboard/Orders", icon: ShoppingCart}
]
export default function DesktopNavigationLinks() {
    const pathname = usePathname();

    return(
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            {/* kingdombankltd */}
            <Link
                href="#"
                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
                <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                <span className="sr-only">Acme Inc</span>
            </Link>
        
            <TooltipProvider>
                { links.map((link) => {
                    const LinkIcon = link.icon
                    return (
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={clsx(
                                        "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                                        {
                                            "bg-green-100 text-green-600": pathname === link.href
                                        },
                                    )}>
                                        <LinkIcon className="size-5" />
                                        <span className="sr-only">{link.name}</span>
                                </Link>    
                            </TooltipTrigger>
                            <TooltipContent side="right">{link.name}</TooltipContent>
                        </Tooltip>
                    )
                })}
            </TooltipProvider>
            {/* mobile responsive  */}
            
        </nav>

        {/* settings wheel */}
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
    )
}