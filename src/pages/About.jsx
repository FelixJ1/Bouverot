import { EditableText } from '../components/EditableText';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <EditableText id="about-heading" as="h2">ABOUT</EditableText>
      <div className="about-title-wrapper">
      <EditableText id="about-title" as="h1">23+ years experience advising clients on project structuring & financing</EditableText>
      </div>
      <div className="about-content">
        <div className="about-text">
          <EditableText id="about-p1" as="p">
            Guillaume Bouverot founded <strong>Infrastructure and Energy Finance Consulting Ltd</strong> in 2026 to provide independent, deal-tested project structuring and financing advisory services to developers and investors active in the infrastructure and energy sectors.
          </EditableText>
          <EditableText id="about-p2" as="p">
            While being employed by SMBC, JPMorgan and Citigroup, Guillaume worked on more than 30 advisory and arranging mandates across multiple sectors in both developed and emerging/frontier markets. The size of the projects ranged from under USD 500m to more than USD 10bn. He has been involved at every step of the process, from the earliest commercial structuring conversations and bankability assessments right through to financial close. This breadth of transactional experience provides clients with practical guidance grounded in how bankable projects are structured and debt transactions are executed.  
          </EditableText>
          <EditableText id="about-p3" as="p">
            Guillaume works in English and French, and brings an engineering foundation to his financial work, holding degrees from the École Nationale Supérieure d'Électrochimie et d'Électrométallurgie de Grenoble (graduating in the top 3%) and the IFP School in Paris, alongside an MBA from London Business School.
          </EditableText>
        </div>
        <div className="about-stack">
          <div className="about-stack-item">
            <EditableText id="stack-1-title" as="h3">SECTOR EXPERTISE</EditableText>
            <EditableText id="stack-1-desc" as="p">
              LNG · Infrastructure · Oil & Gas · Energy Transition · Power · Renewables
            </EditableText>
          </div>
          <div className="about-stack-item">
            <EditableText id="stack-2-title" as="h3">DEBT PRODUCTS</EditableText>
            <EditableText id="stack-2-desc" as="p">
              Project Finance · ECA Finance · RBL · PXF · Corporate Finance · Acquisition Finance · Syndicated & Club Loans
            </EditableText>
          </div>
          <div className="about-stack-item">
            <EditableText id="stack-3-title" as="h3">LENDERS PROCESS</EditableText>
            <EditableText id="stack-3-desc" as="p">
              Documentation Negotiations · Lender Due Diligence · Credit Approval · Financial Modelling
            </EditableText>
          </div>
          <div className="about-stack-item">
            <EditableText id="stack-4-title" as="h3">REGIONS</EditableText>
            <EditableText id="stack-4-desc" as="p">
              UK · Europe · Middle East · Africa · Asia-Pacific
            </EditableText>
          </div>
          <div className="about-stack-item">
            <EditableText id="stack-5-title" as="h3">PRIOR INSTITUTIONS</EditableText>
            <EditableText id="stack-5-desc" as="p">
              SMBC (2014 - 2026) · JPMorgan (2011 - 2014) · Citigroup (2002 - 2011)
            </EditableText>
          </div>
        </div>
      </div>
    </div>
  )
}