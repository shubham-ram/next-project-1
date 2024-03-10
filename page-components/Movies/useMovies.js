import { useState, useRef, useEffect } from 'react'

const useMovies = () => {
    const [page, setPage] = useState(1)
    const [lastEle, setLastEle] = useState(null)
    const [movieList, setMovieList] = useState([]);

    const parentRef = useRef(null);
    const firstRender = useRef(true);

    const getMovies = async ({ page }) => {
        const resp = await fetch(`/api/getMovies?page=${page}`);
        const data = await resp.json();

        setMovieList((prev) => [...prev, ...data?.data]);
    };


    const intersectionCallback = (entries) => {
        const { isIntersecting = false } = entries?.[0] || {}

        if (isIntersecting) {
            setPage((p) => p + 1)
        }

    }

    useEffect(() => {
        if (lastEle) {

            const observer = new IntersectionObserver(intersectionCallback, {
                root: parentRef.current,
                rootMargin: "0px",
                threshold: 0.1
            })
            observer.observe(lastEle)

            return () => {
                observer.unobserve(lastEle)
            }
        }

    }, [lastEle])

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        } else {
            getMovies({ page });
        }
    }, [page]);

    return {
        movieList, setLastEle, parentRef
    }
}

export default useMovies