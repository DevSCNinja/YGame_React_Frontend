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
                        Esta página está torrada
                    </dt>
                    <dd>A torrada demora muito para fazer. Você olha para a torradeira batendo seus pés. Sua roupa está na secadora e acabou de sujar. Talvez você o tire. Afinal, você tem tempo. Você tira sua roupa. Você dobra sua cueca. Você pensa em dobrar suas meias. Você se lembra do seu brinde! É muito tarde. Está queimado até ficar crocante. O processo se repete. Você provavelmente deve descobrir suas configurações de torragem.</dd>
                </dl>
                <Button />
            </div>
        </div>
    )
}

