import React from "react";
import Styles from './Avatarmodal.module.scss';
import Button1 from '../Button1';
import { getImg } from "../../../utils/Helper";
import { Avatar } from "@material-ui/core";

class Avatarmodal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const showHideClassName = this.props.show ? " display-block" : "modal display-none";

        return (
            <div className={Styles.modal + showHideClassName}> 
                <div className={Styles.avatarmodal_wrap}>
                    <button className={Styles.modal_close} onClick={this.props.handleClose}>
                    <img src={getImg('page1/close.png')} />
                    </button>
                    <dl>
                        <dt>Alterar imagem de perfil</dt>
                        <dd>Deixei seu cantinho em nosso site com a sua cara</dd>
                        <div className={Styles.avatar_wrap}>
                            <img class="img-responsive" src={getImg('page1/avatar_large_circle.png')} />
                        </div>
                    </dl>
                    <div style={{marginBottom: "20px", display: "flex", justifyContent: "space-between"}}>
                        <Button1 buttontext="Excluir" background="#DB2B2F" width="152"/>
                        <Button1 buttontext="Fazer Upload" background="#34A853" width="324"/>
                    </div>
                    <div>
                         <Button1 buttontext="Salvar Alterações" background="#F15A24" />
                    </div>
                </div>
            </div>
        )
    }
}

  export default Avatarmodal;