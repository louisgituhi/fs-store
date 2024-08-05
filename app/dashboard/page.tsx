import Cards from "@/components/ui/dashboard/cards"
import RecentFiles from "@/components/ui/dashboard/recent-accounts"
import Filers from "@/components/ui/dashboard/filers"

export default function DashboardPage() {
    return (
        <div>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 font-sans">
                <Cards />
                    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                        <RecentFiles />
                        <Filers />
                    </div>
                </main>
        </div>
    )
}