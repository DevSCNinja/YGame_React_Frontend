import React from "react";

import Button from "./../Button";

import { getImg } from "../../../utils/Helper";
import Styles from './Signup.scss';
import { Link } from 'react-router-dom';

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleClick = () => {
        localStorage.setItem('login', false);
        this.props.handleHide();
    }

    render() {
        return (
            <div className="signup" >
                <div>
                    <div className="container userinfo">
                        <img src={getImg('home/users/lima.png')} alt="LIMA" />
                        <div className="user-info">
                            <p className="username">Jonathan Lima</p>
                            <p className="usermail">jonathan.lima1997@gmail.com</p>
                        </div>
                    </div>

                    <div className="container">
                        <img className="small" src={getImg('home/icons/watchclock.png')} alt="" />
                        <p>Central do Cliente</p>
                    </div>

                    <div className="container text-center">
                        <img className="big" src={getImg('home/icons/key.png')} alt="" />
                        <div>
                            <Link to='/mypage/keys'>Minhas Chaves</Link>
                        </div>
                    </div>

                    <div className="semi-container">
                        <div className="semi-half">
                            <img className="small" src={getImg('home/icons/note.png')} alt="" />
                            <Link to='/mypage/request'>Pedidos</Link>
                        </div>
                        <div className="semi-half">
                            <img className="small" src={getImg('home/icons/db.png')} alt="" />
                            <Link to='/mypage/data'>Dados</Link>
                        </div>
                    </div>

                    <div className="container">
                        <img className="small" src={getImg('home/icons/heart.png')} alt="" />
                        <Link to='/mypage/wishlist'>Lista de Desejos</Link>

                    </div>

                    <button onClick={() => this.handleClick()} style={{ backgroundColor: "#F15A24" }} >
                        Sair
                    </button>
                </div>
            </div>
        )
    }
}

export default Signin