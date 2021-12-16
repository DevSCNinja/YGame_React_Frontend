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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { getImg } from "../../../utils/Helper";

const CatalogStyle = styled.div`
	.MuiAccordionSummary-content {
		margin: 20px 0;
	}

	svg {
		font-size:45px;
	}
	.MuiAccordionSummary-content.Mui-expanded {
		margin-bottom:0px;
	}
	.MuiTypography-root {
			font-family: Poppins;
			font-size: 18px;
			font-style: normal;
			font-weight: 500;
			line-height: 27px;
			letter-spacing: 0em;
			text-align: left;

	}
	textarea {
		margin-top:20px;
		height: 200px;
		width: 628px;
		left: 20px;
		top: 262px;
		border-radius: 5px;
		background: #0D3840;
		font-family: Poppins;
		font-size: 14px;
		font-style: normal;
		font-weight: 700;
		line-height: 21px;
		letter-spacing: 0em;
		text-align: left;
		padding-top:12px;
		padding-left:16px;
		border:none;
		outline:none;
	}
	.MuiAccordion-root {
		background-color :transparent;
		// padding:0px;
		.MuiAccordionSummary-root {
			padding :0px; 
			.css-ahj2mt-MuiTypography-root {
				font-family: Poppins;
				font-size: 32px;
				font-style: normal;
				font-weight: 600;
				line-height: 48px;
				letter-spacing: 0em;
				text-align: left;
			}
		}
		.MuiAccordionDetails-root {
					padding :0 0 20px 0px;
		}
	}
  
}`;

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count1: 1,
			count2: 1,
			count3: 1,
			type: 0
		};
	}

	setType = (num) => {
		this.setState({
			type: num
		})
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
									<div className={Styles.right_panel_content_label} onClick={() => this.setType(0)}>
										{this.state.type == 0 && <div className={Styles.right_panel_content_label_first_active}></div>}
										{this.state.type != 0 && <div className={Styles.right_panel_content_label_first}></div>}
										<div className={Styles.right_panel_content_label_second}>
											<p>Pix</p>
											<img src={getImg('checkout/Payment Methods.png')} />
										</div>
									</div>
									<div className={Styles.right_panel_content_label} onClick={() => this.setType(1)}>
										{this.state.type == 1 && <div className={Styles.right_panel_content_label_first_active}></div>}
										{this.state.type != 1 && <div className={Styles.right_panel_content_label_first}></div>}
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
									<div className={Styles.right_panel_content_label} onClick={() => this.setType(2)}>
										{this.state.type == 2 && <div className={Styles.right_panel_content_label_first_active}></div>}
										{this.state.type != 2 && <div className={Styles.right_panel_content_label_first}></div>}
										<div className={Styles.right_panel_content_label_second}>
											<p>Boleto Express</p>
											<img src={getImg('checkout/list5.png')} />
										</div>
									</div>
									<div className={Styles.right_panel_content_label} onClick={() => this.setType(3)}>
										{this.state.type == 3 && <div className={Styles.right_panel_content_label_first_active}></div>}
										{this.state.type != 3 && <div className={Styles.right_panel_content_label_first}></div>}

										<div className={Styles.right_panel_content_label_second}>
											<p>Depósito Express</p>
											<img src={getImg('checkout/list6.png')} />
										</div>
									</div>
									<div className={Styles.right_panel_content_label} onClick={() => this.setType(4)}>
										{this.state.type == 4 && <div className={Styles.right_panel_content_label_first_active}></div>}
										{this.state.type != 4 && <div className={Styles.right_panel_content_label_first}></div>}
										<div className={Styles.right_panel_content_label_second}>
											<p>PayPal</p>
											<img src={getImg('checkout/picture7.png')} />
										</div>
									</div>
									<div className={Styles.right_panel_content_label} onClick={() => this.setType(5)}>
										{this.state.type == 5 && <div className={Styles.right_panel_content_label_first_active}></div>}
										{this.state.type != 5 && <div className={Styles.right_panel_content_label_first}></div>}
										<div className={Styles.right_panel_content_label_second}>
											<p>PicPay</p>
											<img src={getImg('checkout/picture8.png')} />
										</div>
									</div>
									<div className={Styles.right_panel_content_label} onClick={() => this.setType(6)}>
										{this.state.type == 6 && <div className={Styles.right_panel_content_label_first_active}></div>}
										{this.state.type != 6 && <div className={Styles.right_panel_content_label_first}></div>}
										<div className={Styles.right_panel_content_label_second}>
											<p>Ame</p>
											<img src={getImg('checkout/picture9.png')} />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={Styles.config_panel} style={{ marginTop: '20px' }}>
							<div className={Styles.config_panel_left} style={{ marginTop: '-69px', paddingRight: '20px', width: '658px' }}>
								<Accordion className={Styles.my_accordion}>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header"
									>
										<Typography>Esta compra é um presente?</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											Nós da YiYi Games te ajudamos a entregar o presente da melhor
											forma possível. Basta apenas inserir o Email do presenteado abaixo
											e ele receberá no email o código com uma mensagem especial
											escrita por você!
											<input className={Styles.accordion_input} placeholder="Insira aqui o email do presenteado"></input>
											<textarea placeholder="Insira aqui sua mensagem"></textarea>
										</Typography>
									</AccordionDetails>
								</Accordion>
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
												<input type="text" name="email" id="email" defaultValue="YIYI2022" />
												<button type="button" className={Styles.btn1}>Aplicar</button>
											</div>
										</div>
									</div>
									<div className={Styles.label_group2} style={{ textAlign: 'right' }}>
										<label style={{ fontSize: "12px", color: '#34A853' }}>Cupom aplicado com sucesso!</label>
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