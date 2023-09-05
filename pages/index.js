/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Container } from "../components/Container";
import Link from "next/link";
import { getAllblogPosts, getIndexData } from "../lib/data";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experiences";
import { Skills } from "../components/Skills";

export default function Home({ posts, cv }) {
  return (
    <Container title="Portfolio | Home 💻">
      <main className="mb-auto">
        <div className="mb-6 h-screen sm:h-[calc(100vh-20rem)] flex flex-col justify-center items-center -mt-6 text-center">
          <div className="mb-4">
            <img
              src="/me.webp"
              width={240}
              height={240}
              className="rounded-full overflow-hidden"
              alt="profile img"
            />
          </div>
          <h1 className="lg:text-5xl text-3xl font-bold mb-4">
            I am Fazley Rabbi{" "}
            <span className="animate-wiggle inline-flex origin-bottom">👋</span>
          </h1>
          <p className="mb-4">A Passionate Web Developer & Tech Enthusiast</p>
          <p className="mb-4">Based on Bangladesh</p>
          <Link
            // href={`${
            //   cv === '' ? "https://drive.google.com/file/d/1hygjZWNdm1k73QRF-sbOjh84QjcYBy7O/view" : cv
            // }`}
            href="/resume" passHref
          >
            <a
              className="bg-black dark:bg-white dark:text-black lg:inline-flex lg:w-auto text-white px-3 py-2 rounded items-center justify-center hover:bg-slate-700 dark:hover:text-white dark:hover:bg-slate-700"
            >
              Resume
            </a>
          </Link>
          <a href="#projects" alt="projects" aria-label="projects" rel="noopener">
            <svg
              className="w-6 h-6 mt-12 " //animate-[bounce_2s_ease-in-out_infinite]
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
              ></path>
            </svg>
          </a>
        </div>

        {/* Projects  */}
        <div className="lg:mb-48 mb-24" id="projects">
          <Projects/>
        </div>

        {/* Skills */}
        <div className="lg:mb-48 mb-24">
          <Skills/>
        </div>

        {/* Experience */}
        <div className="lg:mb-48 mb-24">
          <Experience/>
        </div>

        {/* Blogs  */}
        {/* <div className="mb-10">
          <h1 className="text-4xl font-bold m-6 text-center">Blogs</h1>
          <div className="space-y-10">
            {posts.map((post) => {
              return <SingleBlogItem key={post.id} {...post} />;
            })}
          </div>
        </div> */}
      </main>
    </Container>
  );
}

// export async function getServerSideProps() {

//   const postRes = await axios.get(`${process.env.STRAPI_URL}/posts?pagination[limit]=3&sort=publishedAt:desc`);
//   return {
//     props: {
//       posts: postRes.data
//     }
//   }
// }

export const getStaticProps = async () => {
  const data = await getAllblogPosts();
  const index = await getIndexData();
 
  return {
    props: {
      posts: data.posts,
      cv: index?.abouts[0]?.cv,
    },
  };
};
