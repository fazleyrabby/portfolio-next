import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
      <title>Portfolio | About 💻</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <h1 className="text-5xl font-bold mb-4">About Me!</h1>
        <p className='text-xl'>
        A tech enthusiast and an introvert. With more than one year of professional web developement experience, I worked on several client projects as well as projects for codecanyon. Currently working as a fulltime Laravel Developer at Electronic First FZ LLE. Learning about new technology is one of my passion. Learning React , Inertia JS.
In my free time I like to do nature photography. Click here! to check some of the cool moments that I tried to capture. 
        </p>
      </main>

    </div>
  )
}
