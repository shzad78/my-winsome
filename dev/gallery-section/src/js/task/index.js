import '../../css/styles.scss'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
console.log(`Loading...`);
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

ReactDOM.render(
	<App />,
	document.querySelector('#app'),
	function(){console.log('Winsome Task...')}
);