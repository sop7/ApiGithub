import axios from "axios"
import {useState} from 'react'
import './App.css'

type GithubData = {
  name: string;
  bio: string;
  avatar_url: string
}



function App() {
  const [username, setUsername] = useState("")
  const [name, setName] = useState("Loading...")
  const [bio, setBio] = useState("Loading...")
  const [avatar_url, setAvatarURL] = useState("Loading...")

  const handelepesquisa = () =>{
    axios.get<GithubData>(`https://api.github.com/users/${username}`).then((response) => {
      setName(response.data.name)
      setBio(response.data.bio)
      setAvatarURL(response.data.avatar_url)
    })
  }

  return (
    <div className="container-geral">
      <div className="container">
        <header className="header-top">Projeto EMIDES2AM         
        </header>

        <main>
          <div className="form">
            <h1>Consumindo Api do Github</h1>
            <input type="text" placeholder="Digite o usuário" onChange={(e) => setUsername(e.target.value)}/>
              <button onClick={handelepesquisa}>Consultar</button>
          </div>
          <div className="conteudo">
            <div>
              <img src={avatar_url}/>
              <h1>{name}</h1>
              <p>{bio}</p>
            </div>
          </div>
        </main>

      </div>
    </div>
  )
}

export default App
