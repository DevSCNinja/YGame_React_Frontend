import React from "react";

import { getImg } from "../../../utils/Helper";

import styles from './Header.module.scss';
// import { Button } from "../Button";

export const Header = (props) => {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.div}>
                    <div className={styles.logo}>
                        <img className="img-responsive" src={getImg('img/logo.png')} alt="logo" />
                    </div>
                    <div className={styles.navbar}>
                        <ul>
                            <li>
                                <a href="#">Sobre Nós</a>
                            </li>
                            <li>
                                <a href="#">Contato</a>
                            </li>
                            <li>
                                <a href="#">Suporte de vendas</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.clearfix }></div>
                </div>
            </div>
        </header>
    )
}

