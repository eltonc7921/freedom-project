import React from 'react';
import PropTypes from 'prop-types';
import './css/Navbar.css';

class Navbar extends React.Component {
	constructor(props) {
		super(props)
		this.listItems = [];
		let id = 0;
		for (let button of this.props.buttons) {
			let {href, name} = button;
			this.listItems.push(<li key={id}><a href={href}>{name}</a></li>)
			id += 1;
		}
	}

	render() {
		return (
			<div className="Navbar">
				<ul>
					{ this.props.title ? <li className='title'><h1> {this.props.title} </h1></li> : null }
					{this.listItems}
				</ul>
			</div>
		);
	}
}

Navbar.propTypes = {
	title : PropTypes.string,
	buttons : PropTypes.arrayOf(PropTypes.shape({
			href : PropTypes.string.isRequired,
			name : PropTypes.string.isRequired,
	})).isRequired,
}

export default Navbar;
