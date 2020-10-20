import React from 'react'
import Projects from './Projects'
import AboutMe from './AboutMe'
import Contact from './Contacts'

export default function MainPanel(props){
    switch(props.tab){
        case 'Projects':
            return <Projects />
        case 'AboutMe':
            return <AboutMe />
        case 'Contacts':
            return <Contacts />
    }
}