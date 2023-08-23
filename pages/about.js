/*eslint-disable jsx-a11y/alt-text*/
/*eslint-disable @next/next/no-img-element*/
import axios from 'axios'
import MarkdownIt from 'markdown-it/lib'
import Link from 'next/link'
import { Container } from '../components/Container'
import Image from 'next/image';
import { gql, GraphQLClient } from 'graphql-request'
import { Github,Linkedin,Youtube,Email,Codepen } from '../components/Icons';
// import { about } from '../lib/static'

export default function About({ about }) {
  const md = new MarkdownIt({
    html: true
  });
  const html = about?.content?.replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, "")
  const markdown_content = md.render(html)
  // const photo = about?.photo?.data?.attributes?.formats?.medium?.url
  const photo = about?.photo?.url
  return (
    <Container title='Portfolio | About 💻'>
      <main>
        <h1 className="text-4xl font-bold m-6 text-center">{about.title}</h1>
        {photo && (<div className='text-center mb-4'>
          <Image src={photo} layout="fixed" height="300px" width="300px" alt="" placeholder="blur" blurDataURL={photo} priority />
        </div>)}
        <section className='markdown text-center mb-4'>
          <div className='prose dark:prose-invert w-full text-justify mr-0 ml-0 inline' dangerouslySetInnerHTML={{ __html: markdown_content }}></div>
        </section>

        <h3 className='mb-4'>Connect with me on</h3>

        <div className='flex gap-3 mb-6 icons'>
          <Github/>
          <Linkedin/>
          <Youtube/>
          <Email/>
          <Codepen/>
        </div>

      </main>

    </Container>
  )
}


// export async function getServerSideProps(){
//   // ${process.env.STRAPI_URL}/about?populate=*

//   const about = await axios.get(`${process.env.STRAPI_URL}/about?populate=*`);
//   const data = about?.data?.data?.attributes

//   if (!about?.data?.data?.attributes || !data) {
//     return { notFound: true };
//   }
//   return {
//       props: {
//           about: data

//       }
//   }
// }



export const getStaticProps = async () => {
  const url = 'https://api-ap-south-1.graphcms.com/v2/cl04x782g1gqi01z2cu4c49je/master';
  const graphcms = new GraphQLClient(url);
  const QUERY = gql`
  {
    abouts {
      title
      content
      photo {
      url(
        transformation: {
          image: { resize: { width: 400, height: 400, fit: clip } }
        }
      )
    }
    }
  }
`
  const data = await graphcms.request(QUERY)
  // console.log(JSON.stringify(data, undefined, 2))

  return {
    props: {
      about: data.abouts[0],
    }
  }
}