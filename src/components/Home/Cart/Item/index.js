import React from "react";
import $ from 'jquery'; 
// import InputNumber from 'rc-input-number';

import Button from "./../../Button";

import { getImg } from "../../../../utils/Helper";
import Styles from './Item.module.scss';

class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {

        return (
            <div className={Styles.item}>
                <div className={Styles.productimage}>
                    <img src={getImg(this.props.productimage)} alt=""/>
                </div>
                <div className={Styles.productinfo}>
                    <p>{this.props.productname}</p>
                    <input type="number" defaultValue="5" id="" min="0" />
                    <button className={Styles.price} style={{background: "#0D3840"}}>{this.props.productprice}</button> 
                    <button style={{background: "#DB2B2F"}}><i class="fa fa-trash"></i></button> 
                </div>
            </div>
        )
    }
}

export default Item