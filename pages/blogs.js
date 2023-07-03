import Head from 'next/head'
import { Container } from '../components/Container'
// import { blogPosts } from '../lib/data'
import axios from 'axios';
import { SingleBlogItem } from '../components/SingleBlogItem';
import { gql, GraphQLClient } from 'graphql-request';
import { getAllblogPosts } from '../lib/data';

export default function Blogs({posts}) {
   
    return (
        <Container title="Portfolio | Blogs 💻">
            <main>
                <div className='mb-4'>
                    <h1 className="text-4xl font-bold m-6 text-center">Blogs</h1>
                    <div className="space-y-10">
                        {posts.map((post) => {
                            return <SingleBlogItem key={post.id} {...post} />
                        })}
                    </div>
                </div>
            </main>
        </Container>
    )
}


// export async function getServerSideProps(){
//     const postRes = await axios.get(`${process.env.STRAPI_URL}/posts?&sort=publishedAt:desc`);
//     return {
//         props: {
//             posts: postRes.data
//         }
//     }
// }

export const getStaticProps = async () => {
    const data = await getAllblogPosts();
    
    return {
      props: { 
        posts: data.posts,
      }
    }
  }




