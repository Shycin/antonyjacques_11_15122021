import React from 'react';
import Header from '../../Components/Header';
import Banner from '../../Components/Banner';
import Collapse from '../../Components/Collapse';
import Footer from '../../Components/Footer';

import RenderValueInString from '../../Components/RenderValueInString';

import banner from '../../img/banner_2.png';

import './index.css';
 
class About extends React.Component {
    render() {
        return (
            <div id="about">
                <Header location={window.location.pathname} />
                <main>
                    <Banner banner={banner}/>
                    <Collapse name="Fiabilité" description={<RenderValueInString value={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."}/>} />
                    <Collapse name="Respect" description={<RenderValueInString value={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>} />
                    <Collapse name="Service" description={<RenderValueInString value={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}/>} />
                    <Collapse name="Sécurité" description={<RenderValueInString value={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}/>} />
                </main>
                <Footer />
            </div>
        )
    }
}
export default About;