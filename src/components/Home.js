import { useEffect, useState } from 'react'
import MovieCard from './Card'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = ({ movies, selected, setSelected }) => {
    const navigate = useNavigate();

    const handleClick = (s) => {
        console.log(s);
        setSelected(movies[s]);
        navigate('/details')
    }

    return (
        <div className='home-div'>
            {movies.map((movie, index) => {
                return (
                    <MovieCard key={movie.show.id} thumbnail={movie.show.image.original} movietitle={movie.show.name} language={movie.show.language} type={movie.show.type} status={movie.show.status} rating={movie.show.rating.average} serial={index} movies={movies} selected={selected} setSelected={setSelected} handleClick={handleClick} />
                )
            })}
        </div>
    )
}

export default Home