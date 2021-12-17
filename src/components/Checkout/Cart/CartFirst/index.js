import React from "react";

import { getImg } from "../../../../utils/Helper";
import Styles from './CartFirst.module.scss';

class CartFirst extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      lists: [
        { imgname: 'Rectangle 41.png', name: "Minecraft - Código Digital", qtd: 1, price: 'R$ 99,99' },
        { imgname: 'Rectangle 42.png', name: "Spotify Premiun -Assinatura 3meses", qtd: 1, price: 'R$ 50,00' },
        { imgname: 'Rectangle 43.png', name: "800 Robux - Roblox", qtd: 1, price: 'R$ 80,00' },
      ]
    };
  }

  increament = num => {
    const updatedItems = this.state.lists.map((item, idx) => {
      if (idx == num) {
        return {
          ...item,
          qtd: Number(item.qtd) + 1
        };
      } else {
        return item;
      }
    });
    this.setState({
      lists: updatedItems
    });
  }

  decrease = num => {
    const updatedItems = this.state.lists.map((item, idx) => {
      if (idx == num) {
        return {
          ...item,
          qtd: (item.qtd > 0 ? item.qtd - 1 : 0)
        };

      } else {
        return item;
      }
    });
    this.setState({
      lists: updatedItems
    });
  }

  remove = num => {
    const updatedItems = this.state.lists.map((item, idx) => {
      if (idx == num) {
        return {
          ...item,
          qtd: 0
        };
      } else {
        return item;
      }
    });
    this.setState({
      lists: updatedItems
    });
  }
  setInputValue = (num, value) => {
    let res = Number(value);
    if (isNaN(res) == false) {
      const updatedItems = this.state.lists.map((item, idx) => {
        if (idx == num) {
          return {
            ...item,
            qtd: value
          };
        } else {
          return item;
        }
      });
      this.setState({
        lists: updatedItems
      });
    }
  }

  render() {
    return (
      <div className={Styles.config_panel_left}>
        {this.state.lists.map((item, idx) => (
          <>
            <div className={Styles.left_panel_content}>
              <img src={getImg('checkout/' + item.imgname)} />
              <p className={Styles.left_panel_content_p1}>{item.name}</p>
              <div className={Styles.left_panel_content_div1}>
                <button onClick={() => this.decrease(idx)} className={Styles.left_panel_content_sub}>-</button>
                <input type="text" className={Styles.left_panel_content_button} onChange={(e) => this.setInputValue(idx, e.target.value)} value={item.qtd} />
                <button onClick={() => this.increament(idx)} className={Styles.left_panel_content_add}>+</button>
                <button onClick={() => this.remove(idx)} style={{ backgroundColor: 'transparent', border: 'none' }} >
                  <p className={Styles.left_panel_content_bottom} style={{ color: 'red', fontSize: '13px' }}>Remover</p>
                </button>
              </div>

              <p className={Styles.left_panel_content_p2}>{item.price}</p>
            </div>
          </>
        ))}
      </div>
    )
  }
}

export default CartFirst