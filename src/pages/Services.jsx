import { EditableText } from '../components/EditableText'
import './Services.css'

export default function Services() {
  return (
    <div className="services-page">
      <EditableText id="services-heading" as="h2">SERVICES</EditableText>
      <div className="services-content">
        <EditableText id="services-title" as="h1">Independent, deal-related advice tailored to your needs</EditableText>
        <div className="services-explanation">
          <div className="services-first-row">
            <div className="services-explanation-box">
              <img src='./Services/transaction.png' className="services-image"/>
              <div className="services-explanation-text">
                <EditableText id="service-1-title" as="h3">Transaction Structuring</EditableText>
                <EditableText id="service-1-desc" as="p">Text, text text text Text, text text text Text, text text text Text, text text text Text, text text text Text, text text text</EditableText>
              </div>
            </div>
            <div className="services-explanation-box">
              <img src='./Services/bankability.png' className="services-image"/>
              <div className="services-explanation-text">
                <EditableText id="service-2-title" as="h3">Bankability assessment</EditableText>
                <EditableText id="service-2-desc" as="p">Text, text text text Text, text text text Text, text text text Text, text text text Text, text text text Text, text text text</EditableText>
              </div>
            </div>
          </div>
          <div className="services-second-row">
            <div className="services-explanation-box row2">
              <img src='./Services/eca.png' className="services-image"/>
              <div className="services-explanation-text">
                <EditableText id="service-3-title" as="h3">ECA and Multilateral Finance</EditableText>
                <EditableText id="service-3-desc" as="p">Text, text text text Text, text text text Text, text text text Text, text text text Text, text text text Text, text text text</EditableText>
              </div>
            </div>
            <div className="pentagon-wrapper">
              <img src="IEF-pentagon.png" className="pentagon-image"/>
            </div>
            <div className="services-explanation-box row2">
              <img src='./Services/modelling.png' className="services-image"/>
              <div className="services-explanation-text">
                <EditableText id="service-4-title" as="h3">Financial Modelling and Review</EditableText>
                <EditableText id="service-4-desc" as="p">Text, text text text Text, text text text Text, text text text Text, text text text Text, text text text Text, text text text</EditableText>
              </div>
            </div>
          </div>
          <div className="servicees-third-row">
            <div className="services-explanation-box row3">
              <img src='./Services/engagement.png' className="services-image"/>
              <div className="services-explanation-text">
                <EditableText id="service-5-title" as="h3">Lender Engagement Process</EditableText>
                <EditableText id="service-5-desc" as="p">Text, text text text Text, text text text Text, text text text Text, text text text Text, text text text Text, text text text</EditableText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}