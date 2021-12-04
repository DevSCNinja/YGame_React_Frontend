import React from "react";

import { Logo } from "../../../components/Login/Logo";
import { Footer } from "../../../components/Login/Footer";
import { Button } from "../../../components/Login/Button";
import Loginmodal from "../../../components/Login/Loginmodal";

import styles from '../Login.module.scss';

class Page6 extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <div className={styles.login_page6}>
                <div className={styles.loginwrap}>
                    <Logo />
                    <div className={styles.logincontent}>
                        <div className={styles.interest}>
                            <dl>
                                <dt>
                                    Escolha seus interesses
                                </dt>
                                <dd>
                                    Nós gostaríamos de entender seus gostos para te
                                    entregar conteúdo e promoções exclusivas.
                                </dd>
                            </dl>
                            <div class={styles.interest_check_wrap}>
                                <div class={styles.row}>
                                    <span>Playstation <i className="fa fa-times"></i></span>
                                    <span className={styles.active}>Nintendo</span>
                                    <span>Xbox</span>
                                    <span>Steam</span>
                                    <span className={styles.active}>Riot Games</span>
                                </div>
                                <div class={styles.row}>
                                    <span className={styles.active}>Roblox</span>
                                    <span>Free Fire</span>
                                    <span>League of Legends</span>
                                </div>
                                <div class={styles.row}>
                                    <span>Valorant</span>
                                    <span className={styles.active}>Legends of Runeterra</span>
                                    <span>Minecraft</span>
                                </div>
                                <div class={styles.row}>
                                    <span className={styles.active}>Spotify</span>
                                    <span>Deezer</span>
                                    <span>Ifood</span>
                                    <span>Uber</span>
                                    <span className={styles.active}>Tinder</span>
                                </div>
                                <div class={styles.row}>
                                    <span>iTunes</span>
                                    <span>Google Play</span>
                                    <span>IfooNetflixd</span>
                                    <span className={styles.active}>DAZN</span>
                                </div>
                            </div>
                            <p>Não quero compartilhar meus gostos, pular esta parte</p>
                            <Button />
                        </div>
                    </div>
                    <Footer />       
                </div>
                <Loginmodal show={this.state.show} handleClose={this.hideModal} />
            </div>
        )
    }
}

export default Page6;