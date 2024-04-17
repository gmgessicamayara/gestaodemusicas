import { FooterComponent } from './components/FooterComponent'
import { HeaderComponent } from './components/HeaderComponent'
import { ListMusicComponent } from './components/ListMusicComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MusicComponent } from './components/MusicComponent'

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
      
        <Routes>
        <Route path='/' element={ <ListMusicComponent/> }></Route>
          <Route path='/musics' element={ <ListMusicComponent/> }></Route>
          <Route path='/add-music' element={ <MusicComponent/> }></Route>
          <Route path='/edit-music/:id' element={ <MusicComponent/> }></Route>

        </Routes>
      
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
