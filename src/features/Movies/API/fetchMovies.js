import API from '../../../axios';

const fetchMovies = async (pageNumber) => {
    const { data: newMoviesData } = await API.get(`discover/movie`, {
        params: {
            page: pageNumber
        }
    });
    const parsedMoviesData = newMoviesData.results.map(
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

export default fetchMovies;