/*eslint-disable react/no-unescaped-entities*/
/*eslint-disable jsx-a11y/alt-text*/
/*eslint-disable @next/next/no-img-element*/

import Head from "next/head";
import Image from "next/image";
import { Container } from "../components/Container";
import { uses } from "../lib/static";

export default function Uses() {
  return (
    <Container>
      <Head>
        <title>Portfolio | Uses 💻</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mb-10">
          <h1 className="text-3xl font-bold m-6 text-center">Uses</h1>
          <div className="custom-height">
              {/* {uses?.map((each) => (
                <div key={each.title} className="mb-12">
                  <h1 className="text-2xl font-bold mb-6 after-border">{each.title}</h1>
                  <ul className="mb-4 text-base text-gray-500 dark:text-gray-400 list-disc">
                    {each?.items?.map((item) => (
                      <li className="mb-2" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))} */}
              
              {/* <Image
                      src="/setup.png"
                      className="object-left-top"
                      alt=""
                      width="100"
                      height="100"
                      layout="responsive"
                      objectFit="contain"
                      placeholder="blur"
                      blurDataURL="/setup.png"
                      priority
                />
                <p className="text-small italic lg:-mt-10">- My current desk setup</p> */}
          </div>
        </div>
      </main>
    </Container>
  );
}
