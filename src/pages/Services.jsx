import { EditableText } from '../components/EditableText'
import './Services.css'

export default function Services() {
  return (
    <div className="services-page">
      <EditableText id="services-heading" as="h2">SERVICES</EditableText>
      <div className="services-content">
        <EditableText id="services-title" as="h1">Independent & deal-tested advice tailored to your needs</EditableText>
        <div className="services-explanation">
          <div className="services-first-row">
            <div className="services-explanation-box">
              <img src='./Services/transaction.png' className="services-image"/>
              <div className="services-explanation-text">
                <EditableText id="service-1-title" as="h3">Transaction Structuring</EditableText>
                <EditableText id="service-1-desc" as="p">
                  Designing bespoke financing structures - project finance, ECA-backed facilities, RBL, PXF or hybrid - that reconcile client's commercial objectives with lender's requirements.
                </EditableText>
              </div>
            </div>
            <div className="services-explanation-box">
              <img src='./Services/bankability.png' className="services-image"/>
              <div className="services-explanation-text">
                <EditableText id="service-2-title" as="h3">Bankability Assessment</EditableText>
                <EditableText id="service-2-desc" as="p">
                  Early-stage review of the overall commercial structure - including EPC contracts, O&M agreements, offtake arrangements and other key commercial contracts - to identify and mitigate bankability gaps from the outset.
                </EditableText>
              </div>
            </div>
          </div>
          <div className="services-second-row">
            <div className="services-explanation-box row2">
              <img src='./Services/eca.png' className="services-image"/>
              <div className="services-explanation-text">
                <EditableText id="service-3-title" as="h3">ECA & Multilateral Finance</EditableText>
                <EditableText id="service-3-desc" as="p">
                  Structuring and negotiating ECA and Multilateral-backed facilities, drawing on extensive experience working with ECAs and Multilaterals from Europe, Africa, Asia and the Americas on complex transactions.
                </EditableText>
              </div>
            </div>
            <div className="pentagon-wrapper">
              <img src="IEF-logo.png" className="pentagon-image"/>
            </div>
            <div className="services-explanation-box row2">
              <img src='./Services/modelling.png' className="services-image"/>
              <div className="services-explanation-text">
                <EditableText id="service-4-title" as="h3">Financial Modelling & Review</EditableText>
                <EditableText id="service-4-desc" as="p">
                  Independent review of project finance models, stress-testing assumptions and scenario analysis to support lender's due diligence and credit approval processes.
                </EditableText>
              </div>
            </div>
          </div>
          <div className="servicees-third-row">
            <div className="services-explanation-box row3">
              <img src='./Services/engagement.png' className="services-image"/>
              <div className="services-explanation-text">
                <EditableText id="service-5-title" as="h3">Lender Engagement Process</EditableText>
                <EditableText id="service-5-desc" as="p">
                  Guiding clients from mandate through credit approval to financial close, anticipating lender's concerns, managing due diligence and syndication processes to achieve an efficient execution.
                </EditableText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}