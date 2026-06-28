import { EditableText } from '../components/EditableText'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-page-top-section">
        <EditableText id="hero-heading" as="h1">Financing Infrastructure & Energy Assets</EditableText>
        {/* <EditableText id="hero-subheading" as="p">To remove?</EditableText> */}
        <div className="home-cta-container">
          <div className="home-page-stats-container">
            <div className="home-page-stat">
              <EditableText id="stat-1-value" as="h2">23+</EditableText>
              <EditableText id="stat-1-label" as="p">Years of experience</EditableText>
            </div>
            <div className="stat-divider n1" />
            <div className="home-page-stat">
              <EditableText id="stat-2-value" as="h2">USD 40bn</EditableText>
              <EditableText id="stat-2-label" as="p">Financing raised</EditableText>
            </div>
            <div className="stat-divider n2" />
            <div className="home-page-stat">
              <EditableText id="stat-3-value" as="h2">30+</EditableText>
              <EditableText id="stat-3-label" as="p">Mandates</EditableText>
            </div>
            <div className="stat-divider n3" />
            <div className="home-page-stat">
              <EditableText id="stat-4-value" as="h2">2</EditableText>
              <EditableText id="stat-4-label" as="p">Deal of the Year Awards</EditableText>
            </div>
          </div>
          <a href="https://www.linkedin.com/in/guillaumebouverot" target="_blank" rel="noopener noreferrer">
            <EditableText id="cta-button-text" as="p">Get in touch</EditableText>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}