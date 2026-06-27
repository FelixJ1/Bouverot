import Navbar from './Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Deals from '../pages/Deals'
import Services from '../pages/Services'
import Contact from '../pages/Contact'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="deals"><Deals /></section>
        <section id="services"><Services /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  )
}