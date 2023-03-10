import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import './scss/Index.scss'
import Content from './components/Content';
import { useState } from 'react';
import TimelineItem from './components/TimelineItem';

function App() {
  const [pages, setPages] = useState({
    pagePrincipal: "A-propos-de-moi",
    pageCv: 'Mon-Cv',
    pageMesProjets: 'Mes-projets'
  })
  const [textContent, setTextContent] = useState({
    // pour les differentes pages il y aura differents contenues
    pagePrincipal:
      <article className={pages.pagePrincipal}>
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

    pageCv:
      <article className={pages.pageCv}>
        <section>
          <h2>diplomé du bac stmg option marketing</h2>
          <p>je saurais mettre en avant mon savoir-faire et mon savoir-être</p>

          <h2>En 1er annee de Bts Sio</h2>
        </section>
      </article>,

    pageMesProjets: <article className="timeline">
      <TimelineItem
        titre="mangas-webcomics box"
        description="application front end utilisant le local storage pour pouvoir creer une bibliotheque avec toutes ses oeuvres"
        date="2020-2021" lien="/"
        langages="javascript" />
      <TimelineItem
        titre="mangas-webcomics box"
        description="application front end utilisant le local storage pour pouvoir creer une bibliotheque avec toutes ses oeuvres"
        date="2020-2021" lien="/"
        langages="javascript" />
      <TimelineItem
        titre="mangas-webcomics box"
        description="application front end utilisant le local storage pour pouvoir creer une bibliotheque avec toutes ses oeuvres"
        date="2020-2021" lien="/"
        langages="javascript" />
      <TimelineItem
        titre="mangas-webcomics box"
        description="application front end utilisant le local storage pour pouvoir creer une bibliotheque avec toutes ses oeuvres"
        date="2020-2021" lien="/"
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
