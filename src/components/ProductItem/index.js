import React from "react";

import { getImg } from "../../utils/Helper";
import Styles from './ProductItem.module.scss';
import { Link } from 'react-router-dom';

class ProductItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className={Styles.product_recommend_item}>
        <Link to='/product'>
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
        </Link>
      </div>
    )
  }
}

export default ProductItem