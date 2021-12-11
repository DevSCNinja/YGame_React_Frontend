import React from "react";

import styles from '../Login.module.scss';

export const Button = (props) => {
    return (
        <button className={styles.submit} type="button" onClick={props.onClick  }>{!props.text ? "Continuar" : props.text}</button>
    )
}
