import {
  ChevronLeft,
  FolderArchive,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  ListFilter,
  MoreVertical,
  Truck,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  TooltipProvider,
} from "@/components/ui/tooltip"
import DesktopNavigationLinks from "@/components/dashboard/desktop-nav-links"
import MobileNavigationLinks from "@/components/dashboard/mobile-nav-links"
import DataCards from "@/components/dashboard/datacard"

export default function Dashboard() {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40 font-sans">
        <DesktopNavigationLinks />
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <MobileNavigationLinks />
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3"></main>
          </div>
      </div>
    </TooltipProvider>
  )
}
