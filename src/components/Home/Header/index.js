import React from "react";

import Signin from "../Signin";
import { getImg } from "../../../utils/Helper";
import Styles from './Header.module.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showSignin: false
        };
    }

    toogleSignin = () => {
        this.setState({showSignin: !this.state.showSignin});
    }

    render() {
        return (
            <header className={Styles.header}>
                
                <div className={Styles.topmenu}>
                    <div className={Styles.menu}>
                        <a href="#"><img src={getImg('home/icons/menu.png')} alt="Menu"/></a>
                    </div>
                    <div className={Styles.logo}>
                        <img src={getImg('home/logo.png')} alt="Logo"/>
                    </div>
                    <div className={Styles.iconinputcontainer}>
                        <input className={Styles.iconinput} type="text" placeHolder="O que procura, jovem padawan?"/>
                        <div className={Styles.iconcontainer}>
                            <div className={Styles.iconsearch}></div>
                        </div>
                    </div>
                    <div className={Styles.userinfo}>
                        <a href="#" className={Styles.userimage} onClick={this.toogleSignin}>
                            <img src={getImg('home/icons/user-default.png')} alt="User" />
                        </a>
                        
                        <div className={Styles.username}>
                            <p>Minha Conta</p>
                        </div>
                        <div className={Styles.usercart}>
                            <a href="#"><img src={getImg('home/icons/cart.png')} alt="User" /></a>
                            <span className={Styles.productcount}>1</span>
                        </div>
                        {this.state.showSignin && <Signin />}
                    </div>
                </div>
            </header>
        )
    }
}

export default Header