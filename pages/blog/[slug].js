import Head from 'next/head'
import { Container } from '../../components/Container'
import { getPosts } from '../../lib/data';
import { blogPosts } from '../../lib/static';
import { format, parseISO } from 'date-fns'

export default function BlogPage({title, date, content}) {
  return (
    <Container>
      <Head>
      <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className='mb-4 text-sm text-slate-700 dark:text-slate-400 border-b-2 pb-2'>
          {format(parseISO(date),'MMMM do, uuu')}</div>
        <p className='text-xl'>{content}</p>
      </main>

    </Container>
  )
}


export async function getStaticProps(context) {
    const { params } = context
    const allPosts = getPosts();
    const { data, content} = allPosts.find(post => post.slug === params.slug)
    return {
      props: {
        ...data,
        date: data.date,
        content
      }
    }
}

export async function getStaticPaths() {
    return {
       paths: getPosts().map(post => ({
           params:{
               slug: post.slug
           }
       })),
       fallback: false,
    };
  }
  
  
  