import { HeaderWidget } from "@/widgets/Header"

export const HomePage = () => {
    return (
        <div
            className={"grid min-h-full bg-white py-4 px-4 md:py-6 md:px-6 lg:py-8 lg:px-8 m-5 rounded-3xl shadow-md"}
            style={{boxShadow: "0 0 1rem rgba(78, 110, 190, 0.2)"}}
        >
            <HeaderWidget />
        </div>
    )
}
