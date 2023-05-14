import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/Header/Header.jsx'
import Aside from '../components/Aside/Aside.jsx'

export default function Home() {
  return (
    <main>
      <Header />
      <Aside />
    </main>
  )
}
