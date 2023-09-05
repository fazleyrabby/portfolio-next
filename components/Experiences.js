import React from 'react'
import { experiences } from '../lib/static';

export const Experience = () => {
  experiences.sort((a, b) => new Date(b.timeline) - new Date(a.timeline));
  return (
    <>
    <h1 className="text-4xl font-bold m-6 text-center">Experience</h1>
          <div>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              {experiences.map((item) => (
                <li className="mb-10 ml-4" key={item.name}>
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {item.from} - {item.to}
                  </time>
                  <h2 className="text-2xl font-bold">
                    <a href={item.link} target='_blank' rel="noreferrer">
                      {item.name}
                    </a>
                  </h2>
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
    </>
  )
}
