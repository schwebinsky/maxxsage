"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Language = "de" | "en";

const copy = {
  de: {
    nav: { about: "Über MAXX", music: "Musik", podcast: "Podcast", contact: "Kontakt" },
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    role: "Sängerin · Songwriterin · Podcasterin",
    heroTitle: "Musik, die Zwischentöne sucht.",
    heroBody:
      "Anspruchsvolles Songwriting, reduzierte Arrangements und Texte mit echter Tiefe — für Momente, in denen man ganz genau hinhört.",
    heroPrimary: "MAXX entdecken",
    heroSecondary: "Auf Instagram folgen",
    scroll: "Weiter",
    musicEyebrow: "Im Studio",
    musicTitle: "Neue Musik entsteht.",
    musicBody:
      "Die ersten Songs von MAXX Sage befinden sich gerade in Produktion. Hier wächst etwas Eigenes — ehrlich, reduziert und mit Raum für die leisen Töne.",
    musicStatus: "In Produktion",
    musicNote: "Veröffentlichungen folgen",
    aboutEyebrow: "Über MAXX",
    aboutTitle: "Eine Stimme für das Dazwischen.",
    aboutBody1:
      "Es gibt Musik, die läuft nebenbei — und es gibt Songs, die Aufmerksamkeit fordern. Die Musik von MAXX Sage sucht genau diese Zwischentöne.",
    aboutBody2:
      "Als Sängerin, Songwriterin und Podcasterin verbindet sie intensives Erleben mit klarer Sprache. Persönlich, nahbar und ohne unnötige Lautstärke.",
    quote: "Nicht lauter. Sondern näher.",
    podcastEyebrow: "Gespräche, die bleiben",
    podcastTitle: "Out of Tune",
    podcastBody:
      "Echte Geschichten. Spannende Gäste. Persönliche Einblicke. Inspirierende Gespräche über Musik, Gefühle und das Leben dazwischen.",
    podcastTag: "Podcast",
    podcastItems: ["Echte Geschichten", "Spannende Gäste", "Persönliche Einblicke"],
    contactEyebrow: "Bleib verbunden",
    contactTitle: "Der Anfang ist schon hörbar.",
    contactBody:
      "Begleite MAXX Sage auf Instagram und erlebe neue Musik, Gedanken und Momente direkt aus der Produktion.",
    instagram: "Zu Instagram",
    legalSource: "Impressum",
    privacy: "Datenschutz",
    rights: "Alle Rechte vorbehalten.",
    photoAltProfile: "Porträt von MAXX Sage im Profil",
    privacyTitle: "Datenschutz",
    privacyText:
      "Diese Website verwendet keine Analyse- oder Marketing-Cookies und enthält kein Kontaktformular. Beim Aufruf können technisch notwendige Verbindungsdaten durch den Hosting-Anbieter verarbeitet werden. Für externe Links gelten die Datenschutzbestimmungen des jeweiligen Anbieters.",
    close: "Schließen",
  },
  en: {
    nav: { about: "About MAXX", music: "Music", podcast: "Podcast", contact: "Contact" },
    menuOpen: "Open menu",
    menuClose: "Close menu",
    role: "Singer · Songwriter · Podcaster",
    heroTitle: "Music made for the in-between.",
    heroBody:
      "Thoughtful songwriting, stripped-back arrangements and lyrics with real depth — for moments that ask you to listen closely.",
    heroPrimary: "Discover MAXX",
    heroSecondary: "Follow on Instagram",
    scroll: "Explore",
    musicEyebrow: "In the studio",
    musicTitle: "New music is taking shape.",
    musicBody:
      "The first songs by MAXX Sage are currently in production. Something personal is growing here — honest, distilled and open to the quiet notes.",
    musicStatus: "In production",
    musicNote: "Releases coming soon",
    aboutEyebrow: "About MAXX",
    aboutTitle: "A voice for everything in between.",
    aboutBody1:
      "Some music simply plays in the background — and some songs ask for your full attention. MAXX Sage makes music for precisely those in-between spaces.",
    aboutBody2:
      "As a singer, songwriter and podcaster, she connects intense experience with clear language. Personal, close and never louder than it needs to be.",
    quote: "Not louder. Just closer.",
    podcastEyebrow: "Conversations that stay with you",
    podcastTitle: "Out of Tune",
    podcastBody:
      "Real stories. Compelling guests. Personal perspectives. Inspiring conversations about music, emotion and the life in between.",
    podcastTag: "Podcast",
    podcastItems: ["Real stories", "Compelling guests", "Personal perspectives"],
    contactEyebrow: "Stay connected",
    contactTitle: "The beginning is already audible.",
    contactBody:
      "Follow MAXX Sage on Instagram for new music, thoughts and moments straight from the production process.",
    instagram: "Visit Instagram",
    legalSource: "Legal notice",
    privacy: "Privacy",
    rights: "All rights reserved.",
    photoAltProfile: "Profile portrait of MAXX Sage",
    privacyTitle: "Privacy",
    privacyText:
      "This website does not use analytics or marketing cookies and does not provide a contact form. The hosting provider may process technically necessary connection data when the site is accessed. External links are governed by the privacy policies of their respective providers.",
    close: "Close",
  },
} as const;

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "wordmark wordmark--compact" : "wordmark"} aria-label="MAXX Sage">
      <span className="wordmark__maxx">MAXX</span>
      <span className="wordmark__sage">Sage</span>
    </span>
  );
}

