import React from "react";

import { getImg } from "../../../utils/Helper";
import Styles from './Categorymenu.module.scss';

class Categorymenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
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
                        <div>Lista de Desejos</div>
                    </div>
                    <div className={Styles.category_item}>
                        <img src={getImg('page1/icon3.png')} alt=""/>
                        <div>Meus Pedidos</div>
                    </div>
                    <div className={Styles.category_item}>
                        <img src={getImg('page1/icon4.png')} alt=""/>
                        <div>Meus Dados</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categorymenu