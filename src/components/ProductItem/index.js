import React from "react";

import { getImg } from "../../utils/Helper";
import Styles from './ProductItem.module.scss';

class ProductItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className={Styles.product_recommend_item}>
        <div className={Styles.img_wrap}>
          <img src={getImg('product/' + this.props.item.imgname)} alt="" />
        </div>
        <div className={Styles.product_title}>
          {this.props.item.name}
        </div>
        <div style={{ padding: "15px" }}>
          <div className={Styles.icon_group}>
            <img src={getImg('product/' + this.props.item.icon1)} alt="" />
            <img src={getImg('product/' + this.props.item.icon2)} alt="" />
          </div>
          <button>{this.props.item.price}</button>
        </div>
      </div>
    )
  }
}

export default ProductItem