import React from "react";

import { getImg } from "../../../../utils/Helper";
import Styles from './CartSecond.module.scss';

class CartSecond extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      lists: [
        { name: "Pix", imgname: ['Payment Methods.png'] },
        { name: "Cartão de Crédito", imgname: ['Payment Methods1.png', 'Payment Methods2.png', 'Payment Methods3.png', 'Payment Methods4.png'] },
        { name: "Boleto Express", imgname: ['list5.png'] },
        { name: "Depósito Express", imgname: ['list6.png'] },
        { name: "PayPal", imgname: ['picture7.png'] },
        { name: "PicPay", imgname: ['picture8.png'] },
        { name: "Ame", imgname: ['picture9.png'] }
      ],
      type: 0
    };

  }

  setType = (num) => {
    this.setState({
      type: num
    })
  }

  render() {
    return (
      <div className={Styles.config_panel_right}>
        <div className={Styles.right_panel_content}>
          {this.state.lists.map((item, idx) => (
            <>
              <div className={Styles.right_panel_content_label} onClick={() => this.setType(idx)}>
                {this.state.type == idx && <div className={Styles.right_panel_content_label_first_active}></div>}
                {this.state.type != idx && <div className={Styles.right_panel_content_label_first}></div>}
                <div className={Styles.right_panel_content_label_second}>
                  <p>{item.name}</p>
                  {item.imgname.map((img) => (
                    <img src={getImg('checkout/' + img)} className={Styles.label_img} />
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    )
  }
}

export default CartSecond