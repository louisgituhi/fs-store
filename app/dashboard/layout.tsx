import { TooltipProvider} from "@/components/ui/tooltip"
  
import DesktopNavigationLinks from "@/components/ui/dashboard/desktop-nav-links"
import MobileNavigationLinks from "@/components/ui/dashboard/mobile-nav-links"
import Cards from "@/components/ui/dashboard/cards"
import RecentFiles from "@/components/ui/dashboard/recent-accounts"
import Filers from "@/components/ui/dashboard/filers"

export default function({ children }: { children: React.ReactNode}) {
    return (
            <TooltipProvider>
                <div className="flex min-h-screen w-full flex-col bg-muted/40 font-sans">
                    <DesktopNavigationLinks />
                        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                            <MobileNavigationLinks />
                                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 font-sans">
                                    <Cards />
                                    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                                        <RecentFiles />
                                        <Filers />
                                    </div>
                                </main>
                        </div>
                </div>
            </TooltipProvider>
    )
}