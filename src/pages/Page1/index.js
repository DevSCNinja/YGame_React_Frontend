import React from "react";
import AliceCarousel from 'react-alice-carousel';

import Header from "../../components/Home/Header";
import Footer from "../../components/Home/Footer";
import Button from "../../components/Page1/Button";
import Sort from "../../components/Page1/Sort";

import Cardtitle from "../../components/Home/Cardtitle";
import Card from "../../components/Home/Card";
import Product from "../../components/Home/Product";

import { getImg } from "../../utils/Helper";

import "react-alice-carousel/lib/alice-carousel.css";
import Styles from './Page1.module.scss';

class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={Styles.home}>
                <div className={Styles.container}>
                    <Header />
                    <div className={Styles.category_menu_wrap}>
                        <div className={Styles.caption}>
                            MINHA CONTA
                        </div>
                        
                        <div className={Styles.avatar_wrap}>
                            <img class={Styles.avatar_img} src={getImg('page1/avatar.png')} alt=""/>
                            <button type="button" className={Styles.btn_sair}>Sair</button>
                        </div>
                        <div className={Styles.userinfo_wrap}>
                            <div className={Styles.userinfo_item}>
                                <dl>
                                    <dt>Jonathan Lima</dt>
                                    <dd>Nome</dd>
                                </dl>
                            </div>
                            <div className={Styles.userinfo_item}>
                                <dl>
                                    <dt>jonathan@yigames.gg</dt>
                                    <dd>Email</dd>
                                </dl>
                            </div>
                            <div className={Styles.userinfo_item}>
                                <dl>
                                    <dt>(11) 98893-5997</dt>
                                    <dd>Telefone</dd>
                                </dl>
                            </div>
                        </div>
                        
                        <div className={Styles.category_list}>
                            <div className={Styles.category_item}>
                                <img src={getImg('page1/icon1.png')} alt=""/>
                                <div>Minhas Chaves</div>
                            </div>
                            <div className={Styles.category_item}>
                                <img src={getImg('page1/icon2.png')} alt=""/>
                                <div>Minhas Chaves</div>
                            </div>
                            <div className={Styles.category_item}>
                                <img src={getImg('page1/icon3.png')} alt=""/>
                                <div>Minhas Chaves</div>
                            </div>
                            <div className={Styles.category_item}>
                                <img src={getImg('page1/icon4.png')} alt=""/>
                                <div>Minhas Chaves</div>
                            </div>
                        </div>
                    </div>

                    <div className={Styles.product_item_wrap}>
                        <div className={Styles.sortable_list}>
                            <span>Ordernar por:</span>
                            <Sort options={[{text: "Real Brasileiro (R$)"}]}/>
                        </div>
                        <div className={Styles.product_list}>
                            <div className={Styles.product_item}>
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
                        </div>
                        <div className={Styles.product_list}>
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
                        </div>
                        <div className={Styles.product_list}>
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
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Page1;