import React, { useState } from "react";

import { getImg } from "../../../utils/Helper";
import Styles from './Payment.module.scss';
import styled from "styled-components";
import Dropdown from 'react-dropdown';

const options = [];

const CatalogStyle = styled.div`
                .Dropdown-root {
                    border-radius: 25px;
										height: 46px;
    
                    .Dropdown-control {
                        display:flex;
                        padding: 6px 9px;
                        background: transparent;
                        border: none;
                        background: #01191E;
                        border-radius: 10px;
												max-height: 46px;
        
        
            
                        .Dropdown-arrow-wrapper {
                            margin-left: 6px;
                            align-self: center;
            
                            i {
                                font-size: 25px;
                            }
                        }
                    }

                    .Dropdown-menu {
                        border-radius: 4px;
                    }
        
                    .Dropdown-placeholder  {
                        width: 100%;
                        font-size: 22px;
                    }
                }
    }`;

class Payment extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		return (
			<CatalogStyle>
				<div className={Styles.payment_wrap}>
					<div className={Styles.row}>
						<div className={Styles.payment_first_container}>
							<div className={Styles.row}>
								<div className={Styles.col12}>
									<div className={Styles.form_group} >
										<div className={Styles.label_group}>
											<label>Número do Cartão</label>
										</div>
										<input type="text" name="card_number" id="card_number" />
									</div>
								</div>
							</div>
							<div className={Styles.row}>
								<div className={Styles.col12}>
									<div className={Styles.form_group} >
										<div className={Styles.label_group}>
											<label>Nome impresso no cartão</label>
										</div>
										<input type="text" name="card_name" id="card_name" />
									</div>
								</div>
							</div>
							<div className={Styles.rowMar0}>
								<div className={Styles.col12}>
									<div className={Styles.form_group} >
										<div className={Styles.label_group}>
											<label>CPF</label>
										</div>
										<input type="text" name="cpf" id="cpf" />
									</div>
								</div>
							</div>
						</div>
						<div className={Styles.payment_second_container}>
							<img className={Styles.cartImg} src={getImg('checkout/cart_img.png')} alt="" />
						</div>
					</div>
					<div className={Styles.rowMar0}>
						<div className={Styles.payment_first_container}>
							<div className={Styles.rowMar0}>
								<div className={Styles.col4}>
									<div className={Styles.form_group} >
										<div className={Styles.label_group}>
											<label>Data de Expiração</label>
										</div>
									</div>
								</div>
								<div className={Styles.col4}>
									<div className={Styles.form_group} >
										<div className={Styles.label_group}>
											<label></label>
										</div>
									</div>
								</div>
								<div className={Styles.col4}>
									<div className={Styles.form_group} >
										<div className={Styles.label_group}>
											<label>CVV</label>
										</div>
									</div>
								</div>
							</div>
							<div className={Styles.row}>
								<div className={Styles.col4}>
									<div className={Styles.form_group} >
										<Dropdown arrowClosed={<i className="fa fa-angle-down" />} arrowOpen={<i className="fa fa-angle-up" />} options={options} onChange={this.props._onSelect} value={'Mês'} placeholder={options[0]} className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow} />
									</div>
								</div>
								<div className={Styles.col4}>
									<div className={Styles.form_group} >
										<Dropdown arrowClosed={<i className="fa fa-angle-down" />} arrowOpen={<i className="fa fa-angle-up" />} options={options} onChange={this.props._onSelect} value={'Ano'} placeholder={options[0]} className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow} />
									</div>
								</div>
								<div className={Styles.col4}>
									<div className={Styles.form_group} >
										<input type="text" name="cpf" id="cpf" />
									</div>
								</div>
							</div>
						</div>
						<div className={Styles.payment_second_container}>
							<button className={Styles.make_payment} onClick={() => this.props.submitClick(this.props.pagenum)} name="make_payment" id="make_payment">Realizar Pagamento</button>
						</div>
					</div>

				</div>
			</CatalogStyle>
		)
	}
}

export default Payment



