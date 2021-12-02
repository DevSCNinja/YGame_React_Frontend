import React from "react";
import AliceCarousel from 'react-alice-carousel';

import Header from "../../components/Home/Header";
import Service from "../../components/Home/Service";
import { getImg } from "../../utils/Helper";

import "react-alice-carousel/lib/alice-carousel.css";
import Styles from './Home.module.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={Styles.home}>
                <div className={Styles.container}>
                    <Header />
                    <div className={`${Styles.slide}`}>
                        {/* <AliceCarousel autoPlay autoPlayInterval="3000"> */}
                        <AliceCarousel disableButtonsControls>
                            <div className={Styles.slideitem}>
                                <img src={getImg('home/slides/slide-01.png')} alt="SlideImage"/>
                            </div>
                            <div className={Styles.slideitem}>
                                <img src={getImg('home/slides/slide-01.png')} alt="SlideImage"/>
                            </div>
                            <div className={Styles.slideitem}>
                                <img src={getImg('home/slides/slide-01.png')} alt="SlideImage"/>
                            </div>
                        </AliceCarousel>
                    </div>
                    <div className={Styles.service}>
                        <Service serviceimage="home/24hours.png" title="Entrega Rápida" descript="em até 15 minutos"/>
                        <Service serviceimage="home/cart.png" title="Loja 100% Segura" descript="compre com segurança"/>
                        <Service serviceimage="home/fingerprint.png" title="Atendimento 24h" descript="tire suas dúvidas"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;