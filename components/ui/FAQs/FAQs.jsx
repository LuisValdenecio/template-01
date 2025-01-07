import LayoutEffect from "@/components/LayoutEffect"
import SectionWrapper from "@/components/SectionWrapper"

const faqsList = [
    {
        q: process.env.NEXT_PUBLIC_FAQ_QUESTION_ROW01_COL01,
        a: process.env.NEXT_PUBLIC_FAQ_ANSWER_ROW01_COL01,
    },
    {
        q: process.env.NEXT_PUBLIC_FAQ_QUESTION_ROW01_COL02,
        a: process.env.NEXT_PUBLIC_FAQ_ANSWER_ROW01_COL02,
    },
    {
        q: process.env.NEXT_PUBLIC_FAQ_QUESTION_ROW01_COL03,
        a: process.env.NEXT_PUBLIC_FAQ_ANSWER_ROW01_COL03,
    },
    {
        q: process.env.NEXT_PUBLIC_FAQ_QUESTION_ROW02_COL01,
        a: process.env.NEXT_PUBLIC_FAQ_ANSWER_ROW02_COL01,
    },
    {
        q: process.env.NEXT_PUBLIC_FAQ_QUESTION_ROW02_COL02,
        a: process.env.NEXT_PUBLIC_FAQ_ANSWER_ROW02_COL02,
    },
    {
        q: process.env.NEXT_PUBLIC_FAQ_QUESTION_ROW02_COL03,
        a: process.env.NEXT_PUBLIC_FAQ_ANSWER_ROW02_COL03,
    }
]

const FAQs = () => (
    <SectionWrapper id="faqs">
        <div className="custom-screen text-gray-300">
            <div className="max-w-xl text-center xl:mx-auto">
                <h2 className="text-gray-50 text-3xl font-extrabold sm:text-4xl">
                    {process.env.NEXT_PUBLIC_FAQ_MAIN_TITLE}
                </h2>
                <p className="mt-3">
                    {process.env.NEXT_PUBLIC_FAQ_SECONDARY_TITLE}
                </p>
            </div>
            <div className='mt-12'>
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-12"
                    }}
                >
                    <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3'>
                        {faqsList.map((item, idx) => (
                            <li
                                key={idx}
                                className="space-y-3"
                            >
                                <summary
                                    className="flex items-center justify-between font-semibold text-gray-100">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className='leading-relaxed'>
                                </p>
                            </li>
                        ))}
                    </ul>
                </LayoutEffect>
            </div>
        </div>
    </SectionWrapper>
)

export default FAQs