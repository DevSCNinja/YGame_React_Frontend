import React from "react";

import Button from "./../Button";
import Item from "./Item";

import { getImg } from "../../../utils/Helper";
import Styles from './Cart.module.scss';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {

        return (
            <div className={Styles.container}>
                <h5>
                    Carrinho de Compras
                </h5>
                <div className={Styles.products}>
                    <div className={Styles.productscontent}>
                        <Item productname="Minecraft - Código Digital" productcount="1" productprice="R$ 99,99" productimage="home/products/03.png"/>
                        <Item productname="Spotify W - Assinatura 3..." productcount="1" productprice="R$ 250,00" productimage="home/products/01.png"/>
                        <Item productname="800 Robux - Roblox" productcount="1" productprice="R$ 80,00" productimage="home/products/13.png"/>
                        <Item productname="Minecraft - Código Digital" productcount="1" productprice="R$ 99,99" productimage="home/products/03.png"/>
                    </div>
                </div>
                <div className={Styles.total}>
                    <p>Total</p>
                    <p>R$ 429,99</p>
                </div>
                <div className={Styles.buttoncontent}>
                    <Button buttontext="Finalizar Compra" background="#F15A24"/>
                </div>
                
            </div>   
        )
    }
}

export default Cart