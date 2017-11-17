import React from 'react';
import styled from 'styled-components';
import easyImage from './images/easy.png';
import hardImage from './images/hard.png';
import {colors} from './constants';

const Image = styled.img`
  display: block;
  margin: 0 auto;
  padding: 20px;
`;

const bgCard = (bgType) => {
  if (bgType === 'easy') {
    return easyImage;
  } else if (bgType === 'hard') {
    return hardImage;
  }
  return '';
};

const Easycard = styled.div`
  width: 315px;
  height: 445px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 0 auto;
  ${'' /* background: ${props => props.background} */}
  background: url(${props => bgCard(props.displayCard)}) center center;
  background-size: cover;
  background-color: ${colors.HORRIBLE_GREEN};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Card = (props) => {
  if (props.image) {
    return <Image src={props.image} alt="none" height='200px' width='300px' />
  }
  return (
    <Easycard displayCard={props.background}>
      <h2>{props.genre}</h2>
      <h2>{props.challenge}</h2>
    </Easycard>
  );
};

export default Card;
