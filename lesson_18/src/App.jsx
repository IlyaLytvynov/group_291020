import React from 'react';
import { Header } from './Header';
import './App.scss';
import { Preview } from './Preview';
export class App extends React.Component {
  constructor() {
    super();
    this.state = { time: 0, movies: [] };
  }

  componentDidMount() {
    fetch('https://boring-fe.herokuapp.com/movies')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({ movies: data });
      });
  }

  render() {
    const globalMenuItems = [
      {
        title: 'Home',
        ref: '/',
      },
      {
        title: 'Visit unsplash',
        ref: 'https://unsplash.com/',
      },
    ];
    const moviesList = [];
    for (let item of this.state.movies) {
      moviesList.push(<Preview movie={item} />);
    }
    return (
      <div className='app'>
        <Header
          greetMessage="i'm PROPS from PARENT"
          clicMeCallback={(text) => {
            alert(text);
          }}
          menuItems={globalMenuItems}
        />
        <h1>{this.state.time}</h1>
        <button onClick={() => this.start()}>Start</button>
        <button onClick={() => this.stop()}>Stop</button>
        {moviesList}
      </div>
    );
  }

  start() {
    this.setState({ time: this.state.time + 1 });
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
      console.log(this.state.time);
    }, 1000);
  }

  stop() {
    this.setState({ time: 0 });
    clearInterval(this.interval);
  }
}
