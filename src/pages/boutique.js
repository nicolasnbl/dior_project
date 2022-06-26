import React, {useState} from 'react';
import Header from '../component/header';
import FenetreInfo from '../component/navInfoFenetre/fenetreInfo';
import MarqueBlock from '../component/boutique/marqueBlock';
import FenetreInfoContext from '../FenetreInfoContext';
import ListeMarque from '../component/boutique/listeMarque';
import Produit from '../component/boutique/produit';
import ListeProduitsVedettes from '../component/boutique/listeProduitsVedettes';

const Boutique = () => {

    //Partie header
    const [stateMenu, setstateMenu] = useState({
        transformMenu: "transformTranslateX0",
        bgdBlack: "display-none",
    });

    const [menuSelect, setmenuSelect] = useState(1);

    const contextValue = {
        stateMenu,
        menuSelect,
        openFenetreInfo: setstateMenu,
        openSelectMenu: setmenuSelect,
    }

    var classNameFIB = "fenetreInfoBlock "+stateMenu.transformMenu;
    var classNameBBO = "bgdBlackOpacity "+stateMenu.bgdBlack;
    //Fin Partie header

  return (
    <FenetreInfoContext.Provider value={contextValue}>
        <header>
            <Header />
            <div className="smallScreenSearch">
            <input type="text" placeholder='Que recherchez-vous ?' />
            </div>
        </header>
        <div className={classNameFIB}>
            <FenetreInfo />
        </div>
        <div className={classNameBBO}></div>
        <main>
            <div className="titreMarque">
                <h1>MARQUE</h1>
            </div>
            <ListeMarque />
            <div className="titreMarque">
                <h1>PRODUITS VEDETTES</h1>
            </div>
            <ListeProduitsVedettes />
            
        </main>
    </FenetreInfoContext.Provider>
  )
}

export default Boutique