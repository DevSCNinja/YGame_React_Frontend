import React from "react";

import styles from '../Login.module.scss';
import { getImg } from "../../../utils/Helper";

export const Logo = (props) => {
    const wWidth = window.innerWidth;
    const wHeight = window.innerHeight;
    return (
        <img className={styles.logo} style={{ marginTop: ((wHeight - 335) / 2 - 71) / 2 + 'px', marginBottom: ((wHeight - 335) / 2 - 71) / 2 + 'px' }} src={getImg('login/Logo.png')} alt="logo" />
    )
}

