"use client";

import { useEffect, useRef, useState } from "react";

const email = "info@jor-design.nl";
const subject = encodeURIComponent("Bod op Retrogear.net");
const body = encodeURIComponent("Hoi JOR-Design,\n\nIk wil graag een bod uitbrengen op Retrogear.net.\n\nMijn bod: €\n\nNaam:\n\nGroet,");
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
        <a className="brand" href="#top" aria-label="Retrogear.net, naar boven">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
          <span>retrogear<span className="brand-dot">.</span>net</span>
        </a>
        <nav className="header-nav" aria-label="Hoofdnavigatie">
          <a href="#domein">Over het domein</a>
          <a href="https://jor-design.nl/" target="_blank" rel="noopener noreferrer">JOR-Design <ArrowIcon diagonal /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> Een naam met potentie</div>
            <h1 id="hero-title">De volgende grote<br /><em>retro-ervaring</em><br />begint hier.</h1>
            <p className="hero-lead">Een korte, herkenbare domeinnaam voor een webshop, community of project vol retro gear. <strong>Retrogear.net</strong> kan van jou zijn.</p>
            <div className="hero-actions">
              <button className="button button-primary" ref={buyButtonRef} onClick={() => setIsOpen(true)}>Koop dit domein <ArrowIcon /></button>
              <a className="text-link" href="#domein">Ontdek de naam <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-footnote"><span className="pulse-dot" /> Al onder bod · nieuwe voorstellen welkom</div>
          </div>

          <div className="hero-visual" aria-label="Retrogear.net domeinnaam, vraagprijs vierhonderd euro">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="visual-spark spark-one">✦</div><div className="visual-spark spark-two">✦</div>
            <div className="domain-card">
              <div className="card-top"><span className="card-top-dot" /> PREMIUM DOMAIN <span className="card-top-number">01 / 01</span></div>
              <div className="card-grid">
                <div className="card-symbol" aria-hidden="true"><span className="symbol-diamond"><span /></span></div>
                <div className="card-domain">retrogear<span>.net</span></div>
                <div className="card-tagline">Een naam die blijft hangen.</div>
              </div>
              <div className="card-bottom"><span>VRAAGPRIJS</span><strong>€ 400<span>,–</span></strong></div>
            </div>
            <div className="floating-label"><span className="label-icon">↗</span> Jouw idee begint met een naam</div>
          </div>
        </section>

        <section className="ticker" aria-label="Domeinnaam"><div className="ticker-inner"><span>RETROGEAR.NET</span><i>✳</i><span>VAN IDEE NAAR ICONISCH</span><i>✳</i><span>RETROGEAR.NET</span><i>✳</i><span>VAN IDEE NAAR ICONISCH</span></div></section>

        <section className="details wrap" id="domein" aria-labelledby="details-title">
          <div className="section-label"><span>01</span> / OVER DE NAAM</div>
          <div className="details-content">
            <h2 id="details-title">Een goede naam is<br /><span>het halve werk.</span></h2>
            <div className="details-aside"><p>Retrogear.net klinkt direct vertrouwd en geeft je ruimte om er jouw eigen verhaal van te maken. Van vintage technologie tot games en verzamelobjecten.</p><a href={offerLink}>Liever meteen een voorstel doen? <ArrowIcon diagonal /></a></div>
          </div>
          <div className="value-grid">
            <article className="value-item"><span className="value-number">01 /</span><h3>Kort & duidelijk</h3><p>Een naam die makkelijk te onthouden en te delen is.</p></article>
            <article className="value-item"><span className="value-number">02 /</span><h3>Veel mogelijkheden</h3><p>Een sterke basis voor een winkel, platform of creatief project.</p></article>
            <article className="value-item"><span className="value-number">03 /</span><h3>Direct starten</h3><p>De domeinnaam staat klaar voor jouw volgende idee.</p></article>
          </div>
        </section>

        <section className="contact-band" id="contact"><div className="wrap contact-inner"><div><div className="contact-kicker">ZIN OM IETS MOOIS TE BOUWEN?</div><h2>Maak de naam <em>van jou.</em></h2><p>Vraagprijs €400. Het domein is al onder bod; een nieuw voorstel kun je rechtstreeks mailen aan JOR-Design.</p></div><button className="button button-light" onClick={() => setIsOpen(true)}>Doe een voorstel <ArrowIcon /></button></div></section>
      </main>

      <footer className="site-footer wrap"><a className="footer-brand" href="#top">retrogear<span>.</span>net</a><p>Een domein aangeboden via <a href="https://jor-design.nl/" target="_blank" rel="noopener noreferrer">JOR-Design <ArrowIcon diagonal /></a></p><a href={`mailto:${email}`}>{email}</a></footer>

      {isOpen && <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description"><button className="modal-close" type="button" ref={closeButtonRef} onClick={() => setIsOpen(false)} aria-label="Sluiten">×</button><div className="modal-icon" aria-hidden="true">↗</div><span className="modal-kicker">RETROGEAR.NET</span><h2 id="modal-title">Dit domein is<br />al onder bod.</h2><p id="modal-description">We staan nog steeds open voor een goed voorstel. Mail jouw bod naar JOR-Design; we nemen zo snel mogelijk contact met je op.</p><div className="modal-price"><span>VRAAGPRIJS</span><strong>€400</strong></div><a className="button button-primary modal-action" href={offerLink}>Mail jouw bod <ArrowIcon /></a><a className="modal-email" href={`mailto:${email}`}>{email}</a></section></div>}
    </div>
  );
}
