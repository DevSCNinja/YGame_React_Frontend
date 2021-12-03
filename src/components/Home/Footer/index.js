import React from "react";

import { getImg } from "../../../utils/Helper";
import Nationalcurrency from "../Nationalcurrency";
import Styles from './Footer.module.scss';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showNaCurPanel: false
        };
    }

    toogleNaCurPanel = () => {
        this.setState({
            showNaCurPanel: this.state.showNaCurPanel
        });
    }

    render() {
        return (
            <div className={Styles.footerpanel}>
                <div className={Styles.container}>
                    <div className={Styles.pay}>
                        <div className={Styles.paycard}>
                            <p>Métodos de Pagamento:</p>
                            <div>
                                <img src={getImg('home/icons/pay.png')} alt=""/>
                                <img src={getImg('home/icons/pay-dots.png')} alt=""/>
                                <img src={getImg('home/icons/pay-dot.png')} alt=""/>
                                <img src={getImg('home/icons/pay-visa.png')} alt=""/>
                                <img src={getImg('home/icons/pay-vertical.png')} alt=""/>
                                <img src={getImg('home/icons/pay-apple.png')} alt=""/>
                                <img src={getImg('home/icons/pay-google.png')} alt=""/>
                            </div>
                        </div>
                        <div className={Styles.paycountry}>
                            <a href="#">
                                <img src={getImg('home/flags/brasil.png')} alt=""/>
                                <p>Brasil (Português) / BRL (R$) </p>
                                <i></i>
                            </a>
                            {
                                this.state.showNaCurPanel && 
                                <Nationalcurrency />
                            }
                        </div>
                    </div>
                    <div className={Styles.support}>
                        <div className={Styles.supporttext}>
                            <h5>YIYI Games</h5>
                            <p><a href="#">Sobre Nós</a></p>
                            <p><a href="#">Contato</a></p>
                            <p><a href="#">Blog e Notícias</a></p>
                            <p><a href="#">Carreira e Empregos</a></p>
                        </div>
                        <div className={Styles.supporttext}>
                            <h5>Ajuda</h5>
                            <p><a href="#">Suporte de vendas</a></p>
                            <p><a href="#">Termos e Condições</a></p>
                            <p><a href="#">Privacidade e Cookies</a></p>
                            <p><a href="#">Trocas e Reembolso</a></p>
                        </div>
                        <div className={Styles.supporttext}>
                            <h5>Negócios</h5>
                            <p><a href="#">Central de Negócios</a></p>
                            <p><a href="#">Empresas Parceiras</a></p>
                            <p><a href="#">Empresas Parceiras</a></p>
                        </div>
                        <div className={Styles.supporttext}>
                            <h5>Mídias Sociais</h5>
                            <div>
                                <a href="#"><img src={getImg('home/socials/Facebook.png')}/></a>
                                <a href="#"><img src={getImg('home/socials/Twitter.png')}/></a>
                                <a href="#"><img src={getImg('home/socials/Instagram.png')}/></a>
                            </div>
                            <div>
                                <a href="#"><img src={getImg('home/socials/YouTube.png')}/></a>
                                <a href="#"><img src={getImg('home/socials/Linkedin.png')}/></a>
                                <a href="#"><img src={getImg('home/socials/Pinterest.png')}/></a>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.contact}>
                        <div className={Styles.contactus}>
                            <p>Avenida Paulista, 2073 - Bela Vista</p>
                            <p>Horsa 1, Sala 823</p>
                            <p>São Paulo - SP / Brasil</p>
                            <p>CEP: 01311-940</p>
                            <p>CNPJ: 42.636.806/0001-10</p>
                        </div>
                        <div className={Styles.logo}>
                            <img src={getImg('home/lg-logo.png')} alt="Logo"/>
                        </div>
                    </div>
                    <div className={Styles.copyright}>
                        <p>
                            O uso deste site implica na aceitação dos <span>Termos e Condições</span> e da <span>Política de Privacidade.</span>
                        </p>
                        <p>
                            Todos os direitos autorais, marcas comerciais, marcas de serviço pertencem aos respectivos proprietários.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer