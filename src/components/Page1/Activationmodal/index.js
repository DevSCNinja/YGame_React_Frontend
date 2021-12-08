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

import { getImg } from '../../../utils/Helper.js';
 

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

export default function Activationmodal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers className={ModalStyle.activation_modal_wrap}>
            
        </DialogContent>
        <div className={ModalStyle.activation_overlay}>
          <button className={ModalStyle.button_close} onClick={handleClose}>
            <img src={getImg('page1/close.png')} alt="" />
          </button>
          <div className={ModalStyle.modal_title}>800 Robux - 1Roblox</div>
            <div className={ModalStyle.list_wrap}>
              <dl>
                <dt>Plataforma</dt>
                <dd>
                  <img src={getImg('page1/subpage2/icon5.png')} alt="" />
                  <img src={getImg('page1/subpage2/icon2.png')} alt="" />
                </dd>
              </dl>
              <dl>
                <dt>Região</dt>
                <dd><img src={getImg('page1/subpage2/icon1.png')} alt="" /></dd>
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
              <button>
                  Revelar Código de Ativação
                  <img src={getImg('page1/subpage2/icon7.png')} alt="" />
              </button>
            </div>
        </div>
      </BootstrapDialog>
    </div>
  );
}