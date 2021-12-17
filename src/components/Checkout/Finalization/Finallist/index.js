import React from "react";

import { getImg } from "../../../../utils/Helper";
import Styles from './Finallist.module.scss';

class Finallist extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      lists: [
        { imgname: ['Rectangle 41.png'], name: "Minecraft - Código Digital", qtd: 1, price: 'R$ 99,99' },
        { imgname: ['Rectangle 42.png'], name: "Spotify Premiun -Assinatura 3meses", qtd: 1, price: 'R$ 50,00' },
        { imgname: ['Rectangle 43.png'], name: "800 Robux - Roblox", qtd: 1, price: 'R$ 80,00' }
      ]
    };

  }


  render() {
    return (
      <div className={Styles.config_panel_left}>
        {this.state.lists.map((item, idx) => (

          <div className={Styles.left_panel_content}>
            <>
              <p><img src={getImg('checkout/' + item.imgname)} /></p>
              <p className={Styles.left_panel_content_p1}>{item.name}</p>
              <p className={Styles.left_panel_content_number}>{item.qtd}</p>
              <p className={Styles.left_panel_content_p2}>{item.price}</p>
              <button className={Styles.left_panel_content_button}>Ver código</button>
            </>
          </div>
        ))}

      </div>
    )
  }
}

export default Finallist