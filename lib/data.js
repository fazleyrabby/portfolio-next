import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; 

import { GraphQLClient, gql } from 'graphql-request';



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




