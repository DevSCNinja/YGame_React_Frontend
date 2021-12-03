import React from "react";

import styles from '../Login.module.scss';

export const Footer = (props) => {
    return (
        <div className={styles.footerbar}>
               <ul>
                   <li><a href="#">Sobre</a></li>
                   <li><a href="#">Perguntas frequentes</a></li>
                   <li><a href="#">Política de Privacidade</a></li>
               </ul>
            </div>
    )
}
