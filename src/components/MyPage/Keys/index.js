import React, { useState } from "react";

import { getImg } from "../../../utils/Helper";
import Styles from './Keys.module.scss';
import Button from '../Button';
import Sort from '../Sort';

import Activationmodal  from '../Activationmodal';

class Keys extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            actModalOpen: false,
            modalName: "",
            items : [
                {no : 1, image : '1.png', isPurchase: false},
                {no : 2, image : '2.png', isPurchase: true},
                {no : 3, image : '3.png', isPurchase: true},
                {no : 4, image : '4.png', isPurchase: true},
                {no : 5, image : '5.png', isPurchase: true},
                {no : 6, image : '6.png', isPurchase: true},
                {no : 7, image : '7.png', isPurchase: true},
                {no : 8, image : '8.png', isPurchase: true},
                {no : 9, image : '9.png', isPurchase: true}, 
            ]
        }
    }

    activationModalOpen = (param) => {
        window.scrollTo({
            bottom: 200,
            behavior: 'smooth' // for smoothly scrolling
       });
       
        this.setState( { actModalOpen: true, modalName: param });
    }

    activationModalClose = () => {
        this.setState ({ actModalOpen: false });
    }

    doPurchase = () => {
        this.setState({ purchase : true });
    }


    render() {
        const options = [];

        return (
            <div className={Styles.product_item_wrap}>
                <div style={{ display: "flex", justifyContent: "flex-end"}}>
                    <Sort options={options}/>
                </div>
                <div className={Styles.product_list}>
                    {
                        this.state.items.map((item, idx) => (
                            <div className={Styles.product_item}>
                                <img src={getImg('mypage/' + item.image)} alt=""/>
                                <Button className={"btn" + idx} buttontext="Resgatar" background={item.isPurchase ? '#DB2B2F' : '#01191E'} onClick={() => this.activationModalOpen(item.isPurchase ? 'activated' : 'activation')}/>
                            </div>
                        ))
                    }
                </div>
                {this.state.actModalOpen && <Activationmodal modalName={this.state.modalName} actModalOpen={this.state.actModalOpen} activationModalClose={this.activationModalClose}/>}    
            </div>
        )
    }
}

export default Keys



