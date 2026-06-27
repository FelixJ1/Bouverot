import { EditableText } from '../components/EditableText';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <EditableText id="about-heading" as="h2">About</EditableText>
      <div className="about-content">
        <div className="about-text">
          <EditableText id="about-title" as="h1">Senior-level advisory.<br />Free of institutional conflicts.</EditableText>
          <EditableText id="about-p1" as="p">We are a senior-level advisory firm that provides independent advice to clients in the energy and infrastructure sectors. Our team has extensive experience in structuring and executing complex transactions, and we are committed to delivering the best possible outcomes for our clients.</EditableText>
          <EditableText id="about-p2" as="p">We are a senior-level advisory firm that provides independent advice to clients in the energy and infrastructure sectors. Our team has extensive experience in structuring and executing complex transactions, and we are committed to delivering the best possible outcomes for our clients.</EditableText>
          <EditableText id="about-p3" as="p">We are a senior-level advisory firm that provides independent advice to clients in the energy and infrastructure sectors. Our team has extensive experience in structuring and executing complex transactions, and we are committed to delivering the best possible outcomes for our clients.</EditableText>
          <EditableText id="about-p4" as="p">We are a senior-level advisory firm that provides independent advice to clients in the energy and infrastructure sectors. Our team has extensive experience in structuring and executing complex transactions, and we are committed to delivering the best possible outcomes for our clients.</EditableText>
        </div>
        <div className="about-stack">
          <div className="about-stack-item">
            <EditableText id="stack-1-title" as="h3">Sector Expertise</EditableText>
            <EditableText id="stack-1-desc" as="p">We take a collaborative approach to working with our clients, and we are committed to understanding their unique needs and objectives.</EditableText>
          </div>
          <div className="about-stack-item">
            <EditableText id="stack-2-title" as="h3">Transaction Experience</EditableText>
            <EditableText id="stack-2-desc" as="p">We have a proven track record of successfully executing complex transactions across a range of sectors, including energy, infrastructure, and real estate.</EditableText>
          </div>
          <div className="about-stack-item">
            <EditableText id="stack-3-title" as="h3">Debt Products</EditableText>
            <EditableText id="stack-3-desc" as="p">We have a proven track record of successfully executing complex transactions across a range of sectors, including energy, infrastructure, and real estate.</EditableText>
          </div>
          <div className="about-stack-item">
            <EditableText id="stack-4-title" as="h3">Geographies</EditableText>
            <EditableText id="stack-4-desc" as="p">We have a proven track record of successfully executing complex transactions across a range of sectors, including energy, infrastructure, and real estate.</EditableText>
          </div>
          <div className="about-stack-item">
            <EditableText id="stack-5-title" as="h3">Lenders Process</EditableText>
            <EditableText id="stack-5-desc" as="p">We have a proven track record of successfully executing complex transactions across a range of sectors, including energy, infrastructure, and real estate.</EditableText>
          </div>
        </div>
      </div>
    </div>
  )
}