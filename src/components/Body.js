import React from 'react'
import Header from './Header'
//import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import Skills from './Skills';

const Body = () => {
    return (
        <div>
            <Header />
            <MainContainer />
            <Skills />
            <div className='text-2xl'>

            </div>
        </div>
    )
}

export default Body;