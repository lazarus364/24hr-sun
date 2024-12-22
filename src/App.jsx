import { useState } from 'react'
import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function App() {
  let navigate=useNavigate()
  const [articles, setArticles] = useState([]);

  function Home () {
    navigate ('/')
  }

  return (
    <>
      <header>
        <title>24HR SUN</title>
        <h1 onClick={home}>HOME</h1>
        <ul>
          <li>
            <a href='Movie/Series News'>Movie/Series News</a>
            <a href='Movies'>Movies</a>
            <a href='Latest Movies'>Latest Movies</a>
            <a href='Top Movies'>Top Movies</a>
            <a href='Series'>Series</a>
            <a href='Latest Series'>Latest Series</a>
            <a href='Top Series'>Top Series</a>
            <a href='Animations'>Animations</a>
            <a href='Others'>Others</a>
          </li>
        </ul>
        <div>
          <NavLink to="/search" className="nav-link">search</NavLink>
          </div>
      </header>
      <Outlet context={{ articles }} />
    </>
  )
}

export default App
