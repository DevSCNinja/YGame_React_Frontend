import React from "react";
// import InputNumber from 'rc-input-number';

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
                    <input type="number" seletecd id="" min="0" />
                    <button className={Styles.price} style={{background: "#01060A"}}>{this.props.productprice}</button> 
                    <button style={{background: "#DB2B2F"}}><i class="fa fa-trash"></i></button> 
                </div>
            </div>
        )
    }
}

export default Item