import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import './scss/Index.scss'
import Content from './components/Content';
import { useState } from 'react';
import TimelineItem from './components/TimelineItem';

function App() {
  const [pages] = useState({ //! Si change && changer _cv.scss !//
    pagePrincipal: "A-propos-de-moi",
    pageCv: 'Mon-cv',
    pageMesProjets: 'Mes-projets'
  })
  const [textContent] = useState({
    // pour les differentes pages il y aura differents contenues
    pagePrincipal: <article className={pages.pagePrincipal}>
      <section>
        <h2>A propos de moi</h2>
        <p>Je m'appelle Lucas et depuis que j'ai touché la première fois au domaine de la programmation web en Seconde, ça ne m'a jamais quitté et m'a même initié plus largement au monde de l'informatique et c'est ainsi que j'ai pus recyclé un vieux pc en serveur web qui héberge aujourd'hui ce portfolio!</p>
        <p>J'ai donc logiquement postulé après le Bac pour mon BTS informatique m'initiant ainsi au back-end, au réseau et à la sécurité pour ne parler que de ces matières</p>
      </section>

      <section>
        <h2>Mes passions persos</h2>
        <p>Bien qu'une grande partie de mon temps libre se résume à pratiquer du javascript sous différentes formes, ou encore à améliorer mon serveur web et mon serveur de fichier ou essayer de faire un pas dans l'auto hebergement cloud j'essaye de quitter le bureau pour m'epanouir dans d'autres domaines</p>
        <p>Heureusement je suis assez bien entouré pour faire des pauses et me permettre de respirer entre deux bugs 🤐. Sinon je prends le temps de me balader et prendre le temps de respirer avec mon chien, le voir jouer avec d'autres et ainsi faire des rencontres !</p>
      </section>
    </article>,

    pageCv: <article className={pages.pageCv}>
      <section>
        <h2>diplomé du bac stmg option marketing</h2>
        <p>je saurais mettre en avant mon savoir-faire et mon savoir-être</p>

        <h2>En 1er annee de Bts Sio</h2>
        <p>Où j'apprends le réseau, la cybersécurité, le programmation orienté objet, back-end et front. Ainsi que de nombreuses autres matieres comme Culture economique juridique et managériale</p>
      </section>
      <section>
        <h2>Mes ressources personnels</h2>
        <p><strong>Autodidacte/Perseverant: </strong> j'ai par exemple eu assez de ressource pour apprendre en autodidacte les bases de la programmations et de l'intagration web jusqu'au framework react</p>
        <p> <strong>Curiosité: </strong> de même ma curiosité sans faille m'a par exemple amener a continuer un tp en cours qui consistait a heberger des sites sur apache 2 sur une vm jusqu'a heberger mon propre site sur un serveur nginx sur une machine physique</p>
        <div className="range-container">
          <p><input type="range" name="html/css" value="90" min="0" max="100" /> HTML/CSS </p>
          <p><input type="range" name="javascript" value="75" min="0" max="100" /> Javascript </p>
          <p><input type="range" name="react" value="70" min="0" max="100" /> React </p>
          <p><input type="range" name="php" value="30" min="0" max="100" /> Php </p>
        </div>
      </section>
    </article>,

    pageMesProjets: <article className="timeline">
      <TimelineItem
        titre="mangas-webcomics box"
        description="application front end utilisant le local storage pour pouvoir creer une bibliotheque avec toutes ses oeuvres"
        date="2020-2021"
        lien='https://google.com'
        langages="javascript" />
      <TimelineItem
        titre="jeu du memory"
        description="Lors d'un projet lycée en histoire j'ai proposé une version numérique du jeu déjà fait du mémory"
        date="2020-2021"
        lien='https://google.com'
        langages="javascript" />
      <TimelineItem
        titre="mangas-webcomics box"
        description="application front end utilisant le local storage pour pouvoir creer une bibliotheque avec toutes ses oeuvres"
        date="2020-2021"
        langages="javascript" />
      <TimelineItem
        titre="mangas-webcomics box"
        description="application front end utilisant le local storage pour pouvoir creer une bibliotheque avec toutes ses oeuvres"
        date="2020-2021"
        langages="javascript" />
    </article >
  })

  return (
    <div className="App">
      <Header />
      <Aside pages={pages} />
      <Content pages={pages} textContent={textContent} />
    </div>
  );
}

export default App;
