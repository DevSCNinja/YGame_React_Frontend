import React from "react";

import Button from "../Button";

import { getImg } from "../../../utils/Helper";
import Styles from './Signin.module.scss';

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className={Styles.signin}>
                <div className={Styles.userinfo}>
                    <img src={getImg('home/icons/user-default.png')} alt=""/>
                    <p>Usuário não logado</p>
                </div>

                <Button buttontext="Fazer Login" background="#F15A24"/>
                <Button buttontext="Cadastrar-se" background="#01191E"/>
            </div>
            
        )
    }
}

export default Signin