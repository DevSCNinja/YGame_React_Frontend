import React from "react";

import HeaderLogged from "../../components/Home/HeaderLogged";
import Footer from "../../components/Home/Footer";

import { getImg } from "../../utils/Helper";
import Styles from './Search.module.scss';
import styled from "styled-components";
import Sort from "../../components/MyPage/Sort";
import Dropdown from 'react-dropdown';

export default function Search(props) {
  const options = [];

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
        <div className={Styles.product_catalog_page}>
        <div className={Styles.container}>
            <HeaderLogged />
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
                         <Dropdown arrowClosed={<i className="fa fa-angle-down" />}arrowOpen={<i className="fa fa-angle-up" />} options={options} onChange={props._onSelect} value={'Tipo'} placeholder={options[0]} className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow}/>
                    </div>  
                    <div className="filter_item">
                         <Dropdown arrowClosed={<i className="fa fa-angle-down" />}arrowOpen={<i className="fa fa-angle-up" />} options={options} onChange={props._onSelect} value={'Marca'} placeholder={options[0]} className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow}/>
                    </div>  
                    <div className="filter_item">
                         <Dropdown arrowClosed={<i className="fa fa-angle-down" />}arrowOpen={<i className="fa fa-angle-up" />} options={options} onChange={props._onSelect} value={'Plataforma'} placeholder={options[0]} className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow}/>
                    </div>  
                    <div className="filter_item">
                         <Dropdown arrowClosed={<i className="fa fa-angle-down" />}arrowOpen={<i className="fa fa-angle-up" />} options={options} onChange={props._onSelect} value={'País'} placeholder={options[0]} className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow}/>
                    </div>  
                </div>  
                </div>
                <div className={Styles.product_recommend_list}>
                    <div className={Styles.product_recommend_item}>
                        <div className={Styles.img_wrap}>
                            <img src={getImg('product/product_small1.png')} alt=""/>
                        </div>
                        <div className={Styles.product_title}>
                            Playstation R$ 60 - Gift Ca...
                        </div>
                        <div style={{padding: "15px"}}>
                            <div className={Styles.icon_group}>
                                <img src={getImg('product/icon1.png')} alt=""/>
                                <img src={getImg('product/icon2.png')} alt=""/>
                            </div>
                            <button>R$ 60,00</button>
                        </div>
                    </div>
                    <div className={Styles.product_recommend_item}>
                        <div className={Styles.img_wrap}>
                            <img src={getImg('product/product_small2.png')} alt=""/>
                        </div>
                        <div className={Styles.product_title}>
                            Playstation R$ 60 - Gift Ca...
                        </div>
                        <div style={{padding: "15px"}}>
                            <div className={Styles.icon_group}>
                                <img src={getImg('product/icon1.png')} alt=""/>
                                <img src={getImg('product/icon2.png')} alt=""/>
                            </div>
                            <button>R$ 30,00</button>
                        </div>
                    </div>
                    <div className={Styles.product_recommend_item}>
                        <div className={Styles.img_wrap}>
                            <img src={getImg('product/product_small3.png')} alt=""/>
                        </div>
                        <div className={Styles.product_title}>
                            Playstation R$ 30 - Gift Ca...
                        </div>
                        <div style={{padding: "15px"}}>
                            <div className={Styles.icon_group}>
                                <img src={getImg('product/icon1.png')} alt=""/>
                                <img src={getImg('product/icon2.png')} alt=""/>
                            </div>
                            <button>R$ 199,90</button>
                        </div>
                    </div>
                    <div className={Styles.product_recommend_item}>
                        <div className={Styles.img_wrap}>
                            <img src={getImg('product/product_small4.png')} alt=""/>
                        </div>
                        <div className={Styles.product_title}>
                            PS Plus 12 meses - Gift Car...
                        </div>
                        <div style={{padding: "15px"}}>
                            <div className={Styles.icon_group}>
                                <img src={getImg('product/icon1.png')} alt=""/>
                                <img src={getImg('product/icon2.png')} alt=""/>
                            </div>
                            <button>R$ 85,90</button>
                        </div>
                    </div>
                    <div className={Styles.product_recommend_item}>
                        <div className={Styles.img_wrap}>
                            <img src={getImg('product/product_small4.png')} alt=""/>
                        </div>
                        <div className={Styles.product_title}>
                            PS Plus 12 meses - Gift Car...
                        </div>
                        <div style={{padding: "15px"}}>
                            <div className={Styles.icon_group}>
                                <img src={getImg('product/icon1.png')} alt=""/>
                                <img src={getImg('product/icon2.png')} alt=""/>
                            </div>
                            <button>R$ 85,90</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <Footer />
        </div>
    </CatalogStyle>
  )
}
