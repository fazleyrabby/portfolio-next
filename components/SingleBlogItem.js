import { format, parseISO } from "date-fns";
import Link from "next/link";

export function SingleBlogItem({ title, description, slug, publishedAt }) {

    return (<div className="py-4 group">
        <Link href={`/blog/${slug}`}>
            <div className="cursor-pointer">
                <a className='text-2xl font-bold mb-2 block capitalize group-hover:underline'>{title}</a>
                {/* </Link> */}
                <div className='text-sm text-slate-600 mb-2 dark:text-slate-400'>{format(parseISO(publishedAt), 'MMMM do, uuu, HH:mm:ss')}</div>
                <div className='mb-4 text-sm text-slate-700 dark:text-slate-300'>{description}</div>
                {/* <div className='mb-4 text-sm'>{`${markdown_content.slice(0, 220)}...`}</div> */}

                {/* <Link href={`/blog/${slug}`}> */}
                <a className="bg-black dark:bg-slate-100 dark:text-black hover:text-slate-100 text-white text-xs py-2 px-3 rounded group">
                    Read More
                    <span className='inline-block group-hover:translate-x-1 transition-transform ml-1'>{`->`}</span>
                </a>
            </div>
        </Link>
    </div>)
}