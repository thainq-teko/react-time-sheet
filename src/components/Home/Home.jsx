import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

const BASE_URL = "http://127.0.0.1:5000/allUser"

const Home = props => {
  let username = localStorage.getItem("username")

  const [data, setResponseData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(BASE_URL)
      await setResponseData(result.data)
    }
    fetchData();
    console.log(data)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("username")
  }

  return (
    <div>
      <br />
      hello {username}
      <br />
      <br />
      <button><Link to="/update">doi mat khau</Link></button>
      <button onClick={() => console.log(data)}>data</button>
      <button onClick={handleLogout}><Link to="/login">Log out</Link></button>
      <pre>ádasda</pre>
    </div>
  )
}


export default Home;

