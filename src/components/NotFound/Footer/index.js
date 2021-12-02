import React from "react";

import { getImg } from "../../../utils/Helper";

import styles from './Footer.module.scss';
// import { Button } from "../Button";

export const Footer = (props) => {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.div}>
                    <div className={styles.footerbar}>
                        <ul>
                            <li>Siga a gente!</li>
                            <li>
                                <a href="#"><img src={getImg('img/instagram.png')} alt="instagram"/></a>
                            </li>
                            <li>
                                <a href="#"><img src={getImg('img/twitter.png')} alt="twitter"/></a>
                            </li>
                            <li>
                                <a href="#"><img src={getImg('img/facebook.png')} alt="facebook"/></a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.clearfix }></div>
                </div>
            </div>
        </footer>
    )
}

