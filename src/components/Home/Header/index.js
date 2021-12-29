import React from "react";
import Signin from "../Signin";
import Signup from "../Signup";
import Menu1 from "../Menu1";
import Menu2 from "../Menu2";
import Menu3 from "../Menu3";
import { getImg } from "../../../utils/Helper";
import Styles from './../Header/Header.module.scss';
import Hamburger from 'hamburger-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderStyle = styled.div`
    .hamburger-react {
        div {
            color: #F15A24;
            font-weight: 700;
            height: 5px !important;
            border-radius: 3px;
        }
    }

    .custom-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000000;
    

        .custom-overlay-wrap {
            position: relative;
            width: 1090px;
            max-width: 1090px;
            margin: 0 auto;
            background: blue;
        }
    }

}`;

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showSignin: false,
			showMenu1: false,
			showMenu2: false,
			showMenu3: false,
			isOpen: false
		};
	}

	toogleSignin = () => {
		this.setState({ showSignin: !this.state.showSignin });
	}
	toogleMenu = () => {
		this.setState({
			showMenu1: !this.state.showMenu1,
			showMenu2: false,
			showMenu3: false
		})
	}

	showeventMenu2 = (isParent) => {
		if (isParent) {
			this.setState({
				showMenu2: true,
				showMenu3: false
			})
		}
		else {
			this.setState({
				showMenu2: false,
				showMenu3: false
			})
		}
	}
	showeventMenu3 = (isParent) => {
		if (!isParent) {
			this.setState({
				showMenu3: false
			})
		}
		else {
			this.setState({
				showMenu3: true
			})
		}
	}

	hideMenu1 = () => {
		this.setState({
			showMenu1: false,
			showMenu2: false,
			showMenu3: false
		})
	}
	hideMenu2 = () => {
		this.setState({
			showMenu2: false
		})
	}
	hideMenu3 = () => {
		this.setState({
			showMenu3: false
		})
	}

	handleHide = () => {
		this.setState({
			showSignin: false
		})
	}


	setOpen = (isOpen) => {
		this.setState({ isOpen: !isOpen });
		this.setState({
			showMenu1: !this.state.showMenu1,
			showMenu2: false,
			showMenu3: false
		})
	}

	render() {

		return (
			<HeaderStyle>
				<header className={Styles.header}>

					<div className={Styles.topmenu}>
						<div className={Styles.menu}>
							<Hamburger toggled={this.state.isOpen} size="34" toggle={() => this.setOpen(this.state.isOpen)} />
							{/* <a onClick={this.toogleMenu}><img src={getImg('home/icons/menu.png')} alt="Menu"/></a> */}
							{/* onMouseLeave={this.hideMenu1} */}
						</div>
						<Link to={'/home'}>
							<div className={Styles.logo}>
								<img src={getImg('home/logo.png')} alt="Logo" />
							</div>
						</Link>
						<div className={Styles.iconinputcontainer}>
							<input className={Styles.iconinput} type="text" placeholder="O que procura, jovem padawan?" />
							<Link to='/search'>
								<div className={Styles.iconcontainer}>
									<div className={Styles.iconsearch}></div>
								</div>
							</Link>
						</div>
						<div className={Styles.userinfo}>
							<a className={Styles.userimage} onClick={this.toogleSignin}>
								{localStorage.getItem('login') == 'true' ?
									<img src={getImg('home/users/lima.png')} alt="LIMA" /> :
									<img src={getImg('home/icons/user-default.png')} alt="" />
								}
							</a>
							<div className={Styles.username}>
								<p>Minha Conta</p>
							</div>
							<div className={Styles.usercart}>
								<a onClick={this.props.handleShowCart}><img src={getImg('home/icons/cart.png')} alt="User" /></a>
								<span className={Styles.productcount}>1</span>
							</div>
							{this.state.showSignin && localStorage.getItem('login') === 'false' && <Signin handleHide={this.handleHide} />}
							{this.state.showSignin && localStorage.getItem('login') === 'true' && <Signup handleHide={this.handleHide} />}
						</div>
					</div>
				</header>
				<div className="custom-overlay" style={{ "display": this.state.showMenu1 ? "block" : "none" }} onClick={() => this.setOpen(this.state.isOpen)}>
					<div className="custom-overlay-wrap">
						<div className={Styles.menucontent} >
							{
								this.state.showMenu1 &&
								<Menu1
									handleIconShow={() => this.setOpen(this.state.isOpen)}
									menuclass="first"
									items={[
										{ isActive: false, isParent: false, text: 'Black Friday' },
										{ isActive: true, isParent: true, text: 'Consoles' },
										{ isActive: false, isParent: true, text: 'Computador' },
										{ isActive: false, isParent: true, text: 'Mobile' },
										{ isActive: false, isParent: true, text: 'Multiplataformas' },
										{ isActive: false, isParent: true, text: 'Serviços e Assinaturas' }
									]}
									onMouseOver={this.showeventMenu2}

								/>
							}
							{
								this.state.showMenu2 &&
								<Menu2
									menuclass="second"
									items={[
										{ isActive: true, isParent: false, text: 'Playstation' },
										{ isActive: false, isParent: true, text: 'Nintendo' },
										{ isActive: false, isParent: true, text: 'Microsoft' }
									]}
									onMouseOver={this.showeventMenu3}
								/>
							}
							{
								this.state.showMenu3 &&
								<Menu3
									menuclass="third"
									items={[
										{ isActive: false, isParent: false, text: 'Brasil' },
										{ isActive: true, isParent: false, text: 'Estados Unidos' },
										{ isActive: false, isParent: false, text: 'Hong Kong' }
									]}
								/>
							}
						</div>
					</div>
				</div>
			</HeaderStyle>
		)
	}
}

export default Header