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
				<Link to='/product' className={Styles.productLink}>
					{/* <div className={Styles.productimage} style={{ backgroundImage: `url(${getImg(this.props.productimage)})` }}> */}
					<div className={Styles.productimage}>

						<img src={getImg(this.props.productimage)} alt="" />
						{
							this.props.discount != 0 &&
							<div className={Styles.discount}>
								{this.props.discount}
							</div>
						}
					</div>
					<div className={Styles.producttext}>
						<p className={Styles.producttitle}>
							{this.props.title}
						</p>
						<div className={Styles.producticon}>
							{this.props.items.map((item) =>
								<a key={item.icon} className="not_hover">
									<img src={getImg(item.icon)} alt="" />
								</a>
							)}
						</div>
						<div className={Styles.pricebtn}><button className="not_hover">{this.props.price}</button></div>
					</div>
				</Link>
			</div >
		)
	}
}

export default Product