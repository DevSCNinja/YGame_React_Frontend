import React from "react";

import { getImg } from "../../../../utils/Helper";
import Styles from './CartFourth.module.scss';
import Loginmodal from '../../Loginmodal';


class CartFourth extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputvalue: ''
    };

  }

  setInputValue = (value) => {
    this.setState({
      inputvalue: value
    })
  }

  clickcountadd = () => {
    if (this.state.inputvalue == "YIYI2022") {

      this.setState({
        couponState: 2,
      })
    } else if (this.state.inputvalue == "") {
      this.setState({
        couponState: 0,
      })
    } else {
      this.setState({
        couponState: 1,
      })
    }

  }

  render() {
    return (
      <div className={Styles.config_panel_right}>
        <div className={Styles.right_panel_content}>
          {this.state.couponState == 2 &&
            <>
              <div className={Styles.right_panel_content_header} style={{ marginTop: '20px' }}>
                <p>Desconto</p>
                <p>R$ 29,99</p>
              </div>
              <div className={Styles.right_panel_content_header} >
                <p>Total</p>
                <p>R$ 200,00</p>
              </div>
            </>}
          {this.state.couponState != 2 &&
            <div style={{ marginTop: '20px' }} className={Styles.right_panel_content_header} >
              <p>Total</p>
              <p>R$ 200,00</p>
            </div>
          }
          <div className={Styles.label_group1}>
            <label style={{ fontSize: "14px" }}>Tem um cupom de desconto?</label>
          </div>
          <div className={Styles.right_panel_content_label2}>
            <div className={Styles.form_group} >
              <div className={Styles.content_button}>
                <input className={Styles.content_input} type="text" name="email" id="email" value={this.state.inputvalue} onChange={(e) => this.setInputValue(e.target.value)} defaultValue="YIYI2022" />
                <button onClick={() => this.clickcountadd()} type="button" className={Styles.btn1}>Aplicar</button>
              </div>
            </div>
          </div>
          <div className={Styles.label_group2} style={{ textAlign: 'right' }}>
            {this.state.couponState == 2 && <label style={{ fontSize: "12px", color: '#34A853' }}>Cupom aplicado com sucesso!</label>}
            {this.state.couponState == 1 && <label style={{ fontSize: "12px", color: '#DB2B2F' }}>Cupom inválido :(</label>}
            {this.state.couponState == 0 && <></>}
          </div>
          <button type="button" onClick={() => this.props.submitClick(this.props.pagenum)} className={Styles.btn2}>Finalizar Compra</button>
        </div>
        {this.props.stateModal && <Loginmodal submitClick={this.props.submitClick} pagenum={this.props.pagenum} actModalOpen={this.props.stateModal} closeModal={this.props.closeModal} />}
      </div>

    )
  }
}

export default CartFourth