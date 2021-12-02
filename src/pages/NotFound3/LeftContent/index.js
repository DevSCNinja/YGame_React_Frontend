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
                    Não chore pela h&nbsp;derramada
                    </dt>
                    <dd>Você segura as lágrimas enquanto o líquido branco se espalha
                    pelo chão de sua caixa de papelão de aparência triste. Você
                    deveria ter comprado o leite com chocolate, era claramente a
                    melhor escolha. E então talvez você não o tivesse jogado tão
                    descuidadamente do outro lado da sala quando enfaticamente
                    apontou para um pássaro do lado de fora. Tarde demais agora.
                    Você enxuga a única lágrima do olho e vai buscar o esfregão.</dd>
                </dl>
                <Button />
            </div>
        </div>
    )
}

