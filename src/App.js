import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Article from './components/Article.js';
import HomeDescription from './components/articles/HomeDescription.js';
import GravityDescription from './components/articles/GravityDescription.js';
import MotionDescription from './components/articles/MotionDescription.js';
import Footer from './components/Footer.js';

class App extends React.Component {
	navButtons = [
		{
			href : '#home',
			name : 'Home',
		},
		{
			href : '#gravity',
			name : 'Gravity',
		},
		{
			href : '#motion',
			name : 'Motion',
		},
	]
	render() {
		return (
			<div className="App">
				<Navbar title="Physics" buttons={this.navButtons}/>
				<div id='home'>
					<div><h1> Physics </h1></div>
				</div>
				<div className="row">
					<div><Article data={HomeDescription}/></div>
				</div>
				<div id='gravity' className="row">
					<div><Article data={GravityDescription}/></div>
					<div><img alt="no image" src="https://i.stack.imgur.com/brnXZ.jpg"/></div>
				</div>
				<div id='motion' className="row">
					<div><img alt="no image" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/5f5e1e03-c6ee-4731-9d4f-b7970f6d0622/kreis.jpg"/></div>
					<div><Article data={MotionDescription}/></div>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default App;
