import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC6AGpia-UU51fLDKvhYLaezd8BoN7H86k';


const App = () => {
	return (

		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));