import React, { Component } from "react";
import Styles from './Finalization.module.scss';
import Finallist from "./Finallist";

class Finalization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div className={Styles.mydata_page_wrap}>
        <div className={Styles.config_group}>
          <div className={Styles.config_top}>
            <p className={Styles.config_top_title}>Agradecemos seu pedido!</p>
            <p className={Styles.config_top_content}>Você também pode conferir seus códigos pelo email ou na aba
              <p></p><span>MINHAS CHAVES</span> em Minha Conta</p>
          </div>
          <div className={Styles.config_data}>
            <div className={Styles.config_data1}>
              <p>Nº Pedido</p>
              <p className={Styles.config_data1_p1} >Forma de Pagamento</p>
              <p className={Styles.config_data1_p2} >Data</p>
            </div>
            <div className={Styles.config_data2}>
              <p>01543</p>
              <p className={Styles.config_data2_p1}>Pix</p>
              <p className={Styles.config_data2_p2}>13/12/2021</p>
            </div>
          </div>
          <div className={Styles.config_header}>
            <p className={Styles.config_header_p1}>PRODUTO</p>
            <p className={Styles.config_header_p2}>QTD.</p>
            <p className={Styles.config_header_p3}>VALOR</p>
            <p className={Styles.config_header_p4}>CÓDIGO</p>
          </div>
          <div className={Styles.config_panel}>
            <Finallist />
          </div>
          <div className={Styles.config_bottom}>
            <button className={Styles.config_bottom_button}>Voltar a página inicial</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Finalization;