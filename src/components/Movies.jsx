import { Movie } from "./Movie";


function Movies(props) {
	const { movies = [] } = props;

	return <div className="movies">
		{movies.length ? movies.map(movie =>
			<Movie  {...movie} />
		) : <h4>Nothing found. Write something new and try again.</h4>}
	</div>
}

export { Movies };