import React, { useState } from "react";

import Header from "../../components/Home/Header";
import Footer from "../../components/Home/Footer";

import { getImg } from "../../utils/Helper";
import Styles from './Search.module.scss';
import styled from "styled-components";
import Sort from "../../components/MyPage/Sort";
import Dropdown from 'react-dropdown';
import ProductItem from "../../components/ProductItem";
import Cart from "../../components/Home/Cart";

export default function Search(props) {
	const options = [];
	const [showcart, setShowCart] = useState(false);
	const myItems = [
		{ imgname: 'product_small1.png', name: 'Playstation R$ 60 - Gift Ca...', icon1: 'icon1.png', icon2: 'icon2.png', price: 'R$ 60,00' },
		{ imgname: 'product_small1.png', name: 'Playstation R$ 60 - Gift Ca...', icon1: 'icon1.png', icon2: 'icon2.png', price: 'R$ 60,00' },
		{ imgname: 'product_small1.png', name: 'Playstation R$ 60 - Gift Ca...', icon1: 'icon1.png', icon2: 'icon2.png', price: 'R$ 60,00' },
		{ imgname: 'product_small1.png', name: 'Playstation R$ 60 - Gift Ca...', icon1: 'icon1.png', icon2: 'icon2.png', price: 'R$ 60,00' },
		{ imgname: 'product_small1.png', name: 'Playstation R$ 60 - Gift Ca...', icon1: 'icon1.png', icon2: 'icon2.png', price: 'R$ 60,00' },
		{ imgname: 'product_small1.png', name: 'Playstation R$ 60 - Gift Ca...', icon1: 'icon1.png', icon2: 'icon2.png', price: 'R$ 60,00' },
		{ imgname: 'product_small1.png', name: 'Playstation R$ 60 - Gift Ca...', icon1: 'icon1.png', icon2: 'icon2.png', price: 'R$ 60,00' },
		{ imgname: 'product_small1.png', name: 'Playstation R$ 60 - Gift Ca...', icon1: 'icon1.png', icon2: 'icon2.png', price: 'R$ 60,00' },
		{ imgname: 'product_small1.png', name: 'Playstation R$ 60 - Gift Ca...', icon1: 'icon1.png', icon2: 'icon2.png', price: 'R$ 60,00' },
		{ imgname: 'product_small1.png', name: 'Playstation R$ 60 - Gift Ca...', icon1: 'icon1.png', icon2: 'icon2.png', price: 'R$ 60,00' }
	];


	const handleShowCart = () => {
		// this.setState({ showCart: !this.state.showCart });
		setShowCart((showcart === true) ? false : true);
	}

	const handleHideCart = () => {
		// this.setState({ showCart: false });
		setShowCart(false);
	}

	const CatalogStyle = styled.div`
        .filter_list{
            display: flex;
            justify-content: space-between;
            width: 100%;

            .filter_item {
                margin: 10px 0;
                .Dropdown-root {
                    width: 238px;
                    border-radius: 25px;
    
                    .Dropdown-control {
                        display:flex;
                        padding: 9px 28px;
                        background: transparent;
                        border: none;
                        background: #0D3840;
                        border-radius: 25px;
        
        
            
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
            }
        }   
    }`;

	return (
		<CatalogStyle>
			<div className={Styles.product_catalog_page} >
				<Cart isOpen={showcart} handleShowCart={() => handleShowCart()} handleHideCart={() => handleHideCart()} />
				<div className={Styles.container}>
					<Header handleShowCart={() => handleShowCart()} />
					<div className={Styles.product_catalog_container}>
						<div className={Styles.product_catalog_wrap}>
							<div className={Styles.catalog_title}>Catálogo de Produtos</div>
							<div className={Styles.filter_wrap}>
								<div className={Styles.filter_header}>
									<div className={Styles.header_left}>
										<ul>
											<li>Playstation&nbsp;&nbsp;<i class="fa fa-times"></i></li>
											<li>Brasil&nbsp;&nbsp;<i class="fa fa-times"></i></li>
											<li>Limpar Filtros</li>
										</ul>
									</div>
									<div className={Styles.header_right}>
										<Sort options={[]} />
									</div>
								</div>
								<div className="filter_list">
									<div className="filter_item">
										<Dropdown arrowClosed={<i className="fa fa-angle-down" />} arrowOpen={<i className="fa fa-angle-up" />} options={options} onChange={props._onSelect} value={'Tipo'} placeholder={options[0]} className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow} />
									</div>
									<div className="filter_item">
										<Dropdown arrowClosed={<i className="fa fa-angle-down" />} arrowOpen={<i className="fa fa-angle-up" />} options={options} onChange={props._onSelect} value={'Marca'} placeholder={options[0]} className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow} />
									</div>
									<div className="filter_item">
										<Dropdown arrowClosed={<i className="fa fa-angle-down" />} arrowOpen={<i className="fa fa-angle-up" />} options={options} onChange={props._onSelect} value={'Plataforma'} placeholder={options[0]} className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow} />
									</div>
									<div className="filter_item">
										<Dropdown arrowClosed={<i className="fa fa-angle-down" />} arrowOpen={<i className="fa fa-angle-up" />} options={options} onChange={props._onSelect} value={'País'} placeholder={options[0]} className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow} />
									</div>
								</div>
							</div>
							<div className={Styles.product_recommend_list}>
								{myItems.map((item) => (
									<ProductItem item={item} />
								))}
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</CatalogStyle>
	)
}
