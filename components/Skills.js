import React from 'react'

export const Skills = () => {
    return (
        <>
            <h1 className="text-4xl font-bold m-6 text-center">Skills</h1>
            <div className="mx-auto space-y-2 lg:space-y-0 lg:gap-6 lg:grid lg:grid-cols-2">
                <div className="mb-4">
                    <h2 className="mb-4 font-bold">
                        Tools / Languages I mostly work with
                    </h2>
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
                    <h2 className="mb-4 font-bold">Tools I try out as hobby</h2>
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
        </>
    )
}
