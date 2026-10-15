"use client";

import { useEffect, useRef, useState } from "react";

const email = "info@jor-design.nl";
const subject = encodeURIComponent("Offer for Retrogear.net");
const body = encodeURIComponent("Hi JOR-Design,\n\nI'd like to make an offer for Retrogear.net.\n\nMy offer: €\n\nName:\n\nBest regards,");
const offerLink = `mailto:${email}?subject=${subject}&body=${body}`;

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="arrow-icon"><path d={diagonal ? "M4 16 16 4M6 4h10v10" : "M3 10h13m-5-5 5 5-5 5"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const buyButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "Tab") {
        const focusable = document.querySelectorAll<HTMLElement>(
          ".modal button, .modal a[href]"
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      buyButtonRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <div className="site-shell">
      <header className="site-header wrap">
        <a className="brand" href="#top" aria-label="Retrogear.net, back to top">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
          <span>retrogear<span className="brand-dot">.</span>net</span>
        </a>
        <nav className="header-nav" aria-label="Main navigation">
          <a href="#domain">About the domain</a>
          <a href="https://jor-design.nl/" target="_blank" rel="noopener noreferrer">JOR-Design <ArrowIcon diagonal /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> A name with potential</div>
            <h1 id="hero-title">The next big<br /><em>retro idea</em><br />starts here.</h1>
            <p className="hero-lead">A short, memorable domain name for a store, community, or project built around retro gear. <strong>Retrogear.net</strong> could be yours.</p>
            <div className="hero-actions">
              <button className="button button-primary" ref={buyButtonRef} onClick={() => setIsOpen(true)}>Buy this domain <ArrowIcon /></button>
              <a className="text-link" href="#domain">Explore the name <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-footnote"><span className="pulse-dot" /> Offer received · new offers welcome</div>
          </div>

          <div className="hero-visual" aria-label="Retrogear.net domain name, asking price four hundred euros">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="visual-spark spark-one">✦</div><div className="visual-spark spark-two">✦</div>
            <div className="domain-card">
              <div className="card-top"><span className="card-top-dot" /> PREMIUM DOMAIN <span className="card-top-number">01 / 01</span></div>
              <div className="card-grid">
                <div className="card-symbol" aria-hidden="true"><span className="symbol-diamond"><span /></span></div>
                <div className="card-domain">retrogear<span>.net</span></div>
                <div className="card-tagline">A name that sticks.</div>
              </div>
              <div className="card-bottom"><span>ASKING PRICE</span><strong>€ 400</strong></div>
            </div>
            <div className="floating-label"><span className="label-icon">↗</span> Your idea starts with a name</div>
          </div>
        </section>

        <section className="ticker" aria-label="Domain name"><div className="ticker-inner"><span>RETROGEAR.NET</span><i>✳</i><span>FROM IDEA TO ICONIC</span><i>✳</i><span>RETROGEAR.NET</span><i>✳</i><span>FROM IDEA TO ICONIC</span></div></section>

        <section className="details wrap" id="domain" aria-labelledby="details-title">
          <div className="section-label"><span>01</span> / ABOUT THE NAME</div>
          <div className="details-content">
            <h2 id="details-title">A great name is<br /><span>a great start.</span></h2>
            <div className="details-aside"><p>Retrogear.net feels instantly familiar and leaves room to make it your own. Think vintage tech, games, collectibles, and more.</p><a href={offerLink}>Ready to make an offer? <ArrowIcon diagonal /></a></div>
          </div>
          <div className="value-grid">
            <article className="value-item"><span className="value-number">01 /</span><h3>Short & clear</h3><p>Easy to remember, easy to share.</p></article>
            <article className="value-item"><span className="value-number">02 /</span><h3>Room to grow</h3><p>A strong foundation for a store, platform, or creative project.</p></article>
            <article className="value-item"><span className="value-number">03 /</span><h3>Ready for your idea</h3><p>Make this domain the starting point for what comes next.</p></article>
          </div>
        </section>

        <section className="contact-band" id="contact"><div className="wrap contact-inner"><div><div className="contact-kicker">READY TO BUILD SOMETHING GREAT?</div><h2>Make this name <em>yours.</em></h2><p>Asking price: €400. The domain already has an offer, but you can send a new one directly to JOR-Design.</p></div><button className="button button-light" onClick={() => setIsOpen(true)}>Make an offer <ArrowIcon /></button></div></section>
      </main>

      <footer className="site-footer wrap"><a className="footer-brand" href="#top">retrogear<span>.</span>net</a><p>A domain offered by <a href="https://jor-design.nl/" target="_blank" rel="noopener noreferrer">JOR-Design <ArrowIcon diagonal /></a></p><a href={`mailto:${email}`}>{email}</a></footer>

      {isOpen && <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description"><button className="modal-close" type="button" ref={closeButtonRef} onClick={() => setIsOpen(false)} aria-label="Close">×</button><div className="modal-icon" aria-hidden="true">↗</div><span className="modal-kicker">RETROGEAR.NET</span><h2 id="modal-title">This domain<br />already has an offer.</h2><p id="modal-description">We're still open to new offers. Email yours to JOR-Design and we'll get back to you as soon as possible.</p><div className="modal-price"><span>ASKING PRICE</span><strong>€400</strong></div><a className="button button-primary modal-action" href={offerLink}>Email your offer <ArrowIcon /></a><a className="modal-email" href={`mailto:${email}`}>{email}</a></section></div>}
    </div>
  );
}
