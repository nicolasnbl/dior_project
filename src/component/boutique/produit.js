import React, {useEffect,useState} from 'react'

const Produit = (props) => {

const description = props.title;
const type = props.type;
const idImg = "produit"+props.id
const idPrix = "prix "+props.id

const [imgProd, setimgProd] = useState(true);
const [prixProd, setPrixProd] = useState(true);

var classImgProduit = imgProd ? "imgProduit "+"imgProduit"+props.id : "imgProduit imgProduitZoom "+"imgProduit"+props.id;
var classPrixProduit= prixProd ? "prixProduit" : "prixProduit prixProduitPanier"

const zoom = () => {
    setimgProd(false);
}

const noZoom = () => {
    setimgProd(true);
    
}

const switchTop = () => {
    setPrixProd(false);
}

const switchDown = () => {
    setPrixProd(true);
}

useEffect(() => {
    const imgProduit = document.getElementById(idImg);
    const prixProduit = document.getElementById(idPrix);
    imgProduit.addEventListener("mouseenter", zoom);
    imgProduit.addEventListener("mouseleave", noZoom);
    prixProduit.addEventListener("mouseenter", switchTop);
    prixProduit.addEventListener("mouseleave", switchDown);
  
    return () => {
        imgProduit.removeEventListener("mouseenter", zoom);
        imgProduit.removeEventListener("mouseleave", noZoom);
        prixProduit.removeEventListener("mouseenter", switchTop);
        prixProduit.removeEventListener("mouseleave", switchDown);
    }
  }, [])

  return (
    <div className="produit" id={idPrix}>
        <div className="imgProduitContainer" id={idImg}>
            <div className={classImgProduit}></div>
        </div>
        <div className="infoProuitContainer">
            <div className="typeProduitContainer">
                {type}
            </div>
            <div className="titreProduitContainer">
                {description}
            </div>
            <div className="prixProduitContainer">
                <div className={classPrixProduit} >
                    <p>159.99 € - 1,199.99 €</p>
                    <a href="">Ajouter au Panier</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Produit