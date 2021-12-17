import React from "react";

import { Logo } from "../../components/Login/Logo";
import { Footer } from "../../components/Login/Footer";
import { Button } from "../../components/Login/Button";

import styles from '../Login/Login.module.scss';
import { animations } from 'react-animation';

class Interest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                { id: 1, name: 'Playstation', active: false },
                { id: 2, name: 'Nintendo', active: false },
                { id: 3, name: 'Xbox', active: false },
                { id: 4, name: 'Steam', active: false },
                { id: 5, name: 'Riot Games', active: false },
                { id: 6, name: 'Roblo', active: false },
                { id: 7, name: 'Free Fire', active: false },
                { id: 8, name: 'League of Legends', active: false },
                { id: 9, name: 'Legends of Runeterra', active: false },
                { id: 10, name: 'Minecraft', active: false },
                { id: 11, name: 'Spotify', active: false },
                { id: 12, name: 'Deezer', active: false },
                { id: 13, name: 'Ifood', active: false },
                { id: 14, name: 'Uber', active: false },
                { id: 15, name: 'Tinder', active: false },
                { id: 16, name: 'iTunes', active: false },
                { id: 17, name: 'Google Play', active: false },
                { id: 18, name: 'IfooNetflixd', active: false },
                { id: 19, name: 'DAZN', active: false },
            ]
        };

    }

    handleToggle = id => {
        const updatedItems = this.state.items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    active: !item.active
                };
            } else {
                return item;
            }
        });

        this.setState({
            items: updatedItems
        });
    };

    render() {
        const animationStyle = {
            animation: animations.bounceIn
        }

        return (
            <div className={styles.login_page5}>
                <div className={styles.loginwrap}>
                    <Logo />
                    <div className={styles.logincontent}>
                        <div className={styles.interest} style={animationStyle}>
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
                                <div className={styles.row}>
                                    {
                                        this.state.items.map(el =>

                                            <span onClick={() => this.handleToggle(el.id)} className={el.active ? styles.active : ""}> {el.name} <i className={"fa fa-" + (el.active ? "check" : "times")}></i></span>
                                        )
                                    }

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

export default Interest;