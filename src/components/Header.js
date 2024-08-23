import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<div className="container">
				<h1>Stockarea - Your digital warehouse</h1>
				<nav>
					<Link to="/">Home</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
