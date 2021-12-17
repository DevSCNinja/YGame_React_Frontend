import React, { Component } from "react";
import Styles from './Cart.module.scss';


import CartFirst from './CartFirst';
import CartSecond from './CartSecond';
import CartThird from './CartThird';
import CartFourth from './CartFourth';




class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<>
				<div className={Styles.mydata_page_wrap}>
					<div className={Styles.config_group}>
						<div className={Styles.config_header}>
							<p className={Styles.header_p1}>PRODUTO</p>
							<p className={Styles.header_p2}>QTD.</p>
							<p className={Styles.header_p3}>VALOR</p>
							<p className={Styles.header_p4}>FORMA DE PAGAMENTO</p>
						</div>
						<div className={Styles.config_panel1}>
							<CartFirst />
							<CartSecond />
						</div>
						<div className={Styles.config_panel2}>
							<CartThird />
							<CartFourth submitClick={this.props.submitClick} pagenum={this.props.pagenum} stateModal={this.props.stateModal} closeModal={this.props.closeModal} />
						</div>
					</div>
				</div>
			</>
		);
	}
};

export default Cart;