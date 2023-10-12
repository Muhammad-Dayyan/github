import React, { useEffect, useState } from 'react'
import '../css/Home.css'
import axios from 'axios'
import img from '../image/logo.png' 

const HomePage=()=>{
    const [searchInput, setSearchInput] = useState("")
    const [githubData, setGithubData] = useState({})
    const [error,setError]=useState(null)
    useEffect(() => {
      console.log('hello')
      callApi("")
    }, [])
  
    const callApi = async (githubId) => {
      try {
        console.log("githubId", githubId)
        const data = await axios.get(`https://api.github.com/users/${githubId}`)
        console.log("data", data)
        setGithubData(data.data)
        setError(null)
      }
      catch (error) {
  
        console.log('error', error);
        setError('User not found');
        setGithubData({});
        window.alert('User not found');
       
      }
    }
    console.log(githubData)
  
    const handleGithubApi = (e) => {
      e.preventDefault()
      console.log("searchInput", searchInput)
      callApi(searchInput)
   
    }
    return(
        <>
        <div className="img">
       <img src={img} width="8%"></img>
        </div>
        <div className='Heading'>
        <h1>Github Search User App</h1>
        </div>
            <div className="main">

      <form onSubmit={handleGithubApi}><div className='searc-'>
       <input className='search-input' onChange={(e) => setSearchInput(e.target.value)} type='text' placeholder='Search Username' />
      </div></form>
    
      {githubData.login && (
        <div className='main-container'>
           <img src={githubData.avatar_url } alt='Profile' className='profile-image'/>
          <h2><b>Login:</b>{githubData.login}</h2>
          <p><b>Name:</b>{githubData.name}</p>
          <p>Location:{githubData.location}</p>
          <p>Followers:{githubData.followers}</p>
          <p>Following: {githubData.following}</p>
          <p>Public Repositories: {githubData.public_repos}</p>
          <p>Profile URL: <a href={githubData.html_url}>{githubData.html_url}</a></p>
          <p>Biography:{githubData.bio}</p>
          <p>ID:{githubData.id}</p>
          <p>Company:{githubData.company}</p>

        
        </div>)}
        </div>
        </>
    )
}

export default HomePage