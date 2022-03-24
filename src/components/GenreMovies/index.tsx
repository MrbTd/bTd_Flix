import React, { useEffect, useState } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { getStorageValue, useLocalStorage } from '../../configs/useLocalStorage'
import Popular from '../Popular'

const GenreMovies = () => {
    const data = useSelector((state: RootStateOrAny) => state)
    useLocalStorage(data)

    return (
        <div>
            <Popular label="Popular on Netflix" db={getStorageValue().popular} search="popular" />
            <Popular label="Romantic Comedies" db={getStorageValue().romance} search="romance" />
            <Popular label="Animation" db={getStorageValue().animation} search="animation" />
            <Popular label="Comedy" db={getStorageValue().comedy} search="comedy" />
            <Popular label="Documentary" db={getStorageValue().documentary} search="documentary" />
            <Popular label="Family" db={getStorageValue().family} search="family" />
            <Popular label="Horror" db={getStorageValue().horror} search="horror" />
            <Popular label="Science Fiction" db={getStorageValue().science_fic} search="science_fic" />
            <Popular label="Tv Series" db={getStorageValue().serie} search="serie" />
            <Popular label="Thriller Movies" db={getStorageValue().triller} search="triller" />

        </div>
    )
}

export default GenreMovies