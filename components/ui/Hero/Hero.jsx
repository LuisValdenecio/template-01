import GradientWrapper from "@/components/GradientWrapper"
import Image from "next/image"
import NavLink from "../NavLink"
import HeroImg from "@/public/images/hero.svg"
import LayoutEffect from "@/components/LayoutEffect"
import clsx from "clsx"

const theme_selector = (theme) => {
    switch (theme) {
        case "purple":
            return {
                hex : "#7C3AED",
                rgba : "rgba(152, 103, 240, 0.984375)"
            }
        case "green":
            return {
                hex : "#10B981",
                rgba : "rgba(16, 185, 129, 1)"
            }
        case "blue":
            return {
                hex : "#3b82f6",
                rgba : "rgba(59, 130, 246, 1)"
            }
        default:
            return "bg-purple-600 hover:bg-purple-500 active:bg-purple-700"
    }
}

const Hero = () => (
    <section>
        <div className="custom-screen py-28">
            <LayoutEffect className="duration-1000 delay-300"
                isInviewState={{
                    trueState: "opacity-1",
                    falseState: "opacity-0"
                }}
            >
                <div>
                    <div className="space-y-5 max-w-3xl mx-auto text-center">
                        {process.env.NEXT_PUBLIC_MAIN_TITLE_SHOW === "1" && (
                            <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto sm:text-6xl"
                                style={{
                                    backgroundImage: "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)"
                                }}
                            >
                                {process.env.NEXT_PUBLIC_MAIN_TITLE}
                            </h1>
                        )}

                        {process.env.NEXT_PUBLIC_MAIN_DESCRIPTION_SHOW === "1" && (
                            <p className="max-w-xl mx-auto text-gray-300">
                                {process.env.NEXT_PUBLIC_MAIN_DESCRIPTION}
                            </p>
                        )}
                        {process.env.NEXT_PUBLIC_FIRST_BUTTON_LABEL_SHOW === "1" && (
                            <div className="flex justify-center font-medium text-sm">
                                <NavLink
                                    href={process.env.NEXT_PUBLIC_STRIPE_PRODUCT_PAYMENT_LINK}
                                    className={clsx("flex items-center text-white", {
                                        "bg-purple-600 hover:bg-purple-500 active:bg-purple-700" : process.env.NEXT_PUBLIC_TEMPLATE_THEME === "purple",
                                        "bg-blue-600 hover:bg-blue-500 active:bg-blue-700" : process.env.NEXT_PUBLIC_TEMPLATE_THEME === "blue",
                                        "bg-green-600 hover:bg-green-500 active:bg-green-700" : process.env.NEXT_PUBLIC_TEMPLATE_THEME === "green",

                                    })}
                                    
                                >
                                    {process.env.NEXT_PUBLIC_FIRST_BUTTON_LABEL}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </NavLink>
                            </div>
                        )}
                    </div>
                    {
                        process.env.NEXT_PUBLIC_HERO_IMAGE_SHOW === "1" && (
                            <GradientWrapper 
                                className="mt-16 sm:mt-28" 
                                hex={theme_selector(process.env.NEXT_PUBLIC_TEMPLATE_THEME).hex}
                                rgba={theme_selector(process.env.NEXT_PUBLIC_TEMPLATE_THEME).rgba}
                                wrapperClassName="max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]">
                                <Image
                                    src={HeroImg}
                                    className="shadow-lg rounded-2xl"
                                    alt="Mailgo"
                                />
                            </GradientWrapper>
                        )
                    }
                </div>
            </LayoutEffect>
        </div>
    </section>
)

export default Hero