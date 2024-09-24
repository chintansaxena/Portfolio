import React from 'react'

const Education = () => {
    return (
        <div>
            <br></br>
            <div class="relative flex py-5 items-center">
                <div class="flex-grow border-t border-gray-600 border-"></div>
                <span class="flex-shrink mx-4 text-gray-400">
                    <img
                        className='w-4 h-4'
                        alt='apostrophe'
                        src='https://www.svgrepo.com/show/149638/double-quotes.svg'
                    />
                </span>
                <div class="flex-grow border-t border-gray-600 "></div>
            </div>
            <div className='text-center text-4xl font-extrabold m-4 my-8'>
                Education
            </div>
            <div className='text-center text-xl font-mono m-2 p-1'>
                Education has shaped my skills and growth. My educational details are as follows.
            </div>

            <div>
                <div className='flex flex-row justify-center m-4 my-4 p-4'>
                    <div className='p-6 rounded-lg border border-gray-800 text-black w-3/5'>
                        <p className='flex flex-row'>
                            <h2 className='text-xl font-semibold font-serif ml-4 px-2 mt-2'>
                                Bachelor of Technology,
                            </h2>
                            <h3 className='mr-4 pr-2 mt-2 text-lg font-semibold'>Computer Science & Engineering</h3>
                        </p>

                        <h4 className='mx-4 px-2 text-lg my-2'>
                            Dr. APJ Abdul Kalam Technical University, <em>Aug 2016 - Sep 2020. </em>
                        </h4>
                        <h4>
                            <ul>
                                <li className='mx-8 mb-2'>
                                    <b>Key Courses</b>: Data Structures, Algorithms, Database Management, Web Development, Software Engineering, Operating Systems, Micrprocessors.
                                </li>
                                <li className='mx-8 mb-2'>
                                    <b>Notable Project</b>: IoT based digital advertisement board powered by Raspberry Pi 2 with web app to change advertisements remotely.
                                </li>
                            </ul>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;