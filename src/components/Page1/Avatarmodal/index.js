import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Slider from '@material-ui/core/Slider';
import Cropper from 'react-easy-crop';
import Button1 from '../Button1';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { getImg } from '../../../utils/Helper.js';
 
import style from './Avatarmodal.module.scss';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.85)'
  },

  '& .MuiPaper-root': {
    position: "relative",
    marginLeft: '10px'  ,
    background: "transparent",
    background: "linear-gradient(180deg, rgba(1, 25, 30, 0) 0%, #01191E 50.79%)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
    minWidth: '536px',
    // height: "401px",
    borderRadius : "20px",
    color: "#000"
  },

  '& .MuiDialogContent-root': {
    padding: "0",
    // background: "linear-gradient(180deg, rgba(1, 25, 30, 0) 0%, #01191E 50.79%)"
  },

  
    '.reactEasyCrop_Container': {
        borderRadius: "430px",
        zIndex: "100000"
    },   

    '.reactEasyCrop_CropArea': {
        width: "430px !important" ,
        height: "430px !important" 
    },

    '.MuiSlider-root': {
    
        background: "#01191E"
    },

    '.MuiSlider-track': {
        color: "#0D3840",
        borderRadius: "20px",
    },

    '.MuiSlider-vertical .MuiSlider-rail': {
      width: '11px',
      borderRadius: "20px",
      background: "#0D3840",
      opacity: "1"  
    },
    
    '.MuiSlider-thumb': {
       marginTop: "20px",
        color: "#0D3840",
        width: '22px',
        height: '22px',
    },

    '.MuiSlider-root.MuiSlider-vertical': {
      width: '11px',

    },

    '.MuiSlider-vertical .MuiSlider-track': {
      width: '11px',
    }
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };


export default function Avatarmodal(props) {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const onCropComplete = useEffect((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
    }, [])

    return (
    <div>
      <BootstrapDialog
        onClose={props.activationModalClose}
        aria-labelledby="customized-dialog-title"
        open={props.show}
      >
        <DialogContent dividers>
            <div className={style.avatarmodal_wrap}>
                <button className={style.modal_close} onClick={props.handleClose}>
                <img src={getImg('page1/close.png')} />
                </button>
                <dl>
                    <dt>Alterar imagem de perfil</dt>
                    <dd>Deixei seu cantinho em nosso site com a sua cara</dd>          
                </dl>
                <div className={style.avatar_wrap}>
                        <div className={style.crop_container}>
                            <Cropper
                                image={getImg('page1/avatar_large.jpg')}
                                crop={crop}
                                zoom={zoom}
                                aspect={4 / 3}
                                onCropChange={setCrop}
                                onCropComplete={onCropComplete}
                                onZoomChange={setZoom}
                                cropShape="round"
                                showGrid={false}
                            />
                        </div>
                        <div className={style.controls}>
                            <Slider
                                value={zoom}
                                min={1}
                                max={3}
                                step={0.1}
                                orientation="vertical"
                                aria-labelledby="Zoom"
                                onChange={(e, zoom) => setZoom(zoom)}
                                classes={{ root: 'slider' }}
                                />
                        </div>
                        {/* <img class="avatar_img img-responsive" src={getImg('page1/avatar_large_circle.png')} /> */}
                    </div>
                    <div style={style.btn_group}>
                            <div style={{marginBottom: "20px", display: "flex", justifyContent: "space-between"}}>
                                <Button1 buttontext="Excluir" background="#DB2B2F" width="152"/>
                                <Button1 buttontext="Fazer Upload" background="#34A853" width="324"/>
                            </div>
                            <div>
                                <Button1 buttontext="Salvar Alterações" background="#F15A24" />
                            </div>
                        </div>
            </div>
    
           
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}