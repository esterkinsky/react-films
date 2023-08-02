import { Movie } from "./Movie";


function Movies(props) {
	const { movies = [] } = props;

	return <div className="movies">
		{movies.length ? movies.map(movie =>
			<Movie  {...movie} />
		) : <h4>Nothing found. Write "matrix" for example and try it again.</h4>}
	</div>
}

export { Movies };