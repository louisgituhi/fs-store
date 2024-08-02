import { FileInput, Users, BriefcaseBusiness, Repeat2 } from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

export default function Cards() {
    return (
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
    )
}