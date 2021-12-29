import React from "react";

import styles from '../Login.module.scss';
import { Link } from 'react-router-dom';

export const Button = (props) => {
    return (
        <Link to="/home">
            <button onClick={() => localStorage.setItem('login', true)} className={styles.submit} type="button" >{!props.text ? "Continuar" : props.text}</button>
        </Link>
    )
}
