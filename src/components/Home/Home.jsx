import React, { useGlobal } from 'reactn';
import { Redirect } from 'react-router-dom'
import { isLogin } from 'helpers/auth'

const Home = props => {
  if (!isLogin()) return <Redirect to="/login" />
  const [username] = useGlobal('username');
  // console.log("test reactn" + test);

  // const [data, setResponseData] = useState([])
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get(BASE_URL)
  //     await setResponseData(result.data)
  //   }
  //   fetchData();
  //   console.log(data)
  // }, [])

  const handleLogout = () => {
    localStorage.clear()
    window.location.href = '/login'
  }

  return (
    <div>
      <br />
      <b>Login successfully!! Welcome back, {username}</b>
      <br />
      <br />
      <button onClick={() => window.location.href = '/update'}>Change password</button>
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}


export default Home;

