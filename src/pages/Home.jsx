import { EditableText } from '../components/EditableText'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-page-top-section">
        <EditableText id="hero-heading" as="h1">Financing energy and infrastructure assets</EditableText>
        <EditableText id="hero-subheading" as="p">We provide financing solutions for energy and infrastructure assets, helping our clients achieve their goals and grow their businesses.</EditableText>
        <div className="home-cta-container">
          <div className="home-page-stats-container">
            <div className="home-page-stat">
              <EditableText id="stat-1-value" as="h2">25+</EditableText>
              <EditableText id="stat-1-label" as="p">Years of experience</EditableText>
            </div>
            <div className="stat-divider n1" />
            <div className="home-page-stat">
              <EditableText id="stat-2-value" as="h2">$20bn+</EditableText>
              <EditableText id="stat-2-label" as="p">Transaction volume</EditableText>
            </div>
            <div className="stat-divider n2" />
            <div className="home-page-stat">
              <EditableText id="stat-3-value" as="h2">3x</EditableText>
              <EditableText id="stat-3-label" as="p">Year-over-Year Growth</EditableText>
            </div>
            <div className="stat-divider n3" />
            <div className="home-page-stat">
              <EditableText id="stat-4-value" as="h2">30+</EditableText>
              <EditableText id="stat-4-label" as="p">Clients Served</EditableText>
            </div>
          </div>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <EditableText id="cta-button-text" as="span">Get in touch</EditableText>
          </button>
        </div>
      </div>
    </div>
  )
}