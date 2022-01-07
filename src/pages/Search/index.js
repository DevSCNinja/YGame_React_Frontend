import React, { useState, useEffect } from "react";

import Header from "../../components/Home/Header";
import Footer from "../../components/Home/Footer";

import Styles from './Search.module.scss';
import styled from "styled-components";
import Sort from "../../components/MyPage/Sort";
import Dropdown from 'react-dropdown';
import ProductItem from "../../components/ProductItem";
import Cart from "../../components/Home/Cart";

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

export default function Search(props) {

	const typeOptions = ['type1', 'type2', 'type3'];
	const brandOptions = ['brand1', 'brand2', 'brand3'];
	const platformOptions = ['platform1', 'platform2', 'platform3'];
	const countryOptions = ['Brazil', 'USA', 'China'];

	const [filters, setFilters] = useState(['', '', '', '']);

	// const [typeOptions, setTypeOptions] = useState(['type1', 'type2', 'type3']);
	// const [brandOptions, setBrandOptions] = useState(['brand1', 'brand2', 'brand3']);
	// const [platformOptions, setPlatformOptions] = useState(['platform1', 'platform2', 'platform3']);
	// const [countryOptions, setCountryOptions] = useState(['platform1', 'platform2', 'platform3']);

	const [filterOptions, setFilterOptions] = useState(filters);
	const [filtertype, setFiltertype] = useState([0, 0, 0, 0]);
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

	const handleDropdown = (value, type) => {
		// const index = array.indexOf(value);
		// if (index > -1) {
		// 	array.splice(index, 1);
		// }
		if (filtertype[type] === 0) {
			filters[type] = value;
			filtertype[type] = 1;
			setFilterOptions([...filters]);
		} else {
			filters[type] = value;
			setFilterOptions([...filters]);
		}
	}

	const allRemove = () => {
		let array = ['', '', '', ''];
		setFilters([...array]);
		setFilterOptions([...array]);
	}

	const remove = (num) => {
		filters[num] = '';
		filtertype[num] = 0;
		setFilterOptions([...filters]);
	}

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
											{/* {filterOptions.map((filter) => { filter.length > 0 && <li>{filter}&nbsp;&nbsp;<i class="fa fa-times"></i></li> }
											)} */}
											{filterOptions[0].length > 0 && <li onClick={() => remove(0)}>{filterOptions[0]}&nbsp;&nbsp;<i class="fa fa-times"></i></li>}
											{filterOptions[1].length > 0 && <li onClick={() => remove(1)}>{filterOptions[1]}&nbsp;&nbsp;<i class="fa fa-times"></i></li>}
											{filterOptions[2].length > 0 && <li onClick={() => remove(2)}>{filterOptions[2]}&nbsp;&nbsp;<i class="fa fa-times"></i></li>}
											{filterOptions[3].length > 0 && <li onClick={() => remove(3)}>{filterOptions[3]}&nbsp;&nbsp;<i class="fa fa-times"></i></li>}
											<li onClick={allRemove}>Limpar Filtros</li>
										</ul>
									</div>
									<div className={Styles.header_right}>
										<Sort options={[]} />
									</div>
								</div>
								<div className="filter_list">
									<div className="filter_item">
										<Dropdown arrowClosed={<i className="fa fa-angle-down" />} arrowOpen={<i className="fa fa-angle-up" />} options={typeOptions} onChange={(e) => handleDropdown(e.value, 0)} value={'Tipo'} placeholder={typeOptions[0]} className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow} />
									</div>
									<div className="filter_item">
										<Dropdown arrowClosed={<i className="fa fa-angle-down" />} arrowOpen={<i className="fa fa-angle-up" />} options={brandOptions} onChange={(e) => handleDropdown(e.value, 1)} value={'Marca'} placeholder={brandOptions[0]} className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow} />
									</div>
									<div className="filter_item">
										<Dropdown arrowClosed={<i className="fa fa-angle-down" />} arrowOpen={<i className="fa fa-angle-up" />} options={platformOptions} onChange={(e) => handleDropdown(e.value, 2)} value={'Plataforma'} placeholder={platformOptions[0]} className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow} />
									</div>
									<div className="filter_item">
										<Dropdown arrowClosed={<i className="fa fa-angle-down" />} arrowOpen={<i className="fa fa-angle-up" />} options={countryOptions} onChange={(e) => handleDropdown(e.value, 3)} value={'País'} placeholder={countryOptions[0]} className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow} />
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
