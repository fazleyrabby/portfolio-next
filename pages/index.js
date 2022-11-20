/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Container } from "../components/Container";
import { experiences, projects } from "../lib/static";
import axios from "axios";
import { SingleBlogItem } from "../components/SingleBlogItem";
import Link from "next/link";
import { getAllblogPosts, getIndexData } from "../lib/data";

export default function Home({ posts, cv }) {
  experiences.sort((a, b) => new Date(b.timeline) - new Date(a.timeline));
  return (
    <Container>
      <Head>
        <title>Portfolio | Home 💻</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mb-auto">
        <div className="mb-6 custom-section-height flex flex-col justify-center items-center -mt-6 text-center">
          <div className="mb-4">
            <img
              src="/me.jpg"
              width={240}
              height={240}
              className="rounded-full overflow-hidden"
            />
          </div>
          <h1 className="lg:text-5xl text-3xl font-bold mb-4">
            I am Fazley Rabbi{" "}
            <span className="animate-wiggle inline-flex origin-bottom">👋</span>
          </h1>
          <p className="mb-4">A Passionate Web Developer & Tech Enthusiast</p>
          <p className="mb-4">Based on Bangladesh</p>
          <Link
            href={`${
              cv === '' ? "https://drive.google.com/file/d/1hygjZWNdm1k73QRF-sbOjh84QjcYBy7O/view" : cv
            }`}
            passHref
          >
            <a
              target="_blank"
              rel="noreferrer "
              className="bg-black dark:bg-white dark:text-black lg:inline-flex lg:w-auto text-white px-3 py-2 rounded items-center justify-center hover:bg-slate-700 dark:hover:text-white dark:hover:bg-slate-700"
            >
              Resume
            </a>
          </Link>
          <svg
            className="w-6 h-6 mt-12 animate-[bounce_2s_ease-in-out_infinite]"
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
        </div>

        <div className="lg:mb-48 mb-24">
          <h1 className="text-4xl font-bold m-6 text-center">Projects</h1>
          <div className="mx-auto space-y-6 lg:space-y-0 lg:gap-6 lg:grid lg:grid-cols-2">
            {projects.map((item) => (
              <div key={item.title}>
                <div className="rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform bg-white max-w-md overflow-hidden mx-auto">
                  <a
                    href={item.live || item.github || "#!"}
                    target="_blank"
                    rel="noreferrer "
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <Image
                      src={item.thumbnail}
                      className="object-left-top"
                      alt=""
                      width={100}
                      height="60px"
                      layout="responsive"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={item.thumbnail}
                      priority
                    />
                  </a>
                  <div className="p-3">
                    <h5 className="text-gray-900 text-2xl font-bold mb-2">
                      {item.title}
                    </h5>
                    <p className="text-gray-700 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex justify-between">
                      <p className="flex space-x-1">
                        {item.tech?.map((each) => (
                          <span
                            className="px-3 py-1  border rounded-md text-slate-500 capitalize text-xs"
                            key={each}
                          >
                            {each}
                          </span>
                        ))}
                      </p>
                      <div className="flex">
                        {item.github ? (
                          <a
                            target="_blank"
                            href={item.github}
                            rel="noreferrer "
                            className="inline-flex mr-2"
                            title="Github"
                          >
                            <svg
                              height="24"
                              aria-hidden="true"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="20"
                              data-view-component="true"
                              className="octicon octicon-mark-github v-align-middle"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                              ></path>
                            </svg>
                          </a>
                        ) : (
                          ""
                        )}

                        {item.live ? (
                          <a
                            target="_blank"
                            href={item.live}
                            rel="noreferrer "
                            title="Link"
                          >
                            <svg
                              className="w-6 h-6 stroke-black"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              ></path>
                            </svg>
                          </a>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:mb-48 mb-24">
          <h1 className="text-4xl font-bold m-6 text-center">Skills</h1>
          <div className="mx-auto space-y-2 lg:space-y-0 lg:gap-6 lg:grid lg:grid-cols-2">
            <div className="mb-4">
              <h3 className="mb-4 font-bold">
                Tools / Languages I mostly work with
              </h3>
              <ul className="flex gap-3 skill-items flex-wrap">
                <li>Javascript</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>MySQL</li>
                <li>Bootstrap</li>
                <li>Github</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-bold">Tools I try out as hobby</h3>
              <ul className="flex gap-3 skill-items flex-wrap">
                <li>React JS</li>
                <li>Tailwind CSS</li>
                <li>Markdown</li>
                <li>Heroku</li>
                <li>Vercel</li>
                <li>Netlify</li>
                <li>GraphCMS</li>
                <li>Strapi</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:mb-48 mb-24">
          <h1 className="text-4xl font-bold m-6 text-center">Experience</h1>
          <div>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              {experiences.map((item) => (
                <li className="mb-10 ml-4" key={item.name}>
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {item.from} - {item.to}
                  </time>
                  <h3 className="text-2xl font-bold">
                    <a href={item.link} target='_blank' rel="noreferrer">
                      {item.name}
                    </a>
                  </h3>
                  <p className="mb-2 text-sm text-gray-500">{item.role}</p>
                  {item.contributions.length > 1 ? (
                    <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      {item.contributions?.map((each) => (
                        <li className="mb-1" key={each}>
                          - {each}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      {item.contributions}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>


        <div className="mb-10">
          <h1 className="text-4xl font-bold m-6 text-center">Blogs</h1>
          <div className="space-y-10">
            {posts.map((post) => {
              return <SingleBlogItem key={post.id} {...post} />;
            })}
          </div>
        </div>
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
