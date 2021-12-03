import React from "react";

import { Logo } from "../../../components/Login/Logo";
import { Footer } from "../../../components/Login/Footer";
import { Button } from "../../../components/Login/Button";

import styles from '../Login.module.scss';

class Page5 extends React.Component {
    render() {
        return (
            <div className={styles.login_page5}>
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
                                    <span className={styles.active}>Nintendo <i className="fa fa-check"></i></span>
                                    <span>Xbox <i className="fa fa-times"></i></span>
                                    <span>Steam <i className="fa fa-times"></i></span>
                                    <span className={styles.active}>Riot Games  <i className="fa fa-check"></i></span>
                                </div>
                                <div class={styles.row}>
                                    <span className={styles.active}>Roblox <i className="fa fa-check"></i></span>
                                    <span>Free Fire <i className="fa fa-times"></i></span>
                                    <span>League of Legends <i className="fa fa-times"></i></span>
                                </div>
                                <div class={styles.row}>
                                    <span>Valorant <i className="fa fa-times"></i></span>
                                    <span className={styles.active}>Legends of Runeterra <i className="fa fa-check"></i></span>
                                    <span>Minecraft <i className="fa fa-times"></i></span>
                                </div>
                                <div class={styles.row}>
                                    <span className={styles.active}>Spotify <i className="fa fa-check"></i></span>
                                    <span>Deezer <i className="fa fa-times"></i></span>
                                    <span>Ifood <i className="fa fa-times"></i></span>
                                    <span>Uber <i className="fa fa-times"></i></span>
                                    <span className={styles.active}>Tinder <i className="fa fa-check"></i></span>
                                </div>
                                <div class={styles.row}>
                                    <span>iTunes <i className="fa fa-times"></i></span>
                                    <span>Google Play <i className="fa fa-times"></i></span>
                                    <span>IfooNetflixd <i className="fa fa-times"></i></span>
                                    <span className={styles.active}>DAZN <i className="fa fa-check"></i></span>
                                </div>
                            </div>
                            <p>Não quero compartilhar meus gostos, pular esta parte</p>
                            <Button />
                        </div>
                    </div>
                    <Footer />       
                </div>
            </div>
        )
    }
}

export default Page5;