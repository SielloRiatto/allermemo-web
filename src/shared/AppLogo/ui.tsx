import { Roboto_Slab } from "next/font/google"
import Image from "next/image"


const inter = Roboto_Slab({ subsets: ["latin"], weight: "700" })

export const AppLogo = () => {
    return (
        <a href="#" className="flex items-center justify-between -m-1.5 p-1.5">
            <Image className="h-8 w-auto" src="/allermemo-logo.png" alt="Logo" width={100} height={100} priority={true} />
            <span className={`${inter.className} text-xl`}>AllerMemo</span>
        </a>
    )
}
