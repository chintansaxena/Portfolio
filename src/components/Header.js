import React from 'react';

const Header = () => {
    return (
        <div className='flex flex-row p-4 m-4 sticky top-0 bg-slate-300 rounded-xl'>
            <div className='px-16 mx-24'>
                <div className='flex'>
                    <img
                        className='w-10 h-10'
                        alt='logo'
                        src='https://www.svgrepo.com/show/439715/copyright-circle-fill.svg'
                    />
                    <h1 className='font-bold m-1 mx-2 text-xl'>Portfolio</h1>
                </div>
            </div>

            <ul className='sm:flex hidden px-1 py-1 gap-1'>
                <li className='px-8 font-semibold text-xl'>
                    About
                </li>

                <li className='px-8 font-semibold text-xl'>
                    Skills
                </li>

                <li className='px-8 font-semibold text-xl'>
                    Experience
                </li>

                <li className='px-8 font-semibold text-xl'>
                    Projects
                </li>

                <li className='px-8 font-semibold text-xl'>
                    Education
                </li>
            </ul>

            <div className='w-1/3 flex justify-end font-semibold text-xl '>
                <h1 className='px-4 py-1 mx-4 rounded-lg bg-opacity-60 bg-purple-800 text-white'>
                    <a href='https://drive.google.com/file/d/1bWdoH-9ztplh4MA6yvywW2HoVBn-vzoW/view?usp=drive_link'
                        target='_bla'
                    >
                        Resume
                    </a>
                </h1>
            </div>
        </div >
    )
}

export default Header;