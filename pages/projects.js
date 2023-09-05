/*eslint-disable react/no-unescaped-entities*/
/*eslint-disable jsx-a11y/alt-text*/
/*eslint-disable @next/next/no-img-element*/

import Head from 'next/head'
import Image from 'next/image'
import { Container } from '../components/Container'
import {Projects} from '../components/Projects'

export default function About() {
  return (
    <Container>
      <main>
        <Projects/>
      </main>
    </Container>
  )
}
