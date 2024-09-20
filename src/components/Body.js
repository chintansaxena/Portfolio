import React from 'react'
import Header from './Header'
//import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';

const Body = () => {
    return (
        <div>
            <Header />
            <MainContainer />
            <Skills />
            <Projects />
            <Experience />
            <div className='text-2xl'>

            </div>
        </div>
    )
}

export default Body;