// ...existing code...
import React from 'react'

const Education = () => {
    return (
        <section className="px-4 sm:px-8 md:px-16 lg:px-24" id="education">
            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-gray-600" />
                <span className="flex-shrink mx-4 text-gray-400">
                    <img
                        className='w-5 h-5 sm:w-6 sm:h-6'
                        alt='quotes'
                        src='https://www.svgrepo.com/show/149638/double-quotes.svg'
                    />
                </span>
                <div className="flex-grow border-t border-gray-600" />
            </div>

            <h2 className='text-center text-2xl sm:text-4xl font-extrabold m-4 my-8'>
                Education
            </h2>

            <p className='text-center text-sm sm:text-base md:text-xl font-mono m-2 p-1 max-w-3xl mx-auto'>
                Education has shaped my skills and growth. My educational details are as follows.
            </p>

            <div className='flex justify-center m-4 p-4'>
                <article className='p-6 rounded-lg border border-gray-800 text-black w-full sm:w-11/12 md:w-3/4 lg:w-3/5 bg-white shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all'>
                    <header className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                        <h3 className='text-lg sm:text-xl font-semibold font-serif mb-2 sm:mb-0'>
                            Bachelor of Technology,
                        </h3>
                        <h4 className='text-base sm:text-lg font-semibold text-gray-700'>
                            Computer Science & Engineering
                        </h4>
                    </header>

                    <div className='mx-0 sm:mx-4 px-0 sm:px-2 text-sm sm:text-base my-3'>
                        <p className='text-gray-800'>
                            Dr. APJ Abdul Kalam Technical University, <em>Aug 2016 - Sep 2020.</em>
                        </p>
                    </div>

                    <div className='mt-3'>
                        <ul className='list-disc list-inside space-y-2 text-sm sm:text-base'>
                            <li>
                                <strong>Key Courses</strong>: Data Structures, Algorithms, Database Management, Web Development, Software Engineering, Operating Systems, Microprocessors.
                            </li>
                            <li>
                                <strong>Notable Project</strong>: IoT based digital advertisement board powered by Raspberry Pi with web app to update advertisements remotely.
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Education
// ...existing