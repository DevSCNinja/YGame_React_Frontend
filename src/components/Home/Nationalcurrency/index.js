import React from "react";

import Button from "./../Button";

import { getImg } from "../../../utils/Helper";
import Styles from './Nationalcurrency.module.scss';

class Nationalcurrency extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className={Styles.panel}>
                <h5>Selecione suas preferências</h5>
                <p>Troque sua região ou moeda</p>
                <p>Região</p>
                <p>Moeda</p>
                <Button buttontext="Realizar Troca" background="#F15A24"/>
            </div>
        )
    }
}

export default Nationalcurrency