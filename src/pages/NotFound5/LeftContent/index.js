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
                        Esta página está
                        enterrada na areia
                    </dt>
                    <dd>Você nunca viu uma cabeça de avestruz. Sempre que você está por perto, parece que os avestruzes estão evitando seu olhar. Você veio nesta viagem especificamente para ver uma cabeça de avestruz, mas aqui está esta avestruz bem na sua frente, com a cabeça invisível. Você pode nunca ver uma cabeça de avestruz.</dd>
                </dl>
                <Button />
            </div>
        </div>
    )
}

