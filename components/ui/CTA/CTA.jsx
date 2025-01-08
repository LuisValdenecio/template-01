import GradientWrapper from "../../../components/GradientWrapper"
import Image from "next/image"
import NavLink from "../NavLink"
import bgPattern from "../../../public/images/bg-pattern.webp"
import LayoutEffect from "../../../components/LayoutEffect"
import clsx from "clsx"

const CTA = () => (
    <section>
        {process.env.NEXT_PUBLIC_CTA_SHOW === "1" && (
            <GradientWrapper wrapperClassName="max-w-xs h-[13rem] top-12 inset-0">
                <div className="custom-screen py-28 relative">
                    <LayoutEffect
                        className="duration-1000 delay-300"
                        isInviewState={{
                            trueState: "opacity-1",
                            falseState: "opacity-0 translate-y-6"
                        }}
                    >
                        <div className="relative z-10">
                            <div className="max-w-xl mx-auto text-center">
                                <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                                    {process.env.NEXT_PUBLIC_CTA_TITLE}
                                </h2>
                                {process.env.NEXT_PUBLIC_CTA_DESCRIPTION_SHOW === "1" && (
                                    <p className="mt-5 text-gray-300">
                                        {process.env.NEXT_PUBLIC_CTA_DESCRIPTION}
                                    </p>
                                )}
                            </div>
                            <div className="mt-5 flex justify-center font-medium text-sm">
                                <NavLink
                                    href={process.env.NEXT_PUBLIC_STRIPE_PRODUCT_PAYMENT_LINK}
                                    className={clsx("flex items-center text-white", {
                                        "bg-purple-600 hover:bg-purple-500 active:bg-purple-700" : process.env.NEXT_PUBLIC_TEMPLATE_THEME === "purple",
                                        "bg-blue-600 hover:bg-blue-500 active:bg-blue-700" : process.env.NEXT_PUBLIC_TEMPLATE_THEME === "blue",
                                        "bg-green-600 hover:bg-green-500 active:bg-green-700" : process.env.NEXT_PUBLIC_TEMPLATE_THEME === "green"
                                    })}
                                >
                                    {process.env.NEXT_PUBLIC_CTA_BUTTON_LABEL}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </NavLink>
                            </div>
                        </div>
                    </LayoutEffect>
                    <Image
                        src={bgPattern}
                        className="w-full h-full object-cover m-auto absolute inset-0 pointer-events-none"
                        alt="Background pattern"
                    />
                </div>
            </GradientWrapper>
        )}
    </section>
)

export default CTA