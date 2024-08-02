import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
export default function Filers() {
    return (
        <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
                <CardTitle>Recent Files</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">

                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/01.svg" alt="Avatar" />
                        <AvatarFallback>LG</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          Louis Gituhi
                        </p>
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
                    </div>
                    <div className="ml-auto font-medium">+11</div>
                </div>
            </CardContent>
        </Card>
    )
}