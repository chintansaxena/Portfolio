import React from 'react';

const Header = () => {
    return (
        <div className='flex flex-row p-4 m-4 sticky top-0 bg-slate-200 rounded-xl overflow-hidden z-10'>
            <div className='px-16 mx-24'>
                <div className='flex hover:translate-y-1 transition-all'>
                    <img
                        className='w-10 h-10'
                        alt='logo'
                        src='https://www.svgrepo.com/show/439715/copyright-circle-fill.svg'
                    />
                    <h1 className='font-bold m-1 mx-2 text-xl'>
                        <a href='/'>
                            Portfolio
                        </a>
                    </h1>
                </div>
            </div>

            <ul className='sm:flex hidden px-1 py-1 gap-1'>
                <li className='px-8 font-semibold text-xl hover:bg-slate-300 rounded-xl hover:translate-y-1 transition-all'>
                    <a href='#about'
                        target='_self'
                    >
                        About
                    </a>
                </li>
                <li className='px-8 font-semibold text-xl  hover:bg-slate-300 rounded-xl hover:translate-y-1 transition-all'>
                    <a href='#skills'
                        target='_self'
                    >
                        Skills
                    </a>
                </li>

                <li className='px-8 font-semibold text-xl  hover:bg-slate-300 rounded-xl hover:translate-y-1 transition-all'>
                    <a href='#projects'
                        target='_self'
                    >
                        Projects
                    </a>
                </li>

                <li className='px-8 font-semibold text-xl  hover:bg-slate-300 rounded-xl hover:translate-y-1 transition-all'>
                    <a href='#experience'
                        target='_self'
                    >
                        Experience
                    </a>
                </li>

                <li className='px-8 font-semibold text-xl  hover:bg-slate-300 rounded-xl hover:translate-y-1 transition-all'>
                    <a href='#education'
                        target='_self'
                    >
                        Education
                    </a>
                </li>
            </ul>

            <div className='w-1/3 flex justify-end font-semibold text-xl '>
                <h1 className='px-4 py-1 mx-4 rounded-lg bg-opacity-60 bg-purple-800 text-white hover:bg-purple-950 hover:translate-y-1 transition-all'>
                    <a href='https://drive.google.com/file/d/17j4ov70ippXufeZtL59oUkS9glWi-RbN/view?usp=sharing'
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