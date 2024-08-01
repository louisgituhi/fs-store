import {
  ChevronLeft,
  FolderArchive,
  ChevronRight,
  Copy,
  CreditCard,
  Repeat2,
  DollarSign,
  Users,
  BriefcaseBusiness,
  Activity,
  ArrowUpRight,
  FileInput,
  File,
  ListFilter,
  MoreVertical,
  Truck,
} from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  TooltipProvider,
} from "@/components/ui/tooltip"
import DesktopNavigationLinks from "@/components/dashboard/desktop-nav-links"
import MobileNavigationLinks from "@/components/dashboard/mobile-nav-links"

export default function Dashboard() {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40 font-sans">
        <DesktopNavigationLinks />
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <MobileNavigationLinks />

              <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 font-sans">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                  <Card x-chunk="dashboard-01-chunk-0">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Filings
                      </CardTitle>
                      <FileInput className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+820</div>
                      <p className="text-xs text-muted-foreground">
                        +20.1% from last month
                      </p>
                    </CardContent>
                  </Card>

                  <Card x-chunk="dashboard-01-chunk-1">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Personal Accounts
                      </CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+746</div>
                      <p className="text-xs text-muted-foreground">
                        +180.1% from last month
                      </p>
                    </CardContent>
                  </Card>

                  <Card x-chunk="dashboard-01-chunk-2">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Business Accounts</CardTitle>
                      <BriefcaseBusiness className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+74</div>
                      <p className="text-xs text-muted-foreground">
                        +19% from last month
                      </p>
                    </CardContent>
                  </Card>

                  <Card x-chunk="dashboard-01-chunk-3">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Retrievals</CardTitle>
                      <Repeat2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+200</div>
                      <p className="text-xs text-muted-foreground">
                        +21 since last hour
                      </p>
                    </CardContent>
                  </Card>

                </div>

              <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
                  <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                      <CardTitle>Accounts</CardTitle>
                      <CardDescription>
                        Recent filed accounts.
                      </CardDescription>
                    </div>
                    <Button asChild size="sm" className="ml-auto gap-1">
                      <Link href="#">
                        View All
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Form</TableHead>
                          <TableHead className="hidden xl:table-column">
                            Type
                          </TableHead>
                          <TableHead className="hidden xl:table-column">
                            Status
                          </TableHead>
                          <TableHead className="hidden xl:table-column">
                            Date
                          </TableHead>
                          <TableHead className="text-right">ClientId</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Kevin Johnson</div>
                            {/* <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div> */}
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            Sale
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            <Badge className="text-xs" variant="outline">
                              Approved
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                            2023-06-23
                          </TableCell>
                          <TableCell className="text-right">1975691</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Olivia Smith</div>
                            {/* <div className="hidden text-sm text-muted-foreground md:inline">
                              olivia@example.com
                            </div> */}
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            Refund
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            <Badge className="text-xs" variant="outline">
                              Declined
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                            2023-06-24
                          </TableCell>
                          <TableCell className="text-right">1875991</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Noah Williams</div>
                            {/* <div className="hidden text-sm text-muted-foreground md:inline">
                              noah@example.com
                            </div> */}
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            Subscription
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            <Badge className="text-xs" variant="outline">
                              Approved
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                            2023-06-25
                          </TableCell>
                          <TableCell className="text-right">1887651</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Emma Brown</div>
                            {/* <div className="hidden text-sm text-muted-foreground md:inline">
                              emma@example.com
                            </div> */}
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            Sale
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            <Badge className="text-xs" variant="outline">
                              Approved
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                            2023-06-26
                          </TableCell>
                          <TableCell className="text-right">1748764</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            {/* <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div> */}
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            Sale
                          </TableCell>
                          <TableCell className="hidden xl:table-column">
                            <Badge className="text-xs" variant="outline">
                              Approved
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                            2023-06-27
                          </TableCell>
                          <TableCell className="text-right">1995678</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-01-chunk-5">
                  <CardHeader>
                    <CardTitle>Recent Files</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-8">
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                        <AvatarFallback>LG</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          Louis Gituhi
                        </p>
                        {/* <p className="text-sm text-muted-foreground">
                          Louis.Gituhi@kingdombankltd.co.ke
                        </p> */}
                      </div>
                      <div className="ml-auto font-medium">+24</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/02.png" alt="Avatar" />
                        <AvatarFallback>KW</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          Kelvin Dan Watto
                        </p>
                        {/* <p className="text-sm text-muted-foreground">
                          Kelvin.Watto@kingdombankltd.co.ke
                        </p> */}
                      </div>
                      <div className="ml-auto font-medium">+39</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/03.png" alt="Avatar" />
                        <AvatarFallback>MM</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          Maureen Mbuvi
                        </p>
                        {/* <p className="text-sm text-muted-foreground">
                          Maureen.Mbuvi@kingdombankltd.co.ke
                        </p> */}
                      </div>
                      <div className="ml-auto font-medium">+12</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/04.png" alt="Avatar" />
                        <AvatarFallback>SA</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          Samuel Achando
                        </p>
                        {/* <p className="text-sm text-muted-foreground">
                          Samuel.Achando@kingdombankltd.co.ke
                        </p> */}
                      </div>
                      <div className="ml-auto font-medium">+9</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/05.png" alt="Avatar" />
                        <AvatarFallback>SG</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          Sebastian Gachau
                        </p>
                        {/* <p className="text-sm text-muted-foreground">
                          Sebastian.Gachau@@kingdombankltd.co.ke
                        </p> */}
                      </div>
                      <div className="ml-auto font-medium">+11</div>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </main>
          </div>
      </div>
    </TooltipProvider>
  )
}
