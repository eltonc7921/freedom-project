import React from 'react';
import PropTypes from 'prop-types';
import './css/Article.css';

class Article extends React.Component {
	constructor(props) {
		super(props)
		this.title = props.data.title;
		this.article = props.data.article;
	}

	render() {
		return (
			<article className="Article">
				{ this.title ? <header><h1>{this.title}</h1></header> : null }
				{this.article}
			</article>
		);
	}
}

Article.propTypes = {
	data : PropTypes.shape({
		title : PropTypes.string,
		article : PropTypes.element.isRequired,
	}).isRequired,
}

export default Article;
