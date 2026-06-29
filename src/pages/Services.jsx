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
                <img src='./Services/bankability.png' className="services-image"/>
                <div className="services-explanation-text">
                  <h3>
                    Financial Modelling and Review
                  </h3>
                  <p>
                    Text, text text text Text, text text text Text, text text text Text, text text text Text, text text text Text, text text text
                  </p>
                </div>
              </div>
              <div className="services-explanation-box">
                <img src='./Services/bankability.png' className="services-image"/>
                <div className="services-explanation-text">
                  <h3>
                    Financial Modelling and Review
                  </h3>
                  <p>
                    Text, text text text Text, text text text Text, text text text Text, text text text Text, text text text Text, text text text
                  </p>
                </div>
              </div>
            </div>
            <div className="pentagon-wrapper">
              <img />
            </div>
            <div className="services-second-row">
              <div className="services-explanation-box">
                <img src='./Services/bankability.png' className="services-image"/>
                <div className="services-explanation-text">
                  <h3>
                    Financial Modelling and Review
                  </h3>
                  <p>
                    Text, text text text Text, text text text Text, text text text Text, text text text Text, text text text Text, text text text
                  </p>
                </div>
              </div>
              <div className="services-explanation-box">
                <img src='./Services/bankability.png' className="services-image"/>
                <div className="services-explanation-text">
                  <h3>
                    Financial Modelling and Review
                  </h3>
                  <p>
                    Text, text text text Text, text text text Text, text text text Text, text text text Text, text text text Text, text text text
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}