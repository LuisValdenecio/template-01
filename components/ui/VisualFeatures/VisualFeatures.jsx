import SectionWrapper from "../../../components/SectionWrapper"
import Feature1 from "../../../public/images/Feature-1.svg"
import Feature2 from "../../../public/images/Feature-2.svg"
import Image from "next/image"

const VisualFeatures = () => {

    const features = [
        {
            title: process.env.NEXT_PUBLIC_FEATURE_01_TITLE,
            desc: process.env.NEXT_PUBLIC_FEATURE_01_DESCRIPTION,
            img: Feature1
        },
        {
            title: process.env.NEXT_PUBLIC_FEATURE_02_TITLE,
            desc: process.env.NEXT_PUBLIC_FEATURE_02_DESCRIPTION,
            img: Feature2
        },
    ]
    return (
        <SectionWrapper>
            <div className="custom-screen text-gray-300">
                {
                    (process.env.NEXT_PUBLIC_SECONDARY_TITLE_SHOW === "1" ||
                    process.env.NEXT_PUBLIC_SECONDARY_DESCRIPTION_SHOW === "1") && (
                        <div className="max-w-xl mx-auto text-center">
                            {process.env.NEXT_PUBLIC_SECONDARY_TITLE_SHOW === "1" && (
                                <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                                    {process.env.NEXT_PUBLIC_SECONDARY_TITLE}
                                </h2>
                            )}
                            {process.env.NEXT_PUBLIC_SECONDARY_DESCRIPTION_SHOW === "1" && (
                                <p className="mt-3">
                                    {process.env.NEXT_PUBLIC_SECONDARY_DESCRIPTION}
                                </p>
                            )}
                        </div>
                    )
                }
                <div className="mt-12">
                    <ul className="space-y-8 gap-x-6 sm:flex sm:space-y-0">
                        {
                            features.map((item, idx) => (
                                <li className="flex-1 flex flex-col justify-between border border-gray-800 rounded-2xl" key={idx}
                                    style={{
                                        background: "radial-gradient(141.61% 141.61% at 29.14% -11.49%, rgba(203, 213, 225, 0.15) 0%, rgba(203, 213, 225, 0) 57.72%)"
                                    }}
                                >
                                    <div className="p-8">
                                        <h3 className="text-gray-50 text-xl font-semibold">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3 sm:text-sm md:text-base">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="pl-8">
                                        <Image
                                            src={item.img}
                                            className="w-full ml-auto"
                                            alt={item.title}
                                        />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default VisualFeatures