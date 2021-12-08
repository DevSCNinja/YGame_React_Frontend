import React, { useState } from "react";

import { getImg } from "../../../utils/Helper";
import Styles from './Subpage1.module.scss';
import Button from '../Button';
import Sort from '../Sort';

import Activationmodal  from '../Activationmodal';

class Subpage1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        return (
            <div className={Styles.product_item_wrap}>
                <Sort options={[{text: "Real Brasileiro (R$)"}]}/>
                <div className={Styles.product_list}>
                    <div className={Styles.product_item} onClick={this.props.handleShow}>
                        <img src={getImg('page1/1.png')} alt=""/>
                        <Button buttontext="Resgatar" background="#01191E"/>
                    </div>
                    <div className={Styles.product_item}>
                        <img src={getImg('page1/2.png')} alt=""/>
                        <Button buttontext="Resgatar" background="#DB2B2F"/>
                    </div>
                    <div className={Styles.product_item}>
                        <img src={getImg('page1/3.png')} alt=""/>
                        <Button buttontext="Resgatar" background="#DB2B2F"/>
                    </div>
                    <div className={Styles.product_item}>
                        <img src={getImg('page1/4.png')} alt=""/>
                        <Button buttontext="Resgatar" background="#DB2B2F"/>
                    </div>
                    <div className={Styles.product_item}>
                        <img src={getImg('page1/5.png')} alt=""/>
                        <Button buttontext="Resgatar" background="#DB2B2F"/>
                    </div>
                    <div className={Styles.product_item}>
                        <img src={getImg('page1/6.png')} alt=""/>
                        <Button buttontext="Resgatar" background="#DB2B2F"/>
                    </div>
                    <div className={Styles.product_item}>
                        <img src={getImg('page1/7.png')} alt=""/>
                        <Button buttontext="Resgatar" background="#DB2B2F"/>
                    </div>
                    <div className={Styles.product_item}>
                        <img src={getImg('page1/8.png')} alt=""/>
                        <Button buttontext="Resgatar" background="#DB2B2F"/>
                    </div>
                    <div className={Styles.product_item}>
                        <img src={getImg('page1/9.png')} alt=""/>
                        <Button buttontext="Resgatar" background="#DB2B2F"/>
                    </div>
                </div>
                <Activationmodal />    
            </div>
        )
    }
}

export default Subpage1



