import React, { Component } from "react";
// import { useState } from 'react';
import Styles from './Cart.module.scss';
import styled from 'styled-components';
import Dropdown from 'react-dropdown';

import Loginmodal from '../Loginmodal';

import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

import { getImg } from "../../../utils/Helper";

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count1: 1,
			count2: 1,
			count3: 1
		};
	}

	increament1 = () => {
		this.setState({
			count1: Number(this.state.count1) + 1
		})
	}
	increament2 = () => {
		this.setState({
			count2: Number(this.state.count2) + 1
		})
	}
	increament3 = () => {
		this.setState({
			count3: Number(this.state.count3) + 1
		})
	}

	handleChange1 = (count) => {
		this.setState({
			count1: count
		})
	}

	handleChange2 = (count) => {
		this.setState({
			count2: count
		})
	}

	handleChange3 = (count) => {
		this.setState({
			count3: count
		})
	}

	decrease1 = () => {
		this.setState({
			count1: this.state.count1 - 1
		})
	}
	decrease2 = () => {
		this.setState({
			count2: this.state.count2 - 1
		})
	}
	decrease3 = () => {
		this.setState({
			count3: this.state.count3 - 1
		})
	}

	remove1 = () => {
		this.setState({
			count1: 0
		})
	}
	remove2 = () => {
		this.setState({
			count2: 0
		})
	}
	remove3 = () => {
		this.setState({
			count3: 0
		})
	}
	render() {
		// const [open, setOpen] = useState(false);
		const options = [];

		const CatalogStyle = styled.div`
        .filter_list{
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin:20px 0px;

            .filter_item {
                // margin: 10px 0;
                .Dropdown-root {
                    // width: 238px;
                    border-radius: 25px;
    
                    .Dropdown-control {
                        display:flex;
                        // padding: 9px 28px;
                        background: transparent;
                        border: none;
                        border-radius: 25px;
                        width : 604px;
                        padding : 0;
                        .Dropdown-placeholder {
                            font-size : 32px;
                            width : 100%;
                        }
                        .Dropdown-arrow-wrapper {
                            margin-left: 6px;
                            align-self: center;
            
                            i {
                                font-size: 45px;
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
            }
        }
         }`;

		return (
			< CatalogStyle>
				<div className={Styles.mydata_page_wrap}>
					<div className={Styles.config_group}>
						<div className={Styles.config_header} style={{ display: 'flex' }} >
							<p style={{ marginLeft: '31px' }}>PRODUTO</p>
							<p style={{ marginLeft: '330px' }}>QTD.</p>
							<p style={{ marginLeft: '70px' }}>VALOR</p>
							<p style={{ marginLeft: '105px' }}>FORMA DE PAGAMENTO</p>
						</div>
						<div className={Styles.config_panel}>
							<div className={Styles.config_panel_left}>
								<div className={Styles.left_panel_content}>
									<img src={getImg('checkout/Rectangle 41.png')} />
									<p className={Styles.left_panel_content_p1}>Minecraft - Código Digital</p>
									<div className={Styles.left_panel_content_div1}>
										<button onClick={this.decrease1} className={Styles.left_panel_content_sub}>-</button>
										<input type="text" className={Styles.left_panel_content_button} value={this.state.count1} onChange={(e) => this.handleChange1(e.target.value)} />
										<button onClick={this.increament1} className={Styles.left_panel_content_add}>+</button>
										<button style={{ backgroundColor: 'transparent', border: 'none' }} onClick={this.remove1}>
											<p className={Styles.left_panel_content_bottom} style={{ color: 'red', fontSize: '13px' }}>Remover</p>
										</button>
									</div>

									<p className={Styles.left_panel_content_p2}>R$ 99,99</p>
								</div>
								<div className={Styles.left_panel_content}>
									<img src={getImg('checkout/Rectangle 42.png')} />
									<p className={Styles.left_panel_content_p1}>Spotify Premiun -Assinatura 3meses</p>
									<div className={Styles.left_panel_content_div1}>
										<button onClick={this.decrease2} className={Styles.left_panel_content_sub}>-</button>
										<input type="text" className={Styles.left_panel_content_button} value={this.state.count2} onChange={(e) => this.handleChange2(e.target.value)} />
										<button onClick={this.increament2} className={Styles.left_panel_content_add}>+</button>
										<button style={{ backgroundColor: 'transparent', border: 'none' }} onClick={this.remove2}>
											<p className={Styles.left_panel_content_bottom} style={{ color: 'red', fontSize: '13px' }}>Remover</p>
										</button>
									</div>

									<p className={Styles.left_panel_content_p2}>R$ 50,00</p>
								</div>
								<div className={Styles.left_panel_content} style={{ border: 'none' }}>
									<img src={getImg('checkout/Rectangle 43.png')} />
									<p className={Styles.left_panel_content_p1}>800 Robux - Roblox</p>
									<div className={Styles.left_panel_content_div1}>
										<button onClick={this.decrease3} className={Styles.left_panel_content_sub}>-</button>
										<input type="text" className={Styles.left_panel_content_button} value={this.state.count3} onChange={(e) => this.handleChange3(e.target.value)} />
										<button onClick={this.increament3} className={Styles.left_panel_content_add}>+</button>
										<button style={{ backgroundColor: 'transparent', border: 'none' }} onClick={this.remove3}>
											<p className={Styles.left_panel_content_bottom} style={{ color: 'red', fontSize: '13px' }}>Remover</p>
										</button>
									</div>

									<p className={Styles.left_panel_content_p2}>R$ 80,00</p>
								</div>
							</div>
							<div className={Styles.config_panel_right}>
								<div className={Styles.right_panel_content}>
									<div className={Styles.right_panel_content_label}>
										<div className={Styles.right_panel_content_label_first}></div>
										<div className={Styles.right_panel_content_label_second}>
											<p>Pix</p>
											<img src={getImg('checkout/Payment Methods.png')} />
										</div>
									</div>
									<div className={Styles.right_panel_content_label}>
										<div className={Styles.right_panel_content_label_first}></div>
										<div className={Styles.right_panel_content_label_second}>
											<p>Cartão de Crédito</p>
											<div className={Styles.image_group}>
												<img src={getImg('checkout/Payment Methods1.png')} />
												<img src={getImg('checkout/Payment Methods2.png')} />
												<img src={getImg('checkout/Payment Methods3.png')} />
												<img src={getImg('checkout/Payment Methods4.png')} />
											</div>
										</div>
									</div>
									<div className={Styles.right_panel_content_label}>
										<div className={Styles.right_panel_content_label_first}></div>
										<div className={Styles.right_panel_content_label_second}>
											<p>Boleto Express</p>
											<img src={getImg('checkout/list5.png')} />
										</div>
									</div>
									<div className={Styles.right_panel_content_label}>
										<div className={Styles.right_panel_content_label_first}></div>
										<div className={Styles.right_panel_content_label_second}>
											<p>Depósito Express</p>
											<img src={getImg('checkout/list6.png')} />
										</div>
									</div>
									<div className={Styles.right_panel_content_label}>
										<div className={Styles.right_panel_content_label_first}></div>
										<div className={Styles.right_panel_content_label_second}>
											<p>PayPal</p>
											<img src={getImg('checkout/picture7.png')} />
										</div>
									</div>
									<div className={Styles.right_panel_content_label}>
										<div className={Styles.right_panel_content_label_first}></div>
										<div className={Styles.right_panel_content_label_second}>
											<p>PicPay</p>
											<img src={getImg('checkout/picture8.png')} />
										</div>
									</div>
									<div className={Styles.right_panel_content_label}>
										<div className={Styles.right_panel_content_label_first}></div>
										<div className={Styles.right_panel_content_label_second}>
											<p>Ame</p>
											<img src={getImg('checkout/picture9.png')} />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={Styles.config_panel} style={{ marginTop: '20px' }}>
							<div className={Styles.config_panel_left} style={{ marginTop: '-69px' }}>
								<div className="filter_list">
									<div className="filter_item">
										<Dropdown arrowClosed={<i className="fa fa-angle-down" />} arrowOpen={<i className="fa fa-angle-up" />} options={options} value={'Esta compra é um presente?'} />
									</div>
								</div>
							</div>
							<div className={Styles.config_panel_right}>
								<div className={Styles.right_panel_content}>
									<div className={Styles.right_panel_content_header} style={{ marginTop: '20px' }}>
										<p>Desconto</p>
										<p>R$ 29,99</p>
									</div>
									<div className={Styles.right_panel_content_header} >
										<p>Total</p>
										<p>R$ 200,00</p>
									</div>
									<div className={Styles.label_group1}>
										<label style={{ fontSize: "14px" }}>Tem um cupom de desconto?</label>
									</div>
									<div className={Styles.right_panel_content_label2}>
										<div className={Styles.form_group} >
											<div className={Styles.content_button}>
												<input type="text" name="email" id="email" />
												<button type="button" className={Styles.btn1}>Aplicar</button>
											</div>
										</div>
									</div>
									<div className={Styles.label_group2} style={{ textAlign: 'right' }}>
										<label style={{ fontSize: "12px", color: '#34A853' }}>Tem um cupom de desconto?</label>
									</div>
									<button type="button" onClick={() => this.props.submitClick(this.props.pagenum)} className={Styles.btn2}>Finalizar Compra</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				{this.props.stateModal && <Loginmodal submitClick={this.props.submitClick} pagenum={this.props.pagenum} actModalOpen={this.props.stateModal} closeModal={this.props.closeModal} />}
			</CatalogStyle>
		);
	}
};

export default Cart;