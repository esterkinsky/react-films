import React, { useEffect, useState } from 'react';
import { Movies } from '../Movies';
import { Preloader } from '../Preloader';
import { Search } from '../Search';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	const searchMovies = (newFilmName, type = 'all') => {
		setLoading(true);
		fetch(
			`https://www.omdbapi.com/?apikey=${API_KEY}&s=${newFilmName}${type !== 'all' ? `&type=${type}` : ''
			}`
		)
			.then(response => response.json())
			.then(data => {
				setMovies(data.Search);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	};

	useEffect(() => {
		fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
			.then(response => response.json()) // конвертирование данных в формат JSON
			.then(data => {
				setMovies(data.Search);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}, []);


	return (
		<main className='container content'>
			<Search searchMovies={searchMovies} />
			{loading ? <Preloader /> : <Movies movies={movies} />}
		</main>
	);
}

export { Main };