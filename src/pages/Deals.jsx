import React, { useEffect, useRef } from 'react';
import { EditableText } from '../components/EditableText';
import Carousel from '../components/Carousel';
import './Deals.css';

export default function Deals() {
  const MAX_COLS = 5
  const gridRef = useRef(null)

  useEffect(() => {
    const count = 9
    let cols = 1
    for (let i = 1; i <= Math.min(count, MAX_COLS); i++) {
      if (count % i === 0) cols = i
    }
    gridRef.current.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
  }, [])

    const topCarousel = [
      '/CarouselLogos/ADNOC.png',
      '/CarouselLogos/aramco.png',
      '/CarouselLogos/CNOOC.png',
      '/CarouselLogos/eni.png',
      '/CarouselLogos/KOSM.png',
      '/CarouselLogos/NEOM.png',
      '/CarouselLogos/OCP.png',
      '/CarouselLogos/Petrose.webp',
      '/CarouselLogos/SMH.png',
      '/CarouselLogos/Tullow.png',
      '/CarouselLogos/UNOC.webp',
  ];

  const bottomCarousel = [
      '/CarouselLogos/AL.png',
      '/CarouselLogos/bp.png',
      '/CarouselLogos/enel.png',
      '/CarouselLogos/GE.svg',
      '/CarouselLogos/national.png',
      '/CarouselLogos/NNPC.png',
      '/CarouselLogos/Orlen.svg',
      '/CarouselLogos/shell.png',
      '/CarouselLogos/TotalEnergies.png',
  ];

  const combinedCarousel = [...topCarousel, ...bottomCarousel];

  return (
    <div className="deals-page">
      <EditableText id="deals-heading" as="h2">DEALS</EditableText>
      <div className="deals-content">
        <div className="deals-text">
          <EditableText id="deals-title" as="h1">More than USD 40bn raised across 30+ transactions</EditableText>
        </div>
        <div className="deals-grid-wrapper">
          <div className="deals-grid" ref={gridRef}>
          <div className="deals-page-stat">
            <EditableText id="deal-1-date" as="p" className="top-line-text">Infrastructure · UK · 2026</EditableText>
            <EditableText id="deal-1-value" as="h2">GBP 1.66bn</EditableText>
            <EditableText id="deal-1-title" as="h3">Grain LNG - Sale to Centrica & Energy Capital Partners</EditableText>
            <EditableText id="deal-1-desc" as="p" className="bottom-line-text">National Grid · SMBC Advisory</EditableText>
          </div>
          <div className="deals-page-stat">
            <EditableText id="deal-2-date" as="p" className="top-line-text">LNG · Abu Dhabi · 2025</EditableText>
            <EditableText id="deal-2-value" as="h2">USD 8bn</EditableText>
            <EditableText id="deal-2-title" as="h3">Ruwais LNG - Liquefaction plant development</EditableText>
            <EditableText id="deal-2-desc" as="p" className="bottom-line-text">ADNOC, bp, Mitsui, Shell, TotalEnergies · SMBC Advisory</EditableText>
          </div>
          <div className="deals-page-stat">
            <EditableText id="deal-3-date" as="p" className="top-line-text">
              Infrastructure · Uganda & Tanzania · 2025
            </EditableText>
            <EditableText id="deal-3-value" as="h2">
              USD 5bn
            </EditableText>
            <EditableText id="deal-3-title" as="h3">
              EACOP - Crude oil pipeline financing
            </EditableText>
            <EditableText id="deal-3-desc" as="p" className="bottom-line-text">
              TotalEnergies, CNOOC, UNOC, TPDC · SMBC Advisory
            </EditableText>
          </div>
          <div className="deals-page-stat">
            <EditableText id="deal-4-date" as="p" className="top-line-text">
              Oil · Angola · 2022
            </EditableText>
            <EditableText id="deal-4-value" as="h2">
              USD 2.5bn
            </EditableText>
            <EditableText id="deal-4-title" as="h3">
              Azule Energy - Pre-Export Financing of upstream joint venture
            </EditableText>
            <EditableText id="deal-4-desc" as="p" className="bottom-line-text">
              bp, Eni · SMBC Advisory
            </EditableText>
          </div>
          <div className="deals-page-stat">
            <EditableText id="deal-5-date" as="p" className="top-line-text">
              LNG · Nigeria · 2020
            </EditableText>
            <EditableText id="deal-5-value" as="h2">
              USD 3bn
            </EditableText>
            <EditableText id="deal-5-title" as="h3">
              Nigeria LNG - Financing of Train 7
            </EditableText>
            <EditableText id="deal-5-desc" as="p" className="bottom-line-text">
              NNPC, Shell, TotalEnergies, Eni · SMBC Advisory
            </EditableText>
          </div>
          <div className="deals-page-stat">
            <EditableText id="deal-6-date" as="p" className="top-line-text">
              Renewables · Morocco · 2011
            </EditableText>
            <EditableText id="deal-6-value" as="h2">
              USD 850m
            </EditableText>
            <EditableText id="deal-6-title" as="h3">
              Noor I - Financing of a CSP project
            </EditableText>
            <EditableText id="deal-6-desc" as="p" className="bottom-line-text">
              Masen · Citigroup Advisory
            </EditableText>
          </div>
          <div className="deals-page-stat">
            <EditableText id="deal-7-date" as="p" className="top-line-text">
              Refining & Marketing · Italy · 2011
            </EditableText>
            <EditableText id="deal-7-value" as="h2">
              EUR 900m
            </EditableText>
            <EditableText id="deal-7-title" as="h3">
              TotalErg SpA - Corporate financing of a joint venture
            </EditableText>
            <EditableText id="deal-7-desc" as="p" className="bottom-line-text">
              TotalEnergies, ERG · Citigroup Advisory
            </EditableText>
          </div>
          <div className="deals-page-stat">
            <EditableText id="deal-8-date" as="p" className="top-line-text">
              LNG · Yemen · 2008
            </EditableText>
            <EditableText id="deal-8-value" as="h2">
              USD 2.8bn
            </EditableText>
            <EditableText id="deal-8-title" as="h3">
              Yemen LNG - Financing of upstream and LNG plant
            </EditableText>
            <EditableText id="deal-8-desc" as="p" className="bottom-line-text">
              TotalEnergies, Hunt Oil <span style={{fontStyle:'italic'}}>et al.</span> · Citigroup Advisory
            </EditableText>
          </div>
          <div className="deals-page-stat">
            <EditableText id="deal-9-date" as="p" className="top-line-text">
              Infrastructure · Algeria · 2005
            </EditableText>
            <EditableText id="deal-9-value" as="h2">
              USD 200m
            </EditableText>
            <EditableText id="deal-9-title" as="h3">
              Hamma Water Desalination - Financing of water desalination plant
            </EditableText>
            <EditableText id="deal-9-desc" as="p" className="bottom-line-text">
              GE, Sonatrach, Sonelgaz · Citigroup Advisory
            </EditableText>
          </div>
        </div>
        </div>
        <div className="carousel-container">
          <h1 style={{color:'#1F305E'}}>
            Clients we've worked with
          </h1>
        <div className="carousel-top-wrapper">
          <Carousel images={combinedCarousel}/>
        </div>
        </div>
      </div>
      <div style={{width:'100%', height: '1px', background: '#e0e0e0'}}/>
    </div>
  )
}