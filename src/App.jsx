import PersonalData from './Components/PersonalData.jsx'
import Education from './Components/Education.jsx'
import Experience from './Components/Experience.jsx'
import Header from './Components/Header.jsx'

import './Styles/App.css'

function App() {
 

  return (
    <div className='App'>
     <Header/>
     <PersonalData/>
     <Education/>
     <Experience/>

    </div>
  )
}

export default App
