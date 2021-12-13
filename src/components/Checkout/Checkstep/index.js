import React from "react";

import { getImg } from "../../../utils/Helper";
import Styles from './Checkstep.module.scss';

class Checkstep extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			steps: [
				{ icon: 1, name: "Carrinho", className: Styles.stepImg_1 },
				{ icon: 2, name: "Login", className: Styles.stepImg_2 },
				{ icon: 3, name: "Pagamento", className: Styles.stepImg_3 },
				{ icon: 4, name: "Finalização", className: Styles.stepImg_4 }
			]
		};
	}

	render() {
		return (
			<div className={Styles.checkout_menu_wrap}>
				<div className={Styles.caption}>
					CHECKOUT
				</div>
				<center>
					<ul className={Styles.progressbar}>
						{this.state.steps.map((item, idx) => (
							<>
								<li className={(idx <= this.props.activeLink ? Styles.active : '')} onClick={() => this.props.handleClick(idx)}>
									<center>{item.name}</center>
									{this.props.activeLink >= idx && <img className={Styles.stepImg} src={getImg('checkout/step' + item.icon + '.png')} alt="" />}
									{this.props.activeLink < idx && <img className={Styles.stepImg} src={getImg('checkout/step_h' + item.icon + '.png')} alt="" />}
								</li>
							</>
						))}
					</ul>
				</center>
			</div>
		)
	}
}

export default Checkstep