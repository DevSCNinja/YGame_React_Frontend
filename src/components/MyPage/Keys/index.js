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
            purchase: false,
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
            ],
            activeItem: 0,
            buttonText: 'Resgatar'
        }
    }

    activationModalOpen = (activeItem) => {
        this.setState( { 
            actModalOpen: true,
             activeItem : activeItem - 1,
             buttonText: 'resgatando '
        });

    }

    activationModalClose = () => {
        this.setState ({ actModalOpen: false, buttonText : 'resgata' });
    }

    doPurchase = no => {
        const updatedItems = (no) => this.state.items.map(item => {
            if (item.no ===  no) {
                return {
                    ...item,
                    isPurchase: true
                };
            } else {
            return item;
            }
        });

        this.setState({
            items: updatedItems(no)
        });
       
    };
    
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
                                <Button className={"btn" + idx} buttontext={item.isPurchase ? 'ja Resgatado' : this.state.buttonText} background={item.isPurchase ? '#DB2B2F' : '#01191E'} onClick={() => this.activationModalOpen(item.no)}/>
                            </div>
                        ))
                    }
                </div>
                {this.state.actModalOpen && <Activationmodal items= {this.state.items} activeItem= {this.state.activeItem} purchase={this.state.purchase} doPurchase={this.doPurchase}  actModalOpen={this.state.actModalOpen} activationModalClose={this.activationModalClose}/>}    
            </div>
        )
    }
}

export default Keys



