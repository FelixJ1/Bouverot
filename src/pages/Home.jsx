import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-page-top-section">
          <h1>Over two decades of landmark transactions in energy and infrastructure finance</h1>
          <div className="home-cta-container">
            <p>We are a boutique advisory firm that provides financial and strategic advice to clients in the energy and infrastructure sectors. Our team has extensive experience in project finance, mergers and acquisitions, and capital raising.</p>
            <button onClick={() => window.location.href='/contact'}>Contact Us</button>
          </div>
          <div className="home-page-stats-container">
              <div className="home-page-stat">
                <h2>25+</h2>
                <p>Years of Experience</p>
              </div>
              <div className="home-page-stat">
                <h2>$20bn+</h2>
                <p>Transaction Volume</p>
              </div>
              <div className="home-page-stat">
                <h2>3x</h2>
                <p>Year-over-Year Growth</p>
              </div>
              <div className="home-page-stat">
                <h2>30+</h2>
                <p>Clients Served</p>
              </div>
          </div>
      </div>
      <div className="home-page-mid-section">
          Mid Section Content
      </div>
    </div>
  )
}