import React from "react";
import ReactFlagsSelect from "react-flags-select";

import Button from "./../Button";
import Selectflag from "./../Selectflag";

import { getImg } from "../../../utils/Helper";
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
            showNaCurPanel: !this.state.showNaCurPanel
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
                            <a onClick={this.toogleNaCurPanel}>
                                <img src={getImg('home/flags/brasil.png')} alt=""/>
                                <p>Brasil (Português) / BRL (R$) </p>
                                <i></i>
                            </a>
                            {
                                this.state.showNaCurPanel && 
                                <div className={Styles.panel}>
                                    <a onClick={this.toogleNaCurPanel}><span class="fa fa-times" aria-hidden="true"></span></a>
                                    <h5>Selecione suas preferências</h5>
                                    <h6>Troque sua região ou moeda</h6>
                                    <p>Região</p>
                                        <ReactFlagsSelect 
                                            className={Styles.flagselect}
                                            countries={["BR"]}
                                            customLabels={{"BR": "Brasil (Português)"}} 
                                            selected="BR"
                                            selectButtonClassName={Styles.flagselectbutton}
                                            selectedSize={16}
                                            optionsSize={16}
                                        />
                                    <p>Moeda</p>
                                    <Selectflag options={[{text: "Real Brasileiro (R$)"}]}/>
                                    
                                    <Button buttontext="Realizar Troca" background="#F15A24"/>
                                </div>
                            }
                        </div>
                    </div>
                    <div className={Styles.support}>
                        <div className={Styles.supporttext}>
                            <h5>YIYI Games</h5>
                            <p><a >Sobre Nós</a></p>
                            <p><a >Contato</a></p>
                            <p><a >Blog e Notícias</a></p>
                            <p><a >Carreira e Empregos</a></p>
                        </div>
                        <div className={Styles.supporttext}>
                            <h5>Ajuda</h5>
                            <p><a >Suporte de vendas</a></p>
                            <p><a >Termos e Condições</a></p>
                            <p><a >Privacidade e Cookies</a></p>
                            <p><a >Trocas e Reembolso</a></p>
                        </div>
                        <div className={Styles.supporttext}>
                            <h5>Negócios</h5>
                            <p><a >Central de Negócios</a></p>
                            <p><a >Empresas Parceiras</a></p>
                            <p><a >Empresas Parceiras</a></p>
                        </div>
                        <div className={Styles.supporttext}>
                            <h5>Mídias Sociais</h5>
                            <div>
                                <a className={Styles.icon_facebook}><i className="fa fa-facebook"></i></a>
                                <a className={Styles.icon_twitter}><i className="fa fa-twitter"></i></a>
                                <a className={Styles.icon_instagram}><i className="fa fa-instagram"></i></a>
                            </div>
                            <div>
                                <a className={Styles.icon_youtube}><i className="fa fa-youtube"></i></a>
                                <a className={Styles.icon_pinterest}><i className="fa fa-pinterest"></i></a>
                                <a className={Styles.icon_pinterest}><i className="fa fa-pinterest"></i></a>
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