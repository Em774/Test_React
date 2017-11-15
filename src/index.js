import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let era = [
  60, 70, 80, 90, 2000
]

let genres = [
  'Rock', 'Pop', 'Jazz', 'Country', 'Alternative', 'Rap'
]

let challenges = [
  'LikeElvis',
  'Parent\'s favourite songs',
  'Too high for me',
  'Artist beginning with B',
  'Artist beginning with E',
  'Artist beginning with R',
  'This is out of my range',
  'Title contains boy or girl',
  'Refers to crime'
]


class Karaoke extends Component {
  state = {
    genre: '',
    challenge: '',
    bgColor: '#4286f4',
    image: ''
  }

  selectEasy = () => {
    const genreSelected = genres[Math.floor(Math.random() * genres.length)];
    const challengeSelected = challenges[Math.floor(Math.random() * challenges.length)];
    this.setState({
      genre: `The genre is ${genreSelected}`,
      bgColor: "#19e537",
      image: '',
      challenge: `The Challenge is ${challengeSelected}`
    });
  }

  selectHard = () => {
    const genreSelected = genres[Math.floor(Math.random() * genres.length)];
    const eraSelected = era[Math.floor(Math.random() * era.length)]
    this.setState({
      image: '',
      genre: `The genre is ${genreSelected} ${eraSelected}'s`,
      challenge: this.shuffle().slice(0, 2).join(' & '),
    });
  }

  shuffle = () => challenges.reduce((a,v)=>a.splice(Math.floor(Math.random() * a.length), 0, v) && a, []);

  passed = () => {
    this.setState({"image": "https://media.giphy.com/media/l4FGmu1ZS5URUhibS/giphy.gif"})
  }

  failed = () => {
    this.setState({"image": "https://media.giphy.com/media/l4FGHnc08HpNREIaQ/giphy.gif"})
  }

  render = () => {
    const { genre, challenge, image, bgColor } = this.state;
    return(
      <div>
        <h1>Karaoke Challenge</h1>
        <h2>{genre}</h2>
        <h2>{challenge}</h2>
        {
          image &&
            <img src={image} alt="none" height='200px' width='300px' />
        }
        <button id='easyButton' onClick={this.selectEasy} style={{ backgroundColor: bgColor }}>Easy</button>
        <button id='hardButton' onClick={this.selectHard}>Hard</button>
        <button id='passedButton' onClick={this.passed}>Passed!</button>
        <button id='failedButton' onClick={this.failed}>Failed!</button>
      </div>
    )
  }

}


ReactDOM.render(<Karaoke />, document.getElementById('root'));
