import React from 'react';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { getImg } from '../../../utils/Helper.js';
 
import Activationconfirmmodal from '../Activationconfirmmodal';
import ModalStyle from './Activationmodal.module.scss';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.85)'
  },

  '& .MuiPaper-root': {
    position: "relative",
    marginLeft: '10px'  ,
    background: "transparent",
    // background: "linear-gradient(180deg, rgba(1, 25, 30, 0) 0%, #01191E 50.79%)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
    maxWidth: '1012px',
    height: "401px",
    borderRadius : "20px",
    color: "#000"
  },

  '& .MuiDialogContent-root': {
    padding: "35px",
    // background: "linear-gradient(180deg, rgba(1, 25, 30, 0) 0%, #01191E 50.79%)"
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
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

export default function Activationmodal(props) {
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [purchaseNum, setPurchaseNum] = React.useState('G35A2-Y25T4-R357V-CV157');

  const handleClickOpen = () => {
    setConfirmOpen(true);
  };
  const handleClose = () => {
    setConfirmOpen(false);
  };


  return (
    <div>
      <BootstrapDialog
        onClose={props.activationModalClose}
        aria-labelledby="customized-dialog-title"
        open={props.actModalOpen}
      >
        <DialogContent dividers className={ModalStyle.activation_modal_wrap}>
            
        </DialogContent>
        <div className={ModalStyle.activation_overlay}>
          <button className={ModalStyle.button_close} onClick={props.activationModalClose}>
            <img src={getImg('mypage/close.png')} alt="" />
          </button>
          <div className={ModalStyle.modal_title}>800 Robux - 1Roblox</div>
            <div className={ModalStyle.list_wrap}>
              <dl>
                <dt>Plataforma</dt>
                <dd>
                  <img src={getImg('mypage/wishlist/icon5.png')} alt="" />
                  <img src={getImg('mypage/wishlist/icon2.png')} alt="" />
                </dd>
              </dl>
              <dl>
                <dt>Região</dt>
                <dd><img src={getImg('mypage/wishlist/icon1.png')} alt="" /></dd>
              </dl>
              <dl>
                <dt>Nº Pedido</dt>
                <dd>01543</dd>
              </dl>
              <dl>
                <dt>Data de Compra</dt>
                <dd>30/11/2021</dd>
              </dl>
            </div>
            <div class={ModalStyle.activation_wrap}>
              <p>Código de Ativação</p>
              {(props.modalName == "activated" || props.purchase) && <Input className={ModalStyle.purchase_form}
              fullWidth sx={{ m: 1 }} 
              style={{background: "#01060A", color: "#fff"}}
              id="standard-adornment-amount"
              defaultValue={purchaseNum}
              endAdornment={<InputAdornment position="end" ><img src={getImg('mypage/Copiar.png')} alt=""/></InputAdornment>}
          />}
              {(props.modalName == "activation" && !props.purchase) && <button onClick={handleClickOpen}> Revelar Código de Ativação <img src={getImg('mypage/wishlist/icon7.png')} alt="" /></button>}
            </div>
        </div>
        <Activationconfirmmodal purchase={props.purchase} doPurchase={props.doPurchase} confirmOpen={confirmOpen} handleClose={handleClose}/>
      </BootstrapDialog>
    </div>
  );
}