import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @class
 * @classdesc Header component
 */
const Header = () => (
	<Link to="/" activeclassname="active">Home</Link>
);

export default Header;
