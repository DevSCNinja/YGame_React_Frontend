import React from "react";

import styles from './Login.module.scss';

export const Footer1 = (props) => {
    const wWidth = window.innerWidth;
    const wHeight = window.innerHeight;
    return (
        <div className={styles.footerbar} style={{ width: wWidth + 'px' }}>
            <ul>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Perguntas frequentes</a></li>
                <li><a href="#">Política de Privacidade</a></li>
            </ul>
        </div>
    )
}
