import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import './scss/Index.scss'
import Content from './components/Content';
import { useState } from 'react';

function App() {
  const [pages, setPages] = useState({
    pagePrincipal: "A-propos-de-moi",
    pageCv: 'Mon-Cv',
    pageMesProjets: 'Mes-projets'
  })

  return (
    <div className="App">
      <Header />
      <Aside pages={pages} />
      <Content />
    </div>
  );
}

export default App;
