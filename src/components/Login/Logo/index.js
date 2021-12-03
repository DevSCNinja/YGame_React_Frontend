import React from "react";

import styles from '../Login.module.scss';
import { getImg } from "../../../utils/Helper";

export const Logo = (props) => {
    return (
        <img className={styles.logo} src={getImg('login/Logo.png')} alt="logo" />
    )
}

