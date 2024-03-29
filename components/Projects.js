import React from 'react'
import { projects } from '../lib/static'
import Image from 'next/image'

export const Projects = () => {
  return (
    <>
    <div className='mb-10'>
    <h1 className="text-4xl font-bold m-6 text-center">Projects</h1>
          <div className="hover-parent mx-auto space-y-6 lg:space-y-0 lg:gap-6 lg:grid lg:grid-cols-2">
            {projects.map((item) => (
              <div key={item.title} className="hover-child hover:scale-110 hover:z-10 transition-all">
                <div className="rounded-lg shadow-md   transition-transform bg-white max-w-md overflow-hidden mx-auto">
                  <a
                    href={item.live || item.github || "#!"}
                    target="_blank"
                    rel="noreferrer "
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    aria-label={`${item.title}`}
                  >
                    <Image
                      src={item.thumbnail}
                      className="object-contain object-left-top hover:animate-objtoright"
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
                    <h2 className="text-gray-900 text-2xl font-bold mb-2">
                      {item.title}
                    </h2>
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
        </>
  )
}
