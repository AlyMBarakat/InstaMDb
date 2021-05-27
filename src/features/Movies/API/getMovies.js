import API from '../../../axios';

// extract and parse useful data from response data
const parseMoviesData = (moviesResponseData) => {
    const parsedMoviesData = moviesResponseData.map(
        ({ id, poster_path, release_date, title, overview }) => ({
            id,
            title,
            overview,
            posterPath: poster_path,
            releaseDate: release_date,
        })
    );
    return parsedMoviesData;
}

const getMovies = async (pageNumber) => {
    const { data } = await API.get(`discover/movie?page=${pageNumber}&api_key=${"acea91d2bff1c53e6604e4985b6989e2"}`);
    return parseMoviesData(data.results);
}

export default getMovies;