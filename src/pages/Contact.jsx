import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText('+44 7764 823868')
      setCopied(true)
      setTimeout(() => setCopied(false), 5000)
    } catch (error) {
      console.error('Failed to copy phone number:', error)
    }
  }

  return (
    <div className="contact-page">
      <h2>CONTACT</h2>

      <div className="contact-content">
        <div className="contact-split-details">
          <div className="contact-details-list">
            <div className="contact-top-text">
              <h1>Get in touch</h1>
              <p>
                If you have any queries regarding your project, IEF Consulting would
                be delighted to have an initial conversation on a no-obligation basis.
              </p>
            </div>
            <button
              type="button"
              className="contact-details-list-item contact-button"
              onClick={handleCopyPhone}
            >
              <i className="fa-solid fa-square-phone list-item-icon"></i>
              <div className="list-item-text">
                <p>+44 7764 823868</p>
              </div>
              {copied && 
              <div className="copied-message">
                Copied
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              </div>
              }
            </button>

            <a
              className="contact-details-list-item"
              href="mailto:guillaume.bouverot@iefconsulting.co.uk"
            >
              <i className="fa-solid fa-envelope list-item-icon"></i>
              <div className="list-item-text">
                <p>guillaume.bouverot@iefconsulting.co.uk</p>
              </div>
            </a>

            <a
              className="contact-details-list-item"
              href="https://www.linkedin.com/in/guillaumebouverot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin list-item-icon"></i>
              <div className="list-item-text">
                <p>linkedin.com/in/guillaumebouverot</p>
              </div>
            </a>

            <div className="contact-details-list-item">
              <i className="fa-solid fa-location-dot list-item-icon"></i>
              <div className="list-item-text">
                <p>London, UK</p>
              </div>
            </div>
          </div>

          <img
            src="./bouverot-photo.png"
            className="bouverot-image"
            alt="Portrait"
          />
        </div>
      </div>
    </div>
  )
}