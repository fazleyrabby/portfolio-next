import Head from 'next/head'
import { Container } from '../../components/Container'
// import { getPosts } from '../../lib/data';
// import { blogPosts } from '../../lib/static';
import { format, parseISO, parseJSON } from 'date-fns'
import axios from 'axios';
import Link from 'next/link';
import MarkdownIt from 'markdown-it'

export default function BlogPage({post}) {
  const md = new MarkdownIt({
    html: true
  });
  const html = post.content.replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, "")
  const markdown_content = md.render(html)
  return (
    <Container>
      <Head>
      <title>{post.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mt-10'>
        <h1 className="text-3xl font-bold mb-4 capitalize">{post.title}</h1>
        <div className='text-md text-slate-600 mb-2 dark:text-slate-400'>{format(parseISO(post.publishedAt),'MMMM do, uuu, HH:mm:ss')}</div>
        <div className='mb-4 text-sm text-slate-700 dark:text-slate-400 border-b-2 pb-2'>{post.description}</div>
        <section className='markdown'> 
          <div className='mb-4 prose dark:prose-invert text-justify inline' dangerouslySetInnerHTML={{__html: markdown_content}}></div>
        </section>
        <Link href={`/blogs`}>
        <a className="inline-block bg-black dark:bg-white dark:text-black hover:text-slate-100 text-white text-xs py-2 px-3 rounded group mb-12">
            <span className='inline-block group-hover:-translate-x-1 transition-transform mr-1'>{`<--`}</span>
           Go Back
        </a>
        </Link>
      </main>
    </Container>
  )
}


export async function getServerSideProps(context){
  const { params } = context
  const postRes = await axios.get(`${process.env.STRAPI_URL}/posts/?filters[slug]=${params.slug}`);
  const data = postRes?.data?.data[0]?.attributes
  if (!data) {
    return { notFound: true };
  }
  return {
      props: {
          post: data
      }
  }
}

// export async function getStaticProps(context) {
//     const { params } = context
//     const allPosts = getPosts();
//     const { data, content} = allPosts.find(post => post.slug === params.slug)
//     return {
//       props: {
//         ...data,
//         date: data.date,
//         content
//       }
//     }
// }
// export async function getStaticProps({params}) {
//   const post = await axios.get(`${process.env.STRAPI_URL}/posts/?filters[slug]=${params.slug}`);
//    return {
//       props: {
//           post: post?.data?.data[0]?.attributes
//       }
//   }
// }
// export async function getStaticPaths() {
//     const postRes = await axios.get(`${process.env.STRAPI_URL}/posts`);
    
//     const paths = postRes.data.data.map(({id, attributes}) => {
//       return { params: { slug: attributes.slug } }
//     })
    
//     return {
//       paths,
//       fallback: false
//     }
//   }
  
  
  