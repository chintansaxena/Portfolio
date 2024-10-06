import React from 'react';
import Chintan from '../static/Chintan.jpg';

const MainContainer = () => {
    return (
        <div className='flex flex-row' id='about'>
            <div className='my-8 py-4 ml-32 pl-16 w-7/12 '>
                <p className='text-5xl font-extrabold'>
                    Hi👋 I am
                </p>
                <br></br>
                <p className='text-5xl font-extrabold'>
                    Chintan Saxena
                </p>
                <br></br>
                <br></br>
                <p className=' text-4xl font-bold'>
                    I 🖤 {' '}
                    <span
                        class="type-adjective font-bold text-blue-800">
                    </span>
                </p>
                <br></br>
                <span>
                    <p className='md:inline-block py-6 w-4/5 text-xl'>
                        <em><b>I</b></em> like to craft solid and scalable frontend products with great user experiences.
                        <br></br>
                        <em><b>Driven</b></em> by a positive outlook and curiosity, I'm dedicated to personal and professional growth and ready to make a lasting impact..
                    </p>
                </span>
            </div>
            <div className='px-2 mx-2 py-2 my-2 overflow-hidden bg-gradient-radial from-[#3b0e68] to-[#1a084e]'>
                <div className='mic-shadow absolute top-1/2 left-2/3 w-[400px] h-[400px] rounded-full -z-10 shadow-[10px_-35px_30px_15px_#823ca6,24px_-10px_27px_10px_#aab3d2,-21px_-25px_97px_10px_#5acee3,51px_5px_17px_10px_#1b7d8f,3px_2px_77px_10px_#f30bf5] animate-shadow-rotate'></div>
                <img
                    className='w-[432px] h-[420px] rounded-full pr-6 mr-96 pt-5 mt-6'
                    alt='main-image'
                    src={Chintan}
                >
                </img>
            </div>
            <div>
                <div className='p-2 m-2 pr-8 flex justify-center items-center'>
                    <ul className='flex w-full justify-around sm:flex-col sm:gap-8 mt-16 pt-8'>
                        <li className='w-12 h-12 bg-white text-black flex justify-center items-center'>
                            <a href='https://www.linkedin.com/in/chintansaxena/'
                                target='_bla'
                            >
                                <img
                                    alt='linkedin logo'
                                    src='https://www.svgrepo.com/show/108614/linkedin.svg'
                                />
                            </a>
                        </li>
                        <li className='w-12 h-12 bg-white text-black flex justify-center items-center'>
                            <a href='https://github.com/chintansaxena'
                                target='_bla'
                            >
                                <img
                                    alt='github logo'
                                    src='https://www.svgrepo.com/show/344880/github.svg'
                                />
                            </a>
                        </li>
                        <li className='w-12 h-12 bg-white text-black flex justify-center items-center'>
                            <a href='mailto:chintansaxena@outlook.com'
                                target='_bla'
                            >
                                <img
                                    alt='mail'
                                    src='https://www.svgrepo.com/show/522169/mail.svg'
                                />
                            </a>
                        </li>
                        <li className='w-12 h-12 bg-white text-black flex justify-center items-center'>
                            <a href='https://x.com/ChintanSaxena98'
                                target='_bla'
                            >
                                <img
                                    alt='linkedin logo'
                                    src='https://seeklogo.com/images/T/twitter-x-logo-577BCAE525-seeklogo.com.png'
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default MainContainer;