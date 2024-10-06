import React from 'react'
import Header from './Header'
//import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Footer from './Footer';

const Body = () => {
    return (
        <div>
            <Header />
            <MainContainer />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Footer />
            <div className='text-2xl'>

            </div>
        </div>
    )
}

export default Body;