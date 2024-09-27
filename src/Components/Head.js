import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Header () {
    const [nasTitle, setNasTitle] = useState('')
    useEffect (() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=0wwfsFmFCb3e6xzgg5X4j7m6I5DsZkAicrK0ETm8`)
        .then(res => setNasTitle(res.data.title))
      }, [nasTitle])
    return (
        <h1 className="headTitle">{nasTitle}</h1>
    )
} 