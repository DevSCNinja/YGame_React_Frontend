import React from "react";
import Styles from './Avatarmodal.module.scss';
import Button1 from '../Button1';
import styled from 'styled-components'
import { getImg } from "../../../utils/Helper";
// import { Avatar } from "@material-ui/core";
import Slider from '@mui/material/Slider';
import Cropper from 'react-easy-crop'

const AavatarStyle = styled.div`
    .reactEasyCrop_Container {
        border-radius: 430px;
    }    

    .reactEasyCrop_CropArea {
       width: 430px !important;
       height: 430px !important;
    }

    .css-y50uh2-MuiSlider-root {
       
        background: #01191E;
    }

    .css-ada0pd-MuiSlider-track {
        color: #0D3840;
    }

    .css-y35fuw-MuiSlider-thumb {
        color: #0D3840;
    }
        
}`

class Avatarmodal extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        imageSrc: getImg('page1/avatar_large_circle.png'),
        crop: { x: 0, y: 0 },
        zoom: 1,
        aspect: 1,
    }

    onCropChange = (crop) => {
        this.setState({ crop })
    }
    
    onCropComplete = (croppedArea, croppedAreaPixels) => {
        console.log(croppedAreaPixels.width / croppedAreaPixels.height)
    }
    
    onZoomChange = (zoom) => {
        this.setState({ zoom })
    }



    render() {
        const showHideClassName = this.props.show ? " display-block" : "modal display-none";

        return (
            <AavatarStyle>
                <div className={Styles.modal + showHideClassName}> 
                    <div className={Styles.avatarmodal_wrap}>
                        <button className={Styles.modal_close} onClick={this.props.handleClose}>
                        <img src={getImg('page1/close.png')} />
                        </button>
                        <dl>
                            <dt>Alterar imagem de perfil</dt>
                            <dd>Deixei seu cantinho em nosso site com a sua cara</dd>
                            <div className={Styles.avatar_wrap}>
                                <div className={Styles.crop_container}>
                                    <Cropper
                                        image={this.state.imageSrc}
                                        crop={this.state.crop}
                                        zoom={this.state.zoom}
                                        aspect={this.state.aspect}
                                        cropShape="round"
                                        showGrid={false}
                                        onCropChange={this.onCropChange}
                                        onCropComplete={this.onCropComplete}
                                        onZoomChange={this.onZoomChange}
                                    />
                                </div>
                                <div className={Styles.controls}>
                                    <Slider
                                        value={this.state.zoom}
                                        min={1}
                                        max={3}
                                        step={0.1}
                                        orientation="vertical"
                                        aria-labelledby="Zoom"
                                        onChange={(e, zoom) => this.onZoomChange(zoom)}
                                        classes={{ container: 'slider' }}
                                    />
                                </div>
                                {/* <img class="avatar_img img-responsive" src={getImg('page1/avatar_large_circle.png')} /> */}
                            </div>
                        </dl>
                        <div style={{marginBottom: "20px", display: "flex", justifyContent: "space-between"}}>
                            <Button1 buttontext="Excluir" background="#DB2B2F" width="152"/>
                            <Button1 buttontext="Fazer Upload" background="#34A853" width="324"/>
                        </div>
                        <div>
                            <Button1 buttontext="Salvar Alterações" background="#F15A24" />
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </AavatarStyle>       
        )
    }
}

  export default Avatarmodal;