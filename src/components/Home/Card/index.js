import React from "react";

import { getImg } from "../../../utils/Helper";
import Styles from './Card.module.scss';

import { Link } from 'react-router-dom';


class Card extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className={Styles.card}>
				<div className={Styles.cardimage} style={{ backgroundImage: `url(${getImg(this.props.cardimage)})` }}>
					<Link to='/product'><img src={getImg(this.props.cardimage)} alt="" />
						{
							this.props.discount != 0 &&
							<div className={Styles.discount}>
								{this.props.discount}
							</div>
						}</Link>
				</div>
				<div className={Styles.carddescript}>
					<p className={Styles.cardtitle}>
						{this.props.title}
					</p>
					<div className={Styles.cardicon}>
						{this.props.items.map((item) =>
							<a key={item.icon}>
								<img src={getImg(item.icon)} alt="" />
							</a>
						)}
					</div>
					<div className={Styles.pricebtn}><button>{this.props.price}</button></div>
				</div>
			</div>
		)
	}
}

export default Card