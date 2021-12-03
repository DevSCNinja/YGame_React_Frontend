import React from "react";

import { Logo } from "../../../components/Login/Logo";
import { Footer } from "../../../components/Login/Footer";
import { Button } from "../../../components/Login/Button";
import { LoginModal } from "../../../components/Login/LoginModal";

import styles from '../Login.module.scss';

class Page6 extends React.Component {
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
                <LoginModal />
            </div>
        )
    }
}

export default Page6;