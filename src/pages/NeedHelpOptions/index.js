import React, { useState } from 'react';
import {
  ColumnContainer,
  Grid,
  OptionCard,
  GetModalButton,
  GridText,
} from '../../globalComponents';
import { SubTitle, Title } from './styles';
import cardData from '../../assets/productCategory.json';
import Modal from '../../components/Modal';
import ModalContent from './ModalContent';
import { useHistory } from 'react-router-dom';

export default function NeedHelpOptions() {
  const history = useHistory();
  const isFirstAccess = history.location.state;
  const [showModal, setShowModal] = useState(false);
  const [cardSelectedInfo, setCardSelectedInfo] = useState();

  const getModal = () => {
    return (
      <Modal close={toggleShowModal}>
        <ModalContent
          cardInfo={cardSelectedInfo}
          closeModal={toggleShowModal}
        ></ModalContent>
      </Modal>
    );
  };

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const goToFriends = () => {
    if (isFirstAccess) {
      history.replace('help-or-be-helped');
    } else {
      history.replace('friends');
    }
  };

  return (
    <ColumnContainer>
      <Title>Preciso de ajuda</Title>
      <SubTitle>
        Pode escolher mais de uma opção, tá?
        <br />É muito importante que você descreva a sua necessidade após a
        seleção da categoria, assim fica mais fácil de ajudar!
      </SubTitle>
      <Grid>
        {cardData.map((el) => (
          <OptionCard
            key={el.category}
            onClick={() => {
              setCardSelectedInfo(el);
              toggleShowModal();
            }}
          >
            <img
              src={el.imageUrl}
              alt={el.category}
              style={{ height: '2.5em' }}
            />
            <GridText>{el.category}</GridText>
          </OptionCard>
        ))}
      </Grid>
      <GetModalButton onClick={goToFriends}>
        <img src='./logo.png' alt='logo' style={{ height: '100%' }} />
        <div>
          Não achou sua necessidade acima?
          <br />
          <p style={{ marginTop: '5px', fontWeight: 'bold' }}>
            Digite ela aqui!
          </p>
        </div>
      </GetModalButton>
      {showModal && getModal()}
    </ColumnContainer>
  );
}
