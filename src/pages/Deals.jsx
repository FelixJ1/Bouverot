import React, { useEffect, useRef } from 'react';
import Carousel from '../components/Carousel';
import './Deals.css';

export default function Deals() {

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
      <h2>DEALS</h2>
      <div className="deals-content">
        <div className="deals-text">
          <h1>More than USD 40bn raised across 30+ transactions</h1>
        </div>

        <div className="deals-grid-wrapper">
          <div className="deals-grid">
            <div className="deals-page-stat">
              <p className="top-line-text">Infrastructure · UK · 2026</p>
              <h2>GBP 1.66bn</h2>
              <h3>Grain LNG - Sale to Centrica & Energy Capital Partners</h3>
              <p className="bottom-line-text">National Grid · SMBC Advisory</p>
            </div>

            <div className="deals-page-stat">
              <p className="top-line-text">LNG · Abu Dhabi · 2026</p>
              <h2>USD 8bn</h2>
              <h3>Ruwais LNG - Liquefaction plant development</h3>
              <p className="bottom-line-text">ADNOC, bp, Mitsui, Shell, TotalEnergies · SMBC Advisory</p>
            </div>

            <div className="deals-page-stat">
              <p className="top-line-text">Infrastructure · Uganda & Tanzania · 2025</p>
              <h2>USD 5bn</h2>
              <h3>EACOP - Financing of a cross-border heated crude oil pipeline</h3>
              <p className="bottom-line-text">TotalEnergies, CNOOC, UNOC, TPDC · SMBC Advisory</p>
            </div>

            <div className="deals-page-stat">
              <p className="top-line-text">Oil · Angola · 2022</p>
              <h2>USD 2.5bn</h2>
              <h3>Azule Energy - Pre-export financing of an upstream joint venture</h3>
              <p className="bottom-line-text">bp, Eni · SMBC Advisory</p>
            </div>

            <div className="deals-page-stat">
              <div className="deal-of-year-container">
                <p className="top-line-text">LNG · Nigeria · 2020</p>
                <div className="deal-of-year">
                  Deal of the year
                </div>
              </div>
              <h2>USD 3bn</h2>
              <h3>Nigeria LNG - Financing of Train 7</h3>
              <p className="bottom-line-text">NNPC, Shell, TotalEnergies, Eni · SMBC Advisory</p>
            </div>

            <div className="deals-page-stat">
              <p className="top-line-text">Renewables · Morocco · 2011</p>
              <h2>USD 850m</h2>
              <h3>Noor I - Financing of a CSP project</h3>
              <p className="bottom-line-text">Masen · Citigroup Advisory</p>
            </div>

            <div className="deals-page-stat">
              <p className="top-line-text">Refining & Marketing · Italy · 2011</p>
              <h2>EUR 900m</h2>
              <h3>TotalErg SpA - Corporate financing of a joint venture</h3>
              <p className="bottom-line-text">TotalEnergies, ERG · Citigroup Advisory</p>
            </div>

            <div className="deals-page-stat">
                <div className="deal-of-year-container">
                  <p className="top-line-text">LNG · Yemen · 2008</p>
                  <div className="deal-of-year">
                    Deal of the year
                  </div>
                </div>
              <h2>USD 2.8bn</h2>
              <h3>Yemen LNG - Financing of an upstream asset and LNG plant</h3>
              <p className="bottom-line-text">
                TotalEnergies, Hunt Oil <span style={{ fontStyle: 'italic' }}>et al.</span> · Citigroup Advisory
              </p>
            </div>

            <div className="deals-page-stat">
              <p className="top-line-text">Infrastructure · Algeria · 2005</p>
              <h2>USD 200m</h2>
              <h3>Hamma Water Desalination - Financing of a water desalination plant</h3>
              <p className="bottom-line-text">GE, Sonatrach, Sonelgaz · Citigroup Advisory</p>
            </div>
          </div>
        </div>

        <div className="carousel-container">
          <h1 style={{ color: '#1F305E', maxWidth: 'none' }}>
            Clients we've had the pleasure of working with
          </h1>
          <div className="carousel-top-wrapper">
            <Carousel images={combinedCarousel} />
          </div>
        </div>
      </div>

      <div style={{ width: '100%', height: '1px', background: '#e0e0e0' }} />
    </div>
  );
}