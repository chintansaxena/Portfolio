import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='bg-slate-900 mt-16 py-16'>
                <div className='px-16 mx-24 mb-4 flex flex-row justify-center'>
                    <h1 className='font-bold m-1 mx-2 text-2xl text-purple-500 font-serif rounded-tl-xl'>
                        <a href='#portfolio'>
                            <em>Chintan Saxena</em>
                        </a>
                    </h1>
                </div>
                <div className='flex flex-row justify-center'>
                    <ul className='sm:flex hidden px-1 py-1 gap-1 text-white'>
                        <li className='px-8 font-normal text-xl'>
                            <a href='#about'>
                                <em>About</em>
                            </a>
                        </li>
                        <li className='px-8 font-normal text-xl'>
                            <a href='#skills'>
                                <em>Skills</em>
                            </a>
                        </li>

                        <li className='px-8 font-normal text-xl'>
                            <a href='#projects'>
                                <em>Projects</em>
                            </a>
                        </li>

                        <li className='px-8 font-normal text-xl'>
                            <a href='#experience'>
                                <em>Experience</em>
                            </a>
                        </li>

                        <li className='px-8 font-normal text-xl'>
                            <a href='#education'>
                                <em>Education</em>
                            </a>
                        </li>
                        <li className='px-8 font-normal text-xl'>
                            <a href='https://drive.google.com/file/d/1bWdoH-9ztplh4MA6yvywW2HoVBn-vzoW/view?usp=drive_link'
                                target='_bla'
                            >
                                <em>Resume</em>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className=' p-2 m-2 pr-8 flex flex-row justify-center mt-8'>
                    <div className='w-10 h-10 mx-4 mt-2'>
                        <a href='https://www.linkedin.com/in/chintansaxena/'
                            target='_bla'
                        >
                            <img
                                alt='linkedin logo'
                                src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png'
                            />
                        </a>
                    </div>
                    <div className='w-14 h-14 mx-4'>
                        <a href='https://github.com/chintansaxena'
                            target='_bla'
                        >
                            <img
                                alt='github logo'
                                src='https://www.svgrepo.com/show/312259/github.svg'
                            />
                        </a>
                    </div>
                    <div className='w-12 h-12 mx-4 mt-3'>
                        <a href='mailto:chintansaxena@outlook.com'
                            target='_bla'
                        >
                            <img
                                alt='mail'
                                src='https://www.svgrepo.com/show/484382/mail-part-3.svg'
                            />
                        </a>
                    </div>
                    <div className='w-10 h-10 mx-4 mt-2'>
                        <a href='https://x.com/ChintanSaxena98'
                            target='_bla'
                        >
                            <img
                                alt='linkedin logo'
                                src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-white-icon.png'
                            />
                        </a>
                    </div>
                    <div className='w-10 h-10 mx-4 mt-2'>
                        <a href='https://www.instagram.com/chintan.saxena/'
                            target='_bla'
                        >
                            <img
                                alt='linkedin logo'
                                src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png'
                            />
                        </a>
                    </div>
                </div>
                <div className='flex flex-row justify-center font-caveat text-white text-lg pt-4'>
                    Made using React & Hooks 🤍
                </div>
            </div >
        </div>
    )
}

export default Footer;