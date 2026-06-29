import { EditableText } from '../components/EditableText'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <EditableText id="contact-heading" as="h2">CONTACT</EditableText>
      <div className="contact-content">
        <div className="contact-top-text">
          <EditableText id="contact-title" as="h1">Get in touch</EditableText>
          <EditableText id="contact-desc" as="p">Get in touch, Get in touch, Get in touch, Get in touch, Get in touch, Get in touch, Get in touch, Get in touch, Get in touch, Get in touch,</EditableText>
        </div>
        <div className="contact-split-details">
          <div className="contact-details-list">
            <div className="contact-details-list-item">
              <i className="fa-brands fa-linkedin list-item-icon"></i>
              <div className="list-item-text">
                <EditableText id="contact-linkedin-label" as="p">LinkedIn</EditableText>
                <EditableText id="contact-linkedin-url" as="p">[hello@example.com](mailto:hello@example.com)</EditableText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}