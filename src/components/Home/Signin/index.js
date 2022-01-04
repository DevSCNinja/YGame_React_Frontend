import React from "react";

import Button from "./../Button";

import { getImg } from "../../../utils/Helper";
import Styles from './Signin.module.scss';
import { Link } from 'react-router-dom';

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className={Styles.signin}>
                <div className={Styles.userinfo}>
                    <img src={getImg('home/icons/user-default.png')} alt="" />
                    <p>Usuário não logado</p>
                </div>
                <Link to='/login'><Button buttontext="Fazer Login" background="#01191E" /></Link>
                <Link to='/register'><Button buttontext="Cadastrar-se" background="#01191E" /></Link>
            </div >
        )
    }
}

export default Signin