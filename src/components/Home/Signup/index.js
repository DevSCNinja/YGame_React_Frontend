import React from "react";

import Button from "./../Button";

import { getImg } from "../../../utils/Helper";
import Styles from './Signup.scss';

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="signup">
                <div className="container userinfo">
                    <img src={getImg('home/users/lima.png')} alt="LIMA"/>
                    <div className="user-info">
                        <p className="username">Jonathan Lima</p>
                        <p className="usermail">jonathan.lima1997@gmail.com</p>
                    </div>
                </div>

                <div className="container">
                    <img className="small" src={getImg('home/icons/watchclock.png')} alt=""/>
                    <p>Central do Cliente</p>
                </div>

                <div className="container text-center">
                    <img className="big" src={getImg('home/icons/key.png')} alt=""/>
                    <div>
                        <p>Minhas</p>
                        <p>Chaves</p>
                    </div>
                </div>

                <div className="semi-container">
                    <div className="semi-half">
                        <img className="small" src={getImg('home/icons/note.png')} alt=""/>
                        <p>Pedidos</p>
                    </div>
                    <div className="semi-half">
                        <img className="small" src={getImg('home/icons/db.png')} alt=""/>
                        <p>Dados</p>
                    </div>
                </div>

                <div className="container">
                    <img className="small" src={getImg('home/icons/heart.png')} alt=""/>
                    <p>Lista de Desejos</p>
                </div>

                <Button buttontext="Sair" background="#F15A24"/>
            </div>
        )
    }
}

export default Signin