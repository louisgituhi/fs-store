import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <div className=" text-center">
      <h1>Wow this great :)</h1>
      <Button className=" bg-green-100 text-green-600">
        <Link href="/dashboard">To dashboard</Link>
      </Button>
    </div>
  )
}
