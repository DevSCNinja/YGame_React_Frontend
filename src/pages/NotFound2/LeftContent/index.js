import React from "react";

import styles from './LeftContent.module.scss';
import { Button } from '../../../components/NotFound/Button';

// import { Button } from "../Button";

export const LeftContent = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftcontent}>
                <dl>
                    <dt>
                        Esta página esta errada
                    </dt>
                    <dd>Você está tentando há dez minutos. É muito tarde da noite e está
                    muito escuro em seu quarto. Você se estica e acende uma lâmpada. Você se sente tão estúpido. A lacuna no brinquedo é um triângulo e você só tem o cilindro e as peças do cubo. Desanimado, você joga o brinquedo de lado. Amaldiçoe a incapacidade do seu filho de cinco anos de controlar o triângulo!</dd>
                </dl>
                <Button />
            </div>
        </div>
    )
}

