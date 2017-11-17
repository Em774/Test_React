import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Card from './Card';
import {
  colors,
  era,
  genres,
  challenges
} from './constants';

const Container = styled.div`
  text-align: center;
`;
const Button = styled.button`
  padding: 25px;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

class Karaoke extends Component {
  state = {
    genre: 'made with love by',
    challenge: 'Emilie and Olly',
    bgButton: colors.OTHER_BLUE,
    image: '',
    bgCard: '',
    cardLevel: ''
  };

  selectEasy = () => {
    const genreSelected = genres[Math.floor(Math.random() * genres.length)];
    const challengeSelected = challenges[Math.floor(Math.random() * challenges.length)];
    this.setState({
      genre: `The genre is ${genreSelected}`,
      bgButton: colors.BLUE,
      image: '',
      challenge: `The Challenge is ${challengeSelected}`,
      // bgCard: colors.HORRIBLE_GREEN
      cardLevel: 'easy'
    });
  };

  selectHard = () => {
    const genreSelected = genres[Math.floor(Math.random() * genres.length)];
    const eraSelected = era[Math.floor(Math.random() * era.length)]
    this.setState({
      image: '',
      genre: `The genre is ${genreSelected} ${eraSelected}'s`,
      challenge: this.shuffle().slice(0, 2).join(' & '),
      // bgCard: colors.OTHER_BLUE
      cardLevel: 'hard'
    });
  };

  shuffle = () => challenges.reduce((a,v)=>a.splice(Math.floor(Math.random() * a.length), 0, v) && a, []);

  passed = () => {
    this.setState({"image": "https://media.giphy.com/media/l4FGmu1ZS5URUhibS/giphy.gif"})
  };

  failed = () => {
    this.setState({"image": "https://media.giphy.com/media/l4FGHnc08HpNREIaQ/giphy.gif"})
  };


  render = () => {
    return(
      <Container>
        <h1>Karaoke Challenge</h1>
        <Card
          genre={this.state.genre}
          challenge={this.state.challenge}
          image={this.state.image}
          background={this.state.cardLevel}
        />
        <Button onClick={this.selectEasy} style={{ backgroundColor: this.state.bgButton }}>Easy</Button>
        <Button onClick={this.selectHard}>Hard</Button>
        <Button onClick={this.passed}>Passed!</Button>
        <Button onClick={this.failed}>Failed!</Button>
      </Container>
    )
  };

}

ReactDOM.render(<Karaoke />, document.getElementById('root'));
