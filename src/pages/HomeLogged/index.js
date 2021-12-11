import React from "react";
import AliceCarousel from 'react-alice-carousel';

import HeaderLogged from "../../components/Home/HeaderLogged";
import Footer from "../../components/Home/Footer";
import Button from "../../components/Home/Button";
import Cardtitle from "../../components/Home/Cardtitle";
import Card from "../../components/Home/Card";
import Cart from "../../components/Home/Cart";
import Product from "../../components/Home/Product";

import { getImg } from "../../utils/Helper";

import "react-alice-carousel/lib/alice-carousel.css";
import Styles from './../Home/Home.module.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showCart: false
        };
    }

    handleShowCart = () => {
        this.setState({ showCart: true });
    }

    handleHideCart = () => {
        this.setState({ showCart: false });
    }

    render() {
        return (
            <div className={Styles.home}>
                {this.state.showCart &&  <Cart />}
                <div className={Styles.container}>
                    <HeaderLogged handleShowCart={this.handleShowCart}/>
                    <div className={Styles.cardcontent}>
                        <div className={`${Styles.slide}`}>
                            {/* <AliceCarousel autoPlay autoPlayInterval="3000"> */}
                            <AliceCarousel>
                                <div className={Styles.slideitem}>
                                    <img src={getImg('home/slides/slide-01.png')} alt="SlideImage"/>
                                    <div className={Styles.slidetext}>
                                        <div className={Styles.descript}>
                                            <p className={Styles.descripttitle}>Riot Games</p>
                                            <p className={Styles.descripttext}>Seja VP, RP ou até mesmo Moedas. Adquirá já conosco os créditos do seu jogo favorito.</p>
                                        </div>
                                        <div className={Styles.slidebutton}>
                                            <Button buttontext="Saiba Mais" background="#F15A24"/>
                                        </div>
                                    </div>
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
                            <div className={Styles.serviceitem}>
                                <img src={getImg('home/cart.png')} alt=""/>
                                <div className={Styles.servicedescript}>
                                    <h5>Loja 100% Segura</h5>
                                    <p>compre com segurança</p>
                                </div>
                            </div>
                            <div className={Styles.serviceitem}>
                                <img src={getImg('home/fingerprint.png')} alt=""/>
                                <div className={Styles.servicedescript}>
                                    <h5>Atendimento 24h</h5>
                                    <p>tire suas dúvidas</p>
                                </div>
                            </div>
                            <div className={Styles.serviceitem}>
                                <img src={getImg('home/24hours.png')} alt=""/>
                                <div className={Styles.servicedescript}>
                                    <h5>Entrega Rápida</h5>
                                    <p>em até 15 minutos</p>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.roblox}>
                            <Cardtitle title="Roblox"/>
                            <div className={Styles.cardlist}>
                                <Card cardimage="home/ROBLOX40.png" title="800 Robux - Roblox" price="R$ 40,00" discount="0" items={[{icon: 'home/icons/eye.png'},{icon: 'home/icons/computer.png'}, {icon: 'home/icons/mobile.png'}]}/>
                                <Card cardimage="home/ROBLOX60.png" title="1200 Robux - Roblox" price="R$ 60,00" discount="0" items={[{icon: 'home/icons/eye.png'},{icon: 'home/icons/computer.png'}, {icon: 'home/icons/mobile.png'}]}/>
                                <Card cardimage="home/ROBLOX10.png" title="800 Robux - Roblox" price="R$ 55,00" discount="0" items={[{icon: 'home/icons/flag.png'},{icon: 'home/icons/computer.png'}, {icon: 'home/icons/mobile.png'}]}/>
                                <Card cardimage="home/ROBLOX25.png" title="1200 Robux - Roblox" price="R$ 137,50" discount="0" items={[{icon: 'home/icons/flag.png'},{icon: 'home/icons/computer.png'}, {icon: 'home/icons/mobile.png'}]}/>
                            </div>
                        </div>
                        <div className={Styles.riot}>
                            <Cardtitle title="Riot Games"/>
                            <div className={Styles.cardlist}>
                                <Card cardimage="home/LEAGUE50.png" title="2220 RP - Riot Points" price="R$ 42,50" discount="-15%" items={[{icon: 'home/icons/eye.png'},{icon: 'home/icons/computer.png'}]}/>
                                <Card cardimage="home/LEAGUE100.png" title="4420 RP - Riot Points" price="R$ 80,00" discount="-20%" items={[{icon: 'home/icons/eye.png'},{icon: 'home/icons/computer.png'}]}/>
                                <Card cardimage="home/VALORANR50.png" title="1535 VP - Valorant Points" price="R$ 47,50" discount="-5%" items={[{icon: 'home/icons/eye.png'},{icon: 'home/icons/computer.png'}]}/>
                                <Card cardimage="home/VALORANR100.png" title="3130 VP - Valorant Points" price="R$ 137,50" discount="-72%" items={[{icon: 'home/icons/eye.png'},{icon: 'home/icons/computer.png'}]}/>
                            </div>
                        </div>
                        <div className={Styles.nintendo}>
                            <img src={getImg('home/Banner Site Nintendo.png')} alt=""/>
                            <div className={Styles.nintendoconntent}>
                                <div className={Styles.nintendoText}>
                                    <h5>Nintendo</h5>
                                    <p>Adquira já seus créditos e aproveite os
                                        <br /> melhores jogos de Nintendo Switch!</p>
                                </div>
                                <div>
                                    <Button buttontext="Ver Tudo" background="#F15A24"/>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.xbox}>
                            <Cardtitle title="Xbox"/> 
                            <div className={Styles.xboxwrap}>
                                <div className={Styles.xboxmain}>

                                </div>
                                <div className={Styles.xboxitem}>
                                    <div className={Styles.xboxitemrow}>
                                        <Card cardimage="home/XBOX0.png" title="Xbox Game Pass - 1 mês" price="R$ 42,75" discount="-5%" items={[{icon: 'home/icons/eye.png'},{icon: 'home/icons/computer.png'}]}/>
                                        <Card cardimage="home/XBOX0.png" title="Xbox Game Pass - 3 meses" price="R$ 128,25" discount="-5%" items={[{icon: 'home/icons/eye.png'},{icon: 'home/icons/computer.png'}]}/>
                                    </div>
                                    <div className={Styles.xboxitemrow} style={{marginTop: '12px'}}>
                                        <Card cardimage="home/XBOX12.png" title="Xbox Live Gold - 3 meses" price="R$ 81,70" discount="-5%" items={[{icon: 'home/icons/eye.png'},{icon: 'home/icons/computer.png'}]}/>
                                        <Card cardimage="home/XBOX12.png" title="Xbox Live Gold - 12 Meses" price="R$ 189,05" discount="-5%" items={[{icon: 'home/icons/eye.png'},{icon: 'home/icons/computer.png'}]}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.product}>
                            <Cardtitle title="Produtos Populares"/> 
                            <div className={Styles.productlist}>
                                <Product productimage="home/products/01.png" title="Spotify Premium - Assinatura 1 mês" price="R$ 17,00" discount="0" items={[{icon: 'home/icons/eye.png'},{icon: 'home/icons/computer.png'}]}/>
                                <Product productimage="home/products/02.png" title="Playstation R$ 100 - Gift Card Digital" price="R$ 95,00" discount="-5%" items={[{icon: 'home/icons/eye.png'},{icon: 'home/icons/computer.png'}]}/>
                                <Product productimage="home/products/03.png" title="Minecraft - Código Digital" price="R$ 99,99" discount="0" items={[{icon: 'home/icons/eye.png'},{icon: 'home/icons/computer.png'}]}/>
                            </div>
                            <div className={Styles.productlist}>
                                <Product productimage="home/products/04.png" title="Nintendo US$ 35 - Gift Card Digital" price="R$ 192,50" discount="0" items={[{icon: 'home/icons/flag.png'},{icon: 'home/icons/computer.png'}]}/>
                                <Product productimage="home/products/05.png" title="iFood R$ 100 - Gift Card Digital" price="R$ 100,00" discount="0" items={[{icon: 'home/icons/eye.png'},{icon: 'home/icons/computer.png'}]}/>
                                <Product productimage="home/products/06.png" title="iTunes 100 CNY - Gift Card Digital" price="R$ 90,53" discount="0" items={[{icon: 'home/icons/china.png'},{icon: 'home/icons/computer.png'}]}/>
                            </div>
                            <div className={Styles.productlist}>
                                <Product productimage="home/products/07.png" title="450 VP - Valorant Points" price="R$ 16,00" discount="0" items={[{icon: 'home/icons/flag.png'},{icon: 'home/icons/computer.png'}]}/>
                                <Product productimage="home/products/08.png" title="DAZN - Assinatura 3 meses" price="R$ 59,70" discount="0" items={[{icon: 'home/icons/eye.png'},{icon: 'home/icons/computer.png'}]}/>
                                <Product productimage="home/products/09.png" title="IMVU R$ 20 - Gift Card Digital" price="R$ 20,00" discount="0" items={[{icon: 'home/icons/china.png'},{icon: 'home/icons/computer.png'}]}/>
                            </div>
                            <div className={Styles.productlist}>
                                <Product productimage="home/products/10.png" title="Uber Eats R$ 50 - Gift Card Digital" price="R$ 50,00" discount="0" items={[{icon: 'home/icons/flag.png'},{icon: 'home/icons/computer.png'}]}/>
                                <Product productimage="home/products/11.png" title="Deezer Premium-Assinatura 3 meses" price="R$ 50,70" discount="0" items={[{icon: 'home/icons/eye.png'},{icon: 'home/icons/computer.png'}]}/>
                                <Product productimage="home/products/12.png" title="Steam 10 TL - Gift Card Digital" price="R$ 7,99" discount="0" items={[{icon: 'home/icons/china.png'},{icon: 'home/icons/computer.png'}]}/>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Home;