function InstagramMark() {
  return <span className="instagram-mark" aria-hidden="true"><span /></span>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("de");
  const [menuOpen, setMenuOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const text = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (!privacyOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPrivacyOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [privacyOpen]);

  const navigate = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <a className="skip-link" href="#content">
        {language === "de" ? "Zum Inhalt" : "Skip to content"}
      </a>

      <header className="site-header">
        <a href="#top" className="brand-link" aria-label="MAXX Sage – Home" onClick={navigate}>
          <Wordmark compact />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? text.menuClose : text.menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav id="main-navigation" className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#about" onClick={navigate}>{text.nav.about}</a>
          <a href="#music" onClick={navigate}>{text.nav.music}</a>
          <a href="#podcast" onClick={navigate}>{text.nav.podcast}</a>
          <a href="#contact" onClick={navigate}>{text.nav.contact}</a>
        </nav>

        <div className="language-switch" aria-label={language === "de" ? "Sprache wählen" : "Choose language"}>
          <button className={language === "de" ? "is-active" : ""} type="button" onClick={() => setLanguage("de")} aria-pressed={language === "de"}>DE</button>
          <span aria-hidden="true">/</span>
          <button className={language === "en" ? "is-active" : ""} type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
        </div>
      </header>

      <div id="content">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="hero__texture" aria-hidden="true" />
          <div className="hero__copy">
            <p className="eyebrow reveal reveal--one">{text.role}</p>
            <h1 className="hero__wordmark reveal reveal--two"><Wordmark /></h1>
            <p id="hero-title" className="hero__title reveal reveal--three">{text.heroTitle}</p>
            <p className="hero__body reveal reveal--four">{text.heroBody}</p>
            <div className="hero__actions reveal reveal--five">
              <a className="button button--primary" href="#about">{text.heroPrimary}<span aria-hidden="true">↘</span></a>
              <a className="text-link" href="https://www.instagram.com/maxx.music/" target="_blank" rel="noreferrer">
                <InstagramMark />{text.heroSecondary}<span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__halo" />
            <div className="hero__photo-frame">
              <Image
                src="/images/maxx-chair.webp"
                alt=""
                fill
                priority
                sizes="(max-width: 1050px) 100vw, 57vw"
                unoptimized
              />
            </div>
            <div className="hero__brush hero__brush--one" />
            <div className="hero__brush hero__brush--two" />
            <p className="hero__vertical">MUSIC IN THE MAKING · 2026</p>
          </div>

          <a className="scroll-cue" href="#music"><span>{text.scroll}</span><i aria-hidden="true" /></a>
        </section>

        <section id="music" className="music-section section-grid" aria-labelledby="music-title">
          <div className="section-index" aria-hidden="true">01</div>
          <div className="music-section__copy">
            <p className="eyebrow eyebrow--copper">{text.musicEyebrow}</p>
            <h2 id="music-title">{text.musicTitle}</h2>
            <p>{text.musicBody}</p>
          </div>
          <div className="production-card">
            <div className="production-card__rings" aria-hidden="true"><span /><span /><span /></div>
            <p className="production-card__status">{text.musicStatus}</p>
            <div className="waveform" aria-hidden="true">
              {Array.from({ length: 33 }, (_, index) => (
                <span
                  key={index}
                  style={{
                    height: `${12 + (index % 7) * 7}px`,
                    opacity: 0.32 + (index % 4) * 0.14,
                  }}
                />
              ))}
            </div>
            <p className="production-card__note">{text.musicNote}</p>
          </div>
          <div className="outline-type" aria-hidden="true">IN PRODUCTION</div>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-title">
          <div className="about-section__image">
            <Image
              src="/images/maxx-profile.webp"
              alt={text.photoAltProfile}
              fill
              sizes="(max-width: 1050px) 100vw, 54vw"
              unoptimized
            />
            <div className="about-section__image-wash" aria-hidden="true" />
            <span className="about-section__caption" aria-hidden="true">MAXX / PORTRAIT 02</span>
          </div>
          <div className="about-section__copy">
            <p className="eyebrow eyebrow--copper">{text.aboutEyebrow}</p>
            <h2 id="about-title">{text.aboutTitle}</h2>
            <p>{text.aboutBody1}</p>
            <p>{text.aboutBody2}</p>
            <blockquote>{text.quote}</blockquote>
          </div>
        </section>

        <section id="podcast" className="podcast-section section-grid" aria-labelledby="podcast-title">
          <div className="section-index section-index--dark" aria-hidden="true">02</div>
          <div className="podcast-card">
            <div className="podcast-card__topline"><span>{text.podcastTag}</span><span>OUT / OF / TUNE</span></div>
            <div className="podcast-card__mic" aria-hidden="true"><i className="mic-head" /><i className="mic-stand" /></div>
            <div className="podcast-card__scribble" aria-hidden="true" />
            <div className="podcast-card__title" aria-hidden="true"><span>OUT</span><span>OF TUNE</span></div>
          </div>
          <div className="podcast-section__copy">
            <p className="eyebrow eyebrow--ink">{text.podcastEyebrow}</p>
            <h2 id="podcast-title">{text.podcastTitle}</h2>
            <p>{text.podcastBody}</p>
            <ul>
              {text.podcastItems.map((item) => <li key={item}><span aria-hidden="true">◆</span>{item}</li>)}
            </ul>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-section__grain" aria-hidden="true" />
          <div className="contact-section__copy">
            <p className="eyebrow eyebrow--copper">{text.contactEyebrow}</p>
            <h2 id="contact-title">{text.contactTitle}</h2>
            <p>{text.contactBody}</p>
            <a className="button button--primary button--large" href="https://www.instagram.com/maxx.music/" target="_blank" rel="noreferrer">
              <InstagramMark />{text.instagram}<span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-section__mark" aria-hidden="true">M<span>S</span></div>
        </section>
      </div>

      <footer className="site-footer">
        <Wordmark compact />
        <div className="site-footer__links">
          <a href="https://maxximumvoice.com/impressum/" target="_blank" rel="noreferrer">{text.legalSource}</a>
          <button type="button" onClick={() => setPrivacyOpen(true)}>{text.privacy}</button>
          <a href="https://www.instagram.com/maxx.music/" target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <p>© {new Date().getFullYear()} MAXX Sage. {text.rights}</p>
      </footer>

      {privacyOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setPrivacyOpen(false); }}>
          <section className="legal-modal" role="dialog" aria-modal="true" aria-labelledby="privacy-title">
            <button className="legal-modal__close" type="button" onClick={() => setPrivacyOpen(false)} aria-label={text.close}>×</button>
            <p className="eyebrow eyebrow--copper">MAXX Sage</p>
            <h2 id="privacy-title">{text.privacyTitle}</h2>
            <p>{text.privacyText}</p>
            <button className="button button--primary" type="button" onClick={() => setPrivacyOpen(false)}>{text.close}</button>
          </section>
        </div>
      )}
    </main>
  );
}
