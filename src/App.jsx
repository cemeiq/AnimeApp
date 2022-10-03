import React, { useEffect, useState } from "react";
import './App.css'
import './components/style.css'
export default function App() {

  const [search, setSearch] = useState('Naruto')
  const [animeData, setanimeData] = useState()
  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=naruto&limit=20`)
    const resData = await res.json();
    setanimeData()
  }

  useEffect(() => {
    getData()
  }, [])
  return (



    <div className="header">
      <h1>MyAnimeList</h1>
      <div className="search-box">
        <input type="search" placeholder="search your anime"></input>
      </div>
    </div>

  )
}
