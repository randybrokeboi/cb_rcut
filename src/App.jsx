import pinned from './assets/pinnedvideocut.mp4'
import "../silk-serif/Silk Serif Light.otf";
import './App.css'
import {Calendly} from './calendly.jsx';

function App() {
  return (
    <>
      <nav className="top-nav">
        <a href="/" className="top-nav__brand">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 411 401">
          <path d="M205.5 401l-34.89-138.06-129.69 58.8 86.2-113.35L.27 143.66l142.36-3.3L114.17.86 205.5 110.1 296.83.85l-28.47 139.52 142.36 3.29-126.83 64.73 86.19 113.36-129.7-58.8L205.5 401z"></path></svg>
        LOGO
        </a>
        <a href={"#dispo"} onClick={(e) => handleLinkClick(e, "#dispo")} className="text-center">Réserver</a>
        <a href={"#about"} onClick={(e) => handleLinkClick(e, "#about")} className="text-right">À Propos</a>
    </nav>
  <div className="magazine-cover__title text-center">
        <span>CB RCUT</span>
      </div>
      <h1 className="magazine-cover__subtitle">
        Tentez l&#39;expérience
      </h1>
      <div className="magazine-cover__image-wrapper">
        <div className="magazine-cover__art">
          <video src={pinned} autoPlay loop playsInline muted preload className="magazine-cover__image"/>
        </div>
        <div className="magazine-cover__blurred-title">CB RCUT</div>
      </div>
      <div id="dispo" className="text-center dispocomponent mt-32">
        <div className="border-b-2 border-black">Voici mes disponibilités</div>
        <div className="mt-8 content-center">
          <Calendly />
        </div>
      </div>
      <div id="avis" className="text-center aviscomponent mt-32">
        <div className="border-b-2 border-black">Avis Clients</div>
        <div className="mt-8 mb-14 content-center">
          <div className="vision">
            <div className="moving">
              <span>Le meilleur Barber de Nice 🙏🏾</span>
              <span>La daronne a validé 🤞🏾</span>
              <span>Aucun Flop</span>
              <span>Allez-y les yeux fermés</span>
              <span>Du bon boulot </span>
              <span>Le meilleur Barber de Nice 🙏🏾</span>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  )
}

const handleLinkClick = (e, href) => {
  if (!(href.includes("mailto"))){
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -60;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({top: offsetPosition, behavior: "smooth"})
    }
  }
}

export default App
