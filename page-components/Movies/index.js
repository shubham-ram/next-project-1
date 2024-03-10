import useMovies from "./useMovies";

import styles from "./styles.module.css";

function Movies() {
    const { movieList, setLastEle, parentRef } = useMovies()

    const movieLength = movieList.length;

    return (
        <div>
            <h2>Movies</h2>
            <div className={styles.movie_container} ref={parentRef}>
                {(movieList || []).map((movie, i) => {
                    return (
                        <div key={movie.id} className={styles.movie_card} ref={movieLength - 1 === i ? setLastEle : null}>
                            <img className={styles.poster} src={movie.poster_url} />
                            <h2>{movie.title}</h2>

                            <div className={styles.footer}>
                                <p>{movie.rating}</p>
                                <p>{movie.release_year}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Movies;
