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
            modalName: ""
        }
    }

    activationModalOpen = (param) => {
        this.setState( { actModalOpen: true, modalName: param });
    }

    activationModalClose = () => {
        this.setState ({ actModalOpen: false });
    }

    render() {
        const options = [];

        return (
            <div className={Styles.product_item_wrap}>
                <div style={{ display: "flex", justifyContent: "flex-end"}}>
                    <Sort options={options}/>
                </div>
                <div className={Styles.product_list}>
                    <div className={Styles.product_item}>
                        <img src={getImg('mypage/1.png')} alt=""/>
                        <Button buttontext="Resgatar" background="#01191E" onClick={() => this.activationModalOpen('activation')}/>
                    </div>
                    <div className={Styles.product_item}>
                        <img src={getImg('mypage/2.png')} alt=""/>
                        <Button buttontext="Resgatar" background="#DB2B2F" onClick={() => this.activationModalOpen('activated')}/>
                    </div>
                    <div className={Styles.product_item}>
                        <img src={getImg('mypage/3.png')} alt=""/>
                        <Button buttontext="Resgatar" background="#DB2B2F" onClick={() => this.activationModalOpen('activated')}/>
                    </div>
                    <div className={Styles.product_item}>
                        <img src={getImg('mypage/4.png')} alt=""/>
                        <Button buttontext="Resgatar" background="#DB2B2F" onClick={() => this.activationModalOpen('activated')}/>
                    </div>
                    <div className={Styles.product_item}>
                        <img src={getImg('mypage/5.png')} alt=""/>
                        <Button buttontext="Resgatar" background="#DB2B2F" onClick={() => this.activationModalOpen('activated')}/>
                    </div>
                    <div className={Styles.product_item}>
                        <img src={getImg('mypage/6.png')} alt=""/>
                        <Button buttontext="Resgatar" background="#DB2B2F" onClick={() => this.activationModalOpen('activated')}/>
                    </div>
                    <div className={Styles.product_item}>
                        <img src={getImg('mypage/7.png')} alt=""/>
                        <Button buttontext="Resgatar" background="#DB2B2F" onClick={() => this.activationModalOpen('activated')}/>
                    </div>
                    <div className={Styles.product_item}>
                        <img src={getImg('mypage/8.png')} alt=""/>
                        <Button buttontext="Resgatar" background="#DB2B2F" onClick={() => this.activationModalOpen('activated')}/>
                    </div>
                    <div className={Styles.product_item}>
                        <img src={getImg('mypage/9.png')} alt=""/>
                        <Button buttontext="Resgatar" background="#DB2B2F" onClick={() => this.activationModalOpen('activated')}/>
                    </div>
                </div>
                {this.state.actModalOpen && <Activationmodal modalName={this.state.modalName} actModalOpen={this.state.actModalOpen} activationModalClose={this.activationModalClose}/>}    
            </div>
        )
    }
}

export default Keys



