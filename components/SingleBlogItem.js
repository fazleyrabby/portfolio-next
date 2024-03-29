import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { staticData } from "../lib/data";

export function SingleBlogItem({ title, description, slug, date, photo }) {

    return (
        <Link href={`/blog/${slug}`} passHref>
            <div className="w-full lg:max-w-full lg:flex group cursor-pointer">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    style={{
                        backgroundImage: "url(" + `${photo?.url ?? staticData.blog_thumbnail}` + ")",
                    }}
                >
                </div>
                {/* border-r border-b border-l border-gray-100 dark:border-gray-900 lg:border-l-0 lg:border-t lg:border-gray-100 */}
                <div className="blog-item">
                    <div className="mb-8">
                        <a href="#" className='text-2xl font-bold mb-2 block capitalize group-hover:underline'>{title}</a>
                        <div className="text-gray-700 text-base dark:text-white">{description}</div>
                    </div>
                    <div className='text-sm text-slate-600 mb-3 dark:text-slate-400'>{format(parseISO(date), 'MMMM do, uuu, HH:mm:ss')}</div>
                    <div className="flex items-center">
                        <div className="text-sm">
                            <a href="#" className="bg-black dark:bg-slate-100 dark:text-black hover:text-slate-100 text-white text-xs py-2 px-3 rounded group w-max flex justify-center items-center">
                                <span>Read More</span>
                                <span className='inline-block group-hover:translate-x-1 transition-transform ml-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}