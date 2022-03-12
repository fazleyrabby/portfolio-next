import { GraphQLClient, gql } from 'graphql-request';

const url = 'https://api-ap-south-1.graphcms.com/v2/cl04x782g1gqi01z2cu4c49je/master';

// const contentDir = path.join(process.cwd(), '_content')

// export function getPosts() {
//     console.log(contentDir)
//     const allPosts = fs.readdirSync(contentDir);
//     return allPosts.map(fileName => {
//         const slug = fileName.replace('.md', '')
//         const fileContents = fs.readFileSync(
//             path.join(contentDir, fileName),
//             'utf8'
//         )
    
//         const { data, content } = matter(fileContents)
//         return {
//             data, content, slug
//         }
//     })
// }
export const staticData = {
    blog_thumbnail : 'https://media.graphcms.com/output=format:jpg/resize=width:400,height:300/MrxaPDWlRbuLcy6Ni3p0',
    blog_img : 'https://media.graphcms.com/MrxaPDWlRbuLcy6Ni3p0' 
}

export function getAllblogPosts(){

    const graphcms = new GraphQLClient(url);
    const QUERY = gql`
    {
        posts {
          id
          title
          content
          slug 
          description 
          date
          photo{
            url(
            transformation: {
              image: { resize: { width: 400, height: 400, fit: clip } }
            }
              )
              fileName
          }
        }
      }
  `
    return graphcms.request(QUERY)
}




export async function getAllSlugsPost(){
    const graphcms = new GraphQLClient(url);
    const QUERY = gql`
    {
      posts {
        slug 
      }
    }
  `
     return graphcms.request(QUERY)
}

export async function getSingleBlog(slug){
    const graphcms = new GraphQLClient(url);
    const QUERY = gql`
    {
      post(where: {slug: "${slug}"}) {
        id
        title
        content
        slug 
        date
        description 
        photo{
          url(
          transformation: {
            image: { resize: { width: 400, height: 400, fit: clip } }
          }
          )
        }
      }
    }
  `
    return graphcms.request(QUERY)
}

export async function getIndexData(){
  const graphcms = new GraphQLClient(url);
  const QUERY = gql`
  {
    abouts {
      cv 
    }
  }
`
   return graphcms.request(QUERY)
}