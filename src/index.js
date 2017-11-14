import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let era = [
  60, 70, 80, 90, 2000
]

let genre = [
  'Rock', 'Pop', 'Jazz', 'Country', 'Alternative', 'Rap'
]

let challenge = [
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


class Karaoke extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'easy': '',
      'easyChallenge': '',
      'hard': '',
      'hardChallenge': '',
      'hardEra': '',
      'bgColor': '#4286f4',
      'image': ''
    }
  };

  selectEasy = () => {
    let genreSelected = [];
    let challengeSelected = [];
    genreSelected.push(genre[Math.floor(Math.random() * genre.length)]);
    this.setState({"easy": 'The genre is ' + genreSelected});
    this.setState({"bgColor": "#19e537"});
    this.setState({"image": ''});

    challengeSelected.push(challenge[Math.floor(Math.random() * challenge.length)]);
    this.setState({"easyChallenge": 'The Challenge is ' + challengeSelected});
  }

  selectHard = () => {
    let genreSelected = [];
    let challengeSelected = [];
    let eraSelected = [];
    genreSelected.push(genre[Math.floor(Math.random() * genre.length)]);
    eraSelected.push(era[Math.floor(Math.random() * era.length)]);

    challengeSelected.push(challenge.slice(0, 2));
    console.log(challengeSelected);

    this.setState({"image": ''});
    this.setState({"hard": "The genre is " + genreSelected});
    this.setState({"hardEra": eraSelected + '\'s'});
    this.setState({"hardChallenge": challengeSelected});
  }

  shuffle = (challenge) => {
    for (let i = challenge.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [challenge[i], challenge[j]] = [challenge[j], challenge[i]];
    }
  }

  click = () => {
    this.selectHard();
    this.shuffle(challenge);
  }

  passed = () => {
    this.setState({"image": "https://media.giphy.com/media/l4FGmu1ZS5URUhibS/giphy.gif"})
  }

  failed = () => {
    this.setState({"image": "https://media.giphy.com/media/l4FGHnc08HpNREIaQ/giphy.gif"})
  }

  render = () => {
    return(
      <div>
        <h1>Karaoke Challenge</h1>
        <h2>{this.state.easy} </h2>
        <h2>{this.state.easyChallenge} </h2>
        <h2>{this.state.hard} {this.state.hardEra}</h2>
        <h2>{this.state.hardChallenge} </h2>
        <img src={this.state.image} alt="none" height='200px' width='300px'></img>
        <button id='easyButton' onClick={this.selectEasy} style={{backgroundColor: this.state.bgColor}}>Easy</button>
        <button id='hardButton' onClick={this.click}>Hard</button>
        <button id='passedButton' onClick={this.passed}>Passed!</button>
        <button id='failedButton' onClick={this.failed}>Failed!</button>
      </div>
    )
  }

}


ReactDOM.render(<Karaoke />, document.getElementById('root'));
