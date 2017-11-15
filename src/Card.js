import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  display: block;
  margin: 0 auto;
  padding: 20px;
`;

const Card = (props) => {
  const { genre, challenge, image } = props;
  if (image) {
    return <Image src={image} alt="none" height='200px' width='300px' />
  }
  return (
    <div>
      <h2>{genre}</h2>
      <h2>{challenge}</h2>
    </div>
  );
};

export default Card;
