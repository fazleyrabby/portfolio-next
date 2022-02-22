import Head from 'next/head'
import { Container } from '../components/Container'
// import { blogPosts } from '../lib/data'
import Link from 'next/link';

export default function Blogs() {
    return (
        <Container>
            <Head>
                <title>Portfolio | Blogs 💻</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className='mb-4'>
                    <h1 className="text-4xl font-bold m-6 text-center">Blogs</h1>
                    <div className="space-y-5">
                        {/* {blogPosts.map((item) => (
                            <BlogListItem key={item.slug} {...item} />
                        ))} */}
                    </div>
                </div>
            </main>
        </Container>
    )
}


function BlogListItem({ slug, title, date, content }) {
    return (<div className="py-4">
        <Link href={`/blog/${slug}`}>
            <a className='text-2xl font-bold mb-2 block'>{title}</a>
        </Link>
        <div className='mb-4 text-sm text-slate-700'>{date.toString()}</div>
        <div>{content}</div>
    </div>)
}