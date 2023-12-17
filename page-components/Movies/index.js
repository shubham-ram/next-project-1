import Button from "@/common/component/Button"
import styles from './styles.module.css'
import { useState } from "react"
import { useEffect } from "react"

function Movies() {
    const [movieList, setMovieList] = useState([])
    const getMovies = async () => {
        const resp = await fetch('/api/getMovies')
        const data = await resp.json()
        console.log(data, 'data');
        setMovieList(data?.data)
    }

    useEffect(() => {
        getMovies()
    }, [])


    return (
        <div>
            <h2>Movies</h2>

            <div className={styles.movie_container}>
                {movieList.map((movie) => (
                    <div key={movie.id} className={styles.movie_card}>
                        <img className={styles.poster} src={movie.poster_url} />
                        <h2>{movie.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Movies