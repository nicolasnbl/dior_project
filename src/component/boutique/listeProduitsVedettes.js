import React from 'react'
import Produit from './produit'

const ListeProduitsVedettes = () => {

  return (
   <ul className="listeProduitsVedettes">
    <li>
        <Produit id="1" type="SPEEDMASTER" title="OMEGA MOONWATCH PROFESSIONAL CHRONOGRAPHE CO‑AXIAL MASTER CHRONOMETER 42 MM" />
    </li>
    <li>
        <Produit id="2" type="SPEEDMASTER" title="OMEGA MOONWATCH PROFESSIONAL CHRONOGRAPHE CO‑AXIAL MASTER CHRONOMETER 42 MM"/>
    </li>
    <li>
        <Produit id="3" type="SPEEDMASTER" title="OMEGA MOONWATCH PROFESSIONAL CHRONOGRAPHE CO‑AXIAL MASTER CHRONOMETER 42 MM" />
    </li>
    <li>
        <Produit id="4" type="SPEEDMASTER" title="OMEGA SPEEDMASTER '57 CHRONOGRAPHE CO‑AXIAL MASTER CHRONOMETER 40,5 MM" />
    </li>
    <li>
        <Produit id="5" type="CONSTELLATION" title="OMEGA CONSTELLATION CO‑AXIAL MASTER CHRONOMETER 41 MM" />
    </li>
    <li>
        <Produit id="6" type="SPEEDMASTER" title="OMEGA MOONWATCH PROFESSIONAL CHRNOGRAPHE CO‑AXIAL MASTER CHRONOMETER 42 MM" />
    </li>
   </ul>
  )
}

export default ListeProduitsVedettes