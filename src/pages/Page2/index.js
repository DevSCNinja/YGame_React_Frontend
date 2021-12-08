import React, { useState } from "react";

import Header from "../../components/Home/Header";
import Footer from "../../components/Home/Footer";

// import Cardtitle from "../../components/Home/Cardtitle";
// import Card from "../../components/Home/Card";
// import Product from "../../components/Home/Product";
import { getImg } from "../../utils/Helper";
import Styles from './Page2.module.scss';

function Page2() {
    const [count ,setCount] = useState(0);

    return (
        <div className={Styles.product_page}>
            <div className={Styles.container}>
                <Header />
                <div className={Styles.product_detail_container}>
                    <div className={Styles.product_detail_wrap}>
                        <div className={Styles.product_title}>Playstation Plus 12 meses - Assinatura Digital</div>
                        <img src={getImg('page2/product_large.png')} alt=""/>
                        <div className={Styles.product_detail_content}>
                            <div className={Styles.icon_group}>
                                <img src={getImg('page2/icon1.png')} alt=""/>
                                <img src={getImg('page2/icon2.png')} alt=""/>
                            </div>
                            <div className={Styles.time_wrap}>
                                <button>-5%</button>
                                <div>
                                    <span>Acaba em:</span>
                                    <span>00D / 13:24:32</span>
                                </div>
                            </div>
                            <div className={Styles.product_price}>
                                    R$ 47,50
                            </div>
                            <button className={Styles.btn_purchase}>Comprar</button>
                            <div className={Styles.btn_group}>
                                <button><i class="fa fa-heart"></i> Desejo</button>
                                <button><i class="fa fa-reply"></i> Compartilhar</button>
                            </div>
                            <div className={Styles.footer_text}>
                                Sua compra está segura conosco.
                                Para saber mais sobre nós, <a href="#">clique aqui!</a>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.explain_wrap}>
                        <dl>
                            <dt>
                                <span>Detalhes</span>
                                <span>Como Resgatar</span>
                            </dt>
                            <dd>
                                <p>Os cartões-presente da PlayStation Store são uma alternativa simples e rápida para
                                recarregar sua conta PSN com crédito sem um cartão de crédito!
                                </p>
                                <p>Sempre o presente perfeito – O crédito PSN pode ser comprado e doado sem uma contaPSN.</p>
                                <p>Compre e resgate em alguns minutos – após concluir a compra você receberá um e-mailcom seu código!</p>
                                <p>Use o crédito PSN para compre ofertas exclusivas na PSN Store!</p>
                            </dd>
                        </dl>
                    </div>
                    <div className={Styles.product_recommend_wrap}>
                        <div className={Styles.caption}>
                            Produtos recomendados
                        </div>
                        <div className={Styles.product_recommend_list}>
                            <div className={Styles.product_recommend_item}>
                                <div className={Styles.img_wrap}>
                                    <img src={getImg('page2/product_small1.png')} alt=""/>
                                </div>
                                <div className={Styles.product_title}>
                                    Playstation R$ 60 - Gift Ca...
                                </div>
                                <div style={{padding: "15px"}}>
                                    <div className={Styles.icon_group}>
                                        <img src={getImg('page2/icon1.png')} alt=""/>
                                        <img src={getImg('page2/icon2.png')} alt=""/>
                                    </div>
                                    <button>R$ 60,00</button>
                                </div>
                            </div>
                            <div className={Styles.product_recommend_item}>
                                <div className={Styles.img_wrap}>
                                    <img src={getImg('page2/product_small2.png')} alt=""/>
                                </div>
                                <div className={Styles.product_title}>
                                    Playstation R$ 60 - Gift Ca...
                                </div>
                                <div style={{padding: "15px"}}>
                                    <div className={Styles.icon_group}>
                                        <img src={getImg('page2/icon1.png')} alt=""/>
                                        <img src={getImg('page2/icon2.png')} alt=""/>
                                    </div>
                                    <button>R$ 30,00</button>
                                </div>
                            </div>
                            <div className={Styles.product_recommend_item}>
                                <div className={Styles.img_wrap}>
                                    <img src={getImg('page2/product_small3.png')} alt=""/>
                                </div>
                                <div className={Styles.product_title}>
                                    Playstation R$ 30 - Gift Ca...
                                </div>
                                <div style={{padding: "15px"}}>
                                    <div className={Styles.icon_group}>
                                        <img src={getImg('page2/icon1.png')} alt=""/>
                                        <img src={getImg('page2/icon2.png')} alt=""/>
                                    </div>
                                    <button>R$ 199,90</button>
                                </div>
                            </div>
                            <div className={Styles.product_recommend_item}>
                                <div className={Styles.img_wrap}>
                                    <img src={getImg('page2/product_small4.png')} alt=""/>
                                </div>
                                <div className={Styles.product_title}>
                                     PS Plus 12 meses - Gift Car...
                                </div>
                                <div style={{padding: "15px"}}>
                                    <div className={Styles.icon_group}>
                                        <img src={getImg('page2/icon1.png')} alt=""/>
                                        <img src={getImg('page2/icon2.png')} alt=""/>
                                    </div>
                                    <button>R$ 85,90</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Page2;
