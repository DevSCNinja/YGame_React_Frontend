import React from "react";
import { getImg } from "../../../utils/Helper";
import  styles  from "../../../pages/Login/Login.module.scss";

export const WithOthers = () => {
    return (
        <ul>
            <li>
                <a href="#" className={styles.button}>
                    <img src={getImg('login/Google-Original.png')} alt="" />
                    <span>Continuar com Google</span>
                </a>
            </li>
            <li>
                <a href="#" className={styles.button}>
                    <img src={getImg('login/Facebook - Original.png')} alt="" />
                    <span>Continuar com Facebook</span>
                </a>
            </li>
            <li>
                <a href="#" className={styles.button}>
                    <img src={getImg('login/envelope-regular 1.png')} alt="" />
                    <span>Continuar com Email</span>
                </a>
            </li>
        </ul>
    )
}