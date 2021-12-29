import React from "react";

import { getImg } from "../../../utils/Helper";
import Styles from './Product.module.scss';

import { Link } from 'react-router-dom';

class Product extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className={Styles.product}>
				<div className={Styles.productimage} style={{ backgroundImage: `url(${getImg(this.props.productimage)})` }}>
					<Link to='/product'><img src={getImg(this.props.productimage)} alt="" />
						{
							this.props.discount != 0 &&
							<div className={Styles.discount}>
								{this.props.discount}
							</div>
						}</Link>
				</div>
				<div className={Styles.producttext}>
					<p className={Styles.producttitle}>
						{this.props.title}
					</p>
					<div className={Styles.producticon}>
						{this.props.items.map((item) =>
							<a key={item.icon}>
								<img src={getImg(item.icon)} alt="" />
							</a>
						)}
					</div>
					<div className={Styles.pricebtn}><button>{this.props.price}</button></div>
				</div>
			</div >
		)
	}
}

export default Product