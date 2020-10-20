import React,{useState} from 'react'
import Header from './components/Header'
import MainPanel from './MainPanel'
import Footer from './Footer'

function App(){
    const [tab,setTab] = useState('Projects')

    function handleTabClick(e){
        setTab(e.target.innerHTML)
    }

    return(
        <div className='App'>
            <Header handleTabClick={handleTabClick}/>
            <MainPanel tab={tab}/>
            <Footer />
        </div>
    )
}

export default App;