import React from 'react'
import Header from './Header'
//import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';

const Body = () => {
    return (
        <div>
            <Header />
            <MainContainer />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <div className='text-2xl'>

            </div>
        </div>
    )
}

export default Body;