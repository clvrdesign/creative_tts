import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import { redirect } from "next/navigation"
import Dashboard from '../components/DashboardPage'

const page = async () => {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect("/")
    }
    return (
        <>
            <Dashboard />
        </>
    )
}

export default page