import SectionWrapper from "../../../components/SectionWrapper"
import GradientWrapper from "../../../components/GradientWrapper"
import user1 from "../../../public/testimonial/user1.webp"
import user2 from "../../../public/testimonial/user2.webp"
import user3 from "../../../public/testimonial/user3.webp"
import user4 from "../../../public/testimonial/user4.webp"
import user5 from "../../../public/testimonial/user5.webp"
import user6 from "../../../public/testimonial/user6.webp"
import Image from "next/image"
import LayoutEffect from "../../../components/LayoutEffect"
import { Tooltip } from "flowbite-react";


const Testimonial = () => {

    const testimonials = [
        {
            avatar: user1,
            name: process.env.NEXT_PUBLIC_GRID_TESTIMONIAL_NAME_ROW01_COL01,
            title: process.env.NEXT_PUBLIC_GRID_TESTIMONIAL_COMPANY_ROW01_COL01,
            quote: process.env.NEXT_PUBLIC_GRID_TESTIMONIAL_QUOTE_ROW01_COL01
        },
        {
            avatar: user2,
            name: process.env.NEXT_PUBLIC_GRID_TESTIMONIAL_NAME_ROW01_COL02,
            title: process.env.NEXT_PUBLIC_GRID_TESTIMONIAL_COMPANY_ROW01_COL02,
            quote: process.env.NEXT_PUBLIC_GRID_TESTIMONIAL_QUOTE_ROW01_COL02
        },
        {
            avatar: user3,
            name: process.env.NEXT_PUBLIC_GRID_TESTIMONIAL_NAME_ROW01_COL03,
            title: process.env.NEXT_PUBLIC_GRID_TESTIMONIAL_COMPANY_ROW01_COL03,
            quote: process.env.NEXT_PUBLIC_GRID_TESTIMONIAL_QUOTE_ROW01_COL03
        },
        {
            avatar: user4,
            name: process.env.NEXT_PUBLIC_GRID_TESTIMONIAL_NAME_ROW02_COL01,
            title: process.env.NEXT_PUBLIC_GRID_TESTIMONIAL_COMPANY_ROW02_COL01,
            quote: process.env.NEXT_PUBLIC_GRID_TESTIMONIAL_QUOTE_ROW02_COL01
        },
        {
            avatar: user5,
            name: process.env.NEXT_PUBLIC_GRID_TESTIMONIAL_NAME_ROW02_COL02,
            title: process.env.NEXT_PUBLIC_GRID_TESTIMONIAL_COMPANY_ROW02_COL02,
            quote: process.env.NEXT_PUBLIC_GRID_TESTIMONIAL_QUOTE_ROW02_COL02
        },
        {
            avatar: user6,
            name: process.env.NEXT_PUBLIC_GRID_TESTIMONIAL_NAME_ROW02_COL03,
            title: process.env.NEXT_PUBLIC_GRID_TESTIMONIAL_COMPANY_ROW02_COL03,
            quote: process.env.NEXT_PUBLIC_GRID_TESTIMONIAL_QUOTE_ROW02_COL03
        },
    ]

    return (
        <SectionWrapper>
            {process.env.NEXT_PUBLIC_TESTIMONIAL_SHOW === "1" && (
                <div id="testimonials" className="custom-screen text-gray-300">
                    <div className="max-w-2xl text-center md:mx-auto">
                        {process.env.NEXT_PUBLIC_TOOLTIP_SHOW === "1" && (
                            <Tooltip content="NEXT_PUBLIC_TESTIMONIAL_TITLE">
                                <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                                    {process.env.NEXT_PUBLIC_TESTIMONIAL_TITLE}
                                </h2>
                            </Tooltip>  
                        )}
                        {process.env.NEXT_PUBLIC_TOOLTIP_SHOW === "0" && (
                            <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                                {process.env.NEXT_PUBLIC_TESTIMONIAL_TITLE}
                            </h2> 
                        )}
                    </div>
                    <GradientWrapper wrapperClassName="max-w-sm h-40 top-12 inset-x-0" className="mt-12">
                        <LayoutEffect
                            className="duration-1000 delay-300"
                            isInviewState={{
                                trueState: "opacity-1",
                                falseState: "opacity-0 translate-y-12"
                            }}
                        >
                            <ul className="grid gap-6 duration-1000 delay-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3">
                                {
                                    testimonials.map((item, idx) => (
                                        <li key={idx} className="p-4 rounded-xl border border-gray-800"
                                            style={{
                                                backgroundImage: "radial-gradient(100% 100% at 50% 50%, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0) 100%)"
                                            }}
                                        >
                                            <figure className="flex flex-col justify-between gap-y-6 h-full">
                                                <blockquote className="">
                                                    <>
                                                        {process.env.NEXT_PUBLIC_TOOLTIP_SHOW === "1" && (
                                                            <>
                                                                {idx <= 2 && (
                                                                    <Tooltip content={`NEXT_PUBLIC_GRID_TESTIMONIAL_QUOTE_ROW01_COL0${idx+1}`} trigger="click">
                                                                        <p className="">
                                                                            {item.quote}
                                                                        </p>
                                                                    </Tooltip>
                                                                )}
                                                                {idx > 2 && (
                                                                    <Tooltip content={`NEXT_PUBLIC_GRID_TESTIMONIAL_QUOTE_ROW02_COL0${idx-2}`} trigger="click">
                                                                        <p className="">
                                                                            {item.quote}
                                                                        </p>
                                                                    </Tooltip>
                                                                )}
                                                            </>
                                                        )}
                                                        {process.env.NEXT_PUBLIC_TOOLTIP_SHOW === "0" && (
                                                            <p className="">
                                                                {item.quote}
                                                            </p>
                                                        )}
                                                    </>
                                                </blockquote>
                                                <div className="flex items-center gap-x-4">
                                                    <Image
                                                        src={item.avatar}
                                                        alt={item.name}
                                                        className="w-14 h-14 rounded-full object-cover"
                                                    />
                                                    <div>
                                                        <>
                                                            {process.env.NEXT_PUBLIC_TOOLTIP_SHOW === "1" && (
                                                                <>
                                                                    {idx <= 2 && (
                                                                        <>
                                                                            <Tooltip content={`NEXT_PUBLIC_GRID_TESTIMONIAL_NAME_ROW01_COL0${idx+1}`} trigger="click">
                                                                                <span className="block text-gray-50 font-semibold">{item.name}</span>
                                                                            </Tooltip> 
                                                                            <Tooltip content={`NEXT_PUBLIC_GRID_TESTIMONIAL_COMPANY_ROW01_COL0${idx+1}`} trigger="click">
                                                                                <span className="block text-sm mt-0.5">{item.title}</span>
                                                                            </Tooltip>          
                                                                        </>
                                                                    )}
                                                                    {idx > 2 && (
                                                                        <>
                                                                            <Tooltip content={`NEXT_PUBLIC_GRID_TESTIMONIAL_NAME_ROW02_COL0${idx-2}`} trigger="click">
                                                                                <span className="block text-gray-50 font-semibold">{item.name}</span>
                                                                            </Tooltip>        
                                                                            <Tooltip content={`NEXT_PUBLIC_GRID_TESTIMONIAL_COMPANY_ROW02_COL0${idx-2}`} trigger="click">
                                                                                <span className="block text-sm mt-0.5">{item.title}</span>
                                                                            </Tooltip>        
                                                                        </>
                                                                    )}
                                                                </>
                                                            )}
                                                            {process.env.NEXT_PUBLIC_TOOLTIP_SHOW === "0" && (
                                                                <>
                                                                    <span className="block text-gray-50 font-semibold">{item.name}</span> 
                                                                    <span className="block text-sm mt-0.5">{item.title}</span>
                                                                </>
                                                            )}
                                                        </>

                                                    </div>
                                                </div>
                                            </figure>
                                        </li>
                                    ))
                                }
                            </ul>
                        </LayoutEffect>
                    </GradientWrapper>
                </div>
            )}
        </SectionWrapper>
    )
}

export default Testimonial