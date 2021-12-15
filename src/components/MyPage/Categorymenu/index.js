import React from "react";

import { getImg } from "../../../utils/Helper";
import Styles from './Categorymenu.module.scss';

class Categorymenu extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            links: [
                { icon: 1, text: "Minhas Chaves",  className: Styles.category_item },
                { icon: 2, text: "Lista de Desejos",  className: Styles.category_item },
                { icon: 3, text: "Meus Pedidos",  className: Styles.category_item },
                { icon: 4, text: "Meus Dados",  className: Styles.category_item },
            ],

            overlayOpen: false
        };
    }

    showOverlay = () =>  {
        this.setState({ overlayOpen : true });
    }

    hideOverlay = () => {
        this.setState({ overlayOpen : false });
    }

    render() {
        return (
            <div className={Styles.category_menu_wrap}>
                <div className={Styles.caption}>
                    MINHA CONTA
                </div>
                
                <div className={Styles.avatar_wrap}>
                    <div className={Styles.avatar_img_wrap}  onMouseEnter={this.showOverlay} onClick={this.props.handleShow}>
                        <img class={Styles.avatar_img} src={getImg('mypage/avatar.png')} alt=""/>
                        <div className={Styles.overlay} onMouseOut={this.hideOverlay}  style={this.state.overlayOpen ? {display : "flex"} : {display : "none"}}>
                            <img src={getImg('mypage/icon5.png')} alt="camera icon" />
                            Alterar Imagem
                        </div>
                    </div>
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
                    { this.state.links.map((item, idx) =>  (                      
                        <div className={Styles.category_item + " " + (idx == this.props.activeLink ? Styles.category_active : '')} onClick={() => this.props.handleClick(idx) }>
                            <img src={getImg('mypage/icon' + item.icon + '.png')} alt=""/>
                            <div>{item.text}</div>
                        </div>
    
                    ))}
                </div>
            </div>
        )
    }
}

export default Categorymenu