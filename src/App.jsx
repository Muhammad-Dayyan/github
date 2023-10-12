

import './App.css'

import { Route, Routes } from 'react-router-dom'
import HomePage from './component/home'

import NotFound from './component/NotFound'




function App() {

  return (
    <>
<Routes>
 
  <Route  path='/' element={<HomePage/>}/>
  <Route path='*' element={<NotFound/>}/>
</Routes>
    </>
  )
}

export default App
             










// const [searchInput, setSearchInput] = useState("")
// const [githubData, setGithubData] = useState({})

// useEffect(() => {
//   console.log('hello')
//   callApi("")
// }, [])

// const callApi = async (githubId) => {
//   try {
//     console.log("githubId", githubId)
//     const data = await axios.get(`https://api.github.com/users/${githubId}`)
//     console.log("data", data)
//     setGithubData(data.data)
//   }
//   catch (error) {

//     console.log("error", error);
//   }
// }
// console.log(githubData)

// const handleGithubApi = (e) => {
//   e.preventDefault()
//   console.log("searchInput", searchInput)
//   callApi(searchInput)

// }




// <div className='Heading'>
//         <h1>Github Search User App</h1>
//         </div>
//       <form onSubmit={handleGithubApi}><div className='search-'>
//        <input className='search-input' onChange={(e) => setSearchInput(e.target.value)} type='text' placeholder='Search Username' />
//       </div></form>
//       {githubData.login && (
//         <div className='main-container'>
//            <img src={githubData.avatar_url } alt='Profile' className='profile-image'/>
//           <h2><b>Login:</b>{githubData.login}</h2>
//           <p><b>Name:</b>{githubData.name}</p>
//           <p>Location:{githubData.location}</p>
//           <p>Followers:{githubData.followers}</p>
//           <p>Following: {githubData.following}</p>
//           <p>Public Repositories: {githubData.public_repos}</p>
//           <p>Profile URL: <a href={githubData.html_url}>{githubData.html_url}</a></p>
//           <p>Biography:{githubData.bio}</p>
//           <p>ID:{githubData.id}</p>
//           <p>Company:{githubData.company}</p>

        
//         </div>)}