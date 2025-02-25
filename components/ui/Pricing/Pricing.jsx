import LayoutEffect from "../../../components/LayoutEffect";
import SectionWrapper from "../../../components/SectionWrapper";
import Button from "../Button";
import NavLink from "../NavLink"
import clsx from "clsx";
import { Tooltip } from "flowbite-react";


const Pricing = () => {

    const plans = [

        {
            desc: process.env.NEXT_PUBLIC_PRICING_DESCRIPTION,
            price: process.env.NEXT_PUBLIC_PRICE,
            isMostPop: true,
            features: [
                process.env.NEXT_PUBLIC_PRICING_BENEFIT01,
                process.env.NEXT_PUBLIC_PRICING_BENEFIT02,
                process.env.NEXT_PUBLIC_PRICING_BENEFIT03,
                process.env.NEXT_PUBLIC_PRICING_BENEFIT04,
                process.env.NEXT_PUBLIC_PRICING_BENEFIT05,
                process.env.NEXT_PUBLIC_PRICING_BENEFIT06,
            ],
        },
       
    ];

    const mostPopPricingBg = "radial-gradient(130.39% 130.39% at 51.31% -0.71%, #1F2937 0%, rgba(31, 41, 55, 0) 100%)"

    return (
        <>
            {process.env.NEXT_PUBLIC_PRICING_SHOW === "1" && (
                <SectionWrapper id="pricing" className='custom-screen'>
                    <div className='relative max-w-xl mx-auto text-center'>
                        {process.env.NEXT_PUBLIC_TOOLTIP_SHOW === "1" && (
                            <Tooltip content="NEXT_PUBLIC_PRICING_TITLE" trigger="click">         
                                <h2 className='text-gray-50 text-3xl font-semibold sm:text-4xl'>
                                    {process.env.NEXT_PUBLIC_PRICING_TITLE}
                                </h2>
                            </Tooltip>
                        )}
                        {process.env.NEXT_PUBLIC_TOOLTIP_SHOW === "0" && (     
                            <h2 className='text-gray-50 text-3xl font-semibold sm:text-4xl'>
                                {process.env.NEXT_PUBLIC_PRICING_TITLE}
                            </h2>
                        )}
                    </div>
                    <LayoutEffect
                        className="duration-1000 delay-300"
                        isInviewState={{
                            trueState: "opacity-1",
                            falseState: "opacity-0"
                        }}
                    >
                        <div className='mt-16 justify-center gap-6 sm:grid sm:grid-cols-1 sm:space-y-0 lg:grid-cols-1'>
                            {
                                plans.map((item, idx) => (
                                    <div key={idx} 
                                        className={clsx("relative lg:w-1/2 sm:w-full self-auto flex-1 flex items-stretch flex-col rounded-xl border border-gray-800 mt-6 sm:mt-0", {
                                            "border border-purple-500": process.env.NEXT_PUBLIC_TEMPLATE_THEME === "purple",
                                            "border border-blue-500": process.env.NEXT_PUBLIC_TEMPLATE_THEME === "blue",
                                            "border border-green-500": process.env.NEXT_PUBLIC_TEMPLATE_THEME === "green",
                                        })}
                                        
                                        style={{
                                            backgroundImage: item.isMostPop ? mostPopPricingBg : ""
                                        }}
                                    >
                                        <div className="p-8 space-y-4 border-b border-gray-800 text-center">
                                            <div className='text-gray-50 text-3xl font-semibold'>
                                                {process.env.NEXT_PUBLIC_TOOLTIP_SHOW === "1" && (
                                                    <Tooltip content="NEXT_PUBLIC_PRICE" trigger="click">
                                                        ${item.price} 
                                                    </Tooltip>
                                                )}
                                                {process.env.NEXT_PUBLIC_TOOLTIP_SHOW === "0" && (
                                                    <>{item.price}</> 
                                                )}
                                            </div>
                                            {process.env.NEXT_PUBLIC_PRICING_DESCRIPTION_SHOW === "1" && (
                                                <>
                                                    {process.env.NEXT_PUBLIC_TOOLTIP_SHOW === "1" && (
                                                        <Tooltip content="NEXT_PUBLIC_PRICING_DESCRIPTION" trigger="click">
                                                            <p className="text-gray-400">
                                                                {item.desc}
                                                            </p>
                                                        </Tooltip>
                                                    )}
                                                    {process.env.NEXT_PUBLIC_TOOLTIP_SHOW === "0" && (
                                                        <p className="text-gray-400">
                                                            {item.desc}
                                                        </p>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                        <div className="p-8">
                                            <ul className='space-y-3'>
                                                {
                                                    item.features.map((featureItem, idx) => (
                                                        <li key={idx} className='flex items-center gap-5 text-gray-300'>
                                                            <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                className='h-5 w-5 text-indigo-600'
                                                                viewBox='0 0 20 20'
                                                                fill='currentColor'>
                                                                <path
                                                                    fill-rule='evenodd'
                                                                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                                    clip-rule='evenodd'></path>
                                                            </svg>
                                                            <>
                                                                {process.env.NEXT_PUBLIC_TOOLTIP_SHOW === "1" && (
                                                                    <Tooltip content={`NEXT_PUBLIC_PRICING_BENEFIT0${idx+1}`} trigger="click">
                                                                        <span className="inline-block">{featureItem}</span>
                                                                    </Tooltip>
                                                                )}
                                                                {process.env.NEXT_PUBLIC_TOOLTIP_SHOW === "0" && (
                                                                    <span className="inline-block">{featureItem}</span>
                                                                )}
                                                            </>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            <div className="pt-8">
                                                <>
                                                    {process.env.NEXT_PUBLIC_TOOLTIP_SHOW === "1" && (
                                                        <Tooltip content="NEXT_PUBLIC_CTA_BUTTON_LABEL">
                                                            <NavLink
                                                                href={process.env.NEXT_PUBLIC_STRIPE_PRODUCT_PAYMENT_LINK}
                                                                className={clsx("flex items-center text-white justify-center", {
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
                                                        </Tooltip>
                                                    )}
                                                    {process.env.NEXT_PUBLIC_TOOLTIP_SHOW === "0" && (
                                                        <NavLink
                                                            href={process.env.NEXT_PUBLIC_STRIPE_PRODUCT_PAYMENT_LINK}
                                                            className={clsx("flex items-center text-white justify-center", {
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
                                                    )}
                                                </>   
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </LayoutEffect>
                </SectionWrapper>
            )}
        </>
    );
};

export default Pricing