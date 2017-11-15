import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Card from './Card';

const era = [
  60, 70, 80, 90, 2000
];

const genres = [
  'Rock', 'Pop', 'Jazz', 'Country', 'Alternative', 'Rap'
];

const challenges = [
  'LikeElvis',
  'Parent\'s favourite songs',
  'Too high for me',
  'Artist beginning with B',
  'Artist beginning with E',
  'Artist beginning with R',
  'This is out of my range',
  'Title contains boy or girl',
  'Refers to crime'
];

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
    genre: '',
    challenge: '',
    bgColor: '#4286f4',
    image: ''
  };

  selectEasy = () => {
    const genreSelected = genres[Math.floor(Math.random() * genres.length)];
    const challengeSelected = challenges[Math.floor(Math.random() * challenges.length)];
    this.setState({
      genre: `The genre is ${genreSelected}`,
      bgColor: "#19e537",
      image: '',
      challenge: `The Challenge is ${challengeSelected}`
    });
  };

  selectHard = () => {
    const genreSelected = genres[Math.floor(Math.random() * genres.length)];
    const eraSelected = era[Math.floor(Math.random() * era.length)]
    this.setState({
      image: '',
      genre: `The genre is ${genreSelected} ${eraSelected}'s`,
      challenge: this.shuffle().slice(0, 2).join(' & '),
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
    const { bgColor, genre, challenge, image } = this.state;
    return(
      <Container>
        <h1>Karaoke Challenge</h1>
        <Card genre={genre} challenge={challenge} image={image} />
        <Button onClick={this.selectEasy} style={{ backgroundColor: bgColor }}>Easy</Button>
        <Button onClick={this.selectHard}>Hard</Button>
        <Button onClick={this.passed}>Passed!</Button>
        <Button onClick={this.failed}>Failed!</Button>
      </Container>
    )
  };

}

ReactDOM.render(<Karaoke />, document.getElementById('root'));
