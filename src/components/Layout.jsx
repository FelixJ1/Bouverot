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
        <section id="end">
          <div className="end-section">
            <div style={{width:'100%', height: '0.6px', background: '#ffffff3e'}}/>
            <div className="end-text">
              © 2026 Infrastructure and Energy Finance Consulting Ltd. <span style={{color:'#d3b769'}}>All rights reserved.</span>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}