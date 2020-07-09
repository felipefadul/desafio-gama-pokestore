import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import * as S from './styled';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#F8D002',
    border: '2px solid #000',
    borderRadius: '15px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Cart({ cart, clearCart }) {
  const classes = useStyles();
  const [ openCartModal, setOpenCartModal ] = React.useState(false);
  const [ openThanksModal, setOpenThanksModal ] = React.useState(false);

  const handleOpenCartModal = () => {
    setOpenCartModal(true);
  };

  const handleCloseCartModal = () => {
    setOpenCartModal(false);
  };

  const handleOpenThanksModal = () => {
    setOpenThanksModal(true);
  }

  const handleCloseThanksModal = () => {
    setOpenThanksModal(false);
  }

  const finishPurchase = () => {
    handleCloseCartModal();
    handleOpenThanksModal();
    clearCart();
  };

  return (
    <>
      <S.CartHeaderSection onClick={handleOpenCartModal}>
        <S.CartHeaderText>
          <FontAwesomeIcon icon={faShoppingCart} />
          &nbsp;CARRINHO
        </S.CartHeaderText>
        <p>
          Itens:{" "}
          <span style={{ color: "red" }}>
            { cart.length > 0 ? cart[0].totalItems : 0 }
          </span>
        </p>
      </S.CartHeaderSection>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openCartModal}
        onClose={handleCloseCartModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openCartModal}>
          <div className={classes.paper}>
            <S.ModalTitle>Meu Carrinho</S.ModalTitle>
            <S.CartContainer>
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  index === 0 ? <></> :
                    (
                      <S.CartItem key={ item.id }>
                        <S.ItemImage src={ item.image } alt={ item.image } />
                        <S.ItemInfoContainer>
                          <S.ItemName>{ item.name }</S.ItemName>
                          <S.ItemPrice>R$ { item.price },00 x { item.numberOfItems} </S.ItemPrice>
                        </S.ItemInfoContainer>
                      </S.CartItem>
                    )
                ))
              ) : (
                  <S.CenterText>
                    Não há itens no carrinho :(
                  </S.CenterText>
                )}
            </S.CartContainer>
            { cart.length > 0 ? 
              ( 
                <>
                  <S.TotalPrice>
                    Total: R$ { cart.length > 0 ? cart[0].totalPrice : 0 },00
                  </S.TotalPrice>
                  <S.ModalButton onClick={finishPurchase}>
                    FINALIZAR COMPRA
                  </S.ModalButton>
                </>
              ) : (
                <S.ModalButton onClick={handleCloseCartModal}>
                  ESCOLHER PRODUTOS
                </S.ModalButton>
              )
            }
          </div>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openThanksModal}
        onClose={handleCloseThanksModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openThanksModal}>
          <div className={classes.paper}>
            <S.ModalTitle>Compra finalizada!</S.ModalTitle>
            <S.CenterText>
              Obrigado pela preferência! :)
            </S.CenterText>
            <S.ModalButton onClick={handleCloseThanksModal}>
              VOLTAR ÀS COMPRAS
            </S.ModalButton>
          </div>
        </Fade>
      </Modal>
    </>
  );
}