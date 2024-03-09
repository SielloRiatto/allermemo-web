import { MainMenuMobileButtonFeature } from "@/features/MainMenuMobileButton"
import { AppLogo } from "@/shared/AppLogo"

export const HeaderWidget = () => {
    return (
        <header>
            <nav className="mx-auto flex max-w-7xl items-center justify-between" aria-label="Global">
                <div className="flex mr-5">
                    <AppLogo />
                </div>
                <div className="flex sm:hidden">
                    <MainMenuMobileButtonFeature />
                </div>
                <div className="hidden sm:flex sm:gap-x-12 ml-5 uppercase pt-1.5">
                    <a href="#" className="text-xs">Terms and conditions</a>
                    <a href="#" className="text-xs">Privacy policy</a>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:justify-end">
                    {/* Reserved */}
                </div>
            </nav>
        </header>
    )
}
