import React from 'react'
import Header from './Header'
//import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

const Body = () => {
    return (
        <div>
            <Header />
            <MainContainer />
            <div className='text-2xl'>
                Body is here!
            </div>
        </div>
    )
}

export default Body;