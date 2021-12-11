import React from "react";

import { getImg } from "../../../utils/Helper";
import Styles from './Wishlist.module.scss';
import Button1 from '../Button1';
import Sort from '../Sort';

class Wishlist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className={Styles.wish_list_wrap}>
                <Sort options={[{text: "Real Brasileiro (R$)"}]}/>
                <div className={Styles.wish_list}>
                    <div className={Styles.wish_item}>
                        <img src={getImg('mypage/wishlist/1.png')} alt=""/>
                        <div className={Styles.item_title}>Spotify Premium - Assinatura 1 mês</div>
                        <div className={Styles.icon_group}>
                                <img src={getImg('mypage/wishlist/icon1.png')} alt=""/>
                                <img src={getImg('mypage/wishlist/icon2.png')} alt=""/>
                        </div>
                        <div className={Styles.btn_group}>
                            <Button1 buttontext="-5%" background="#34A853" width="66"/>
                            <Button1 buttontext="R$ 47,50" background="#0D3840" width="130"/>
                        </div>
                    </div>
                    <div className={Styles.wish_item}>
                        <img src={getImg('mypage/wishlist/2.png')} alt=""/>
                        <div className={Styles.item_title}>920 Diamantes - Free Fire</div>
                        <div className={Styles.icon_group}>
                                <img src={getImg('mypage/wishlist/icon1.png')} alt=""/>
                                <img src={getImg('mypage/wishlist/icon2.png')} alt=""/>
                        </div>
                        <div className={Styles.btn_group}>
                            <Button1 buttontext="R$ 50,00" background="#0D3840" width="130"/>
                        </div>
                    </div>
                    <div className={Styles.wish_item}>
                        <img src={getImg('mypage/wishlist/3.png')} alt=""/>
                        <div className={Styles.item_title}>Spotify Premium - Assinatura 1 mês</div>
                        <div className={Styles.icon_group}>
                                <img src={getImg('mypage/wishlist/icon1.png')} alt=""/>
                                <img src={getImg('mypage/wishlist/icon3.png')} alt=""/>
                        </div>
                        <div className={Styles.btn_group}>
                            <Button1 buttontext="-5%" background="#34A853" width="66"/>
                            <Button1 buttontext="R$ 28,50" background="#0D3840" width="130"/>
                        </div>
                    </div>
                    <div className={Styles.wish_item}>
                        <img src={getImg('mypage/wishlist/4.png')} alt=""/>
                        <div className={Styles.item_title}>Netflix R$ 50 - Gift Card Digital</div>
                        <div className={Styles.icon_group}>
                                <img src={getImg('mypage/wishlist/icon1.png')} alt=""/>
                                <img src={getImg('mypage/wishlist/icon4.png')} alt=""/>
                        </div>
                        <div className={Styles.btn_group}>
                            <Button1 buttontext="R$ 50,00" background="#0D3840" width="130"/>
                        </div>
                    </div>
                    <div className={Styles.wish_item}>
                        <img src={getImg('mypage/wishlist/5.png')} alt=""/>
                        <div className={Styles.item_title}>Battle.net R$ 100 - Gift Card Digital</div>
                        <div className={Styles.icon_group}>
                                <img src={getImg('mypage/wishlist/icon1.png')} alt=""/>
                                <img src={getImg('mypage/wishlist/icon5.png')} alt=""/>
                        </div>
                        <div className={Styles.btn_group}>
                            <Button1 buttontext="R$ 100,00" background="#0D3840" width="130"/>
                        </div>
                    </div>
                    <div className={Styles.wish_item}>
                        <img src={getImg('mypage/wishlist/6.png')} alt=""/>
                        <div className={Styles.item_title}>Spotify Premium - Assinatura 1 mês</div>
                        <div className={Styles.icon_group}>
                                <img src={getImg('mypage/wishlist/icon1.png')} alt=""/>
                                <img src={getImg('mypage/wishlist/icon4.png')} alt=""/>
                        </div>
                        <div className={Styles.btn_group}>
                            <Button1 buttontext="R$ 17,00" background="#0D3840" width="130"/>
                        </div>
                    </div>
                    <div className={Styles.wish_item}>
                        <img src={getImg('mypage/wishlist/7.png')} alt=""/>
                        <div className={Styles.item_title}>Steam 50 HKD - Gift Card Digital</div>
                        <div className={Styles.icon_group}>
                                <img src={getImg('mypage/wishlist/icon6.png')} alt=""/>
                                <img src={getImg('mypage/wishlist/icon5.png')} alt=""/>
                        </div>
                        <div className={Styles.btn_group}>
                            <Button1 buttontext="R$ 32,99" background="#0D3840" width="130"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wishlist