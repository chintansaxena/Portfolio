import React from 'react'

const Experience = () => {
    return (
        <div>
            <br></br>
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
                Experience
            </div>
            <div className='text-center text-xl font-mono m-2 p-1'>
                My work experience as as a software engineer working on multiple projects.
            </div>

            <div className='flex flex-row justify-center m-4 my-4 p-4'>
                <div className='p-6 rounded-lg border border-gray-800 text-black w-3/5'>
                    <h2 className='text-2xl font-semibold font-serif mx-4 px-2 mt-2'>
                        Software Engineer
                    </h2>
                    <h4 className='mx-4 px-2 text-lg mb-4'>
                        Coforge | <em>Mar 2021 - Present. </em>
                    </h4>
                    <ul className='mx-12'>
                        <h4 className='text-lg font-medium mb-2'>Assignment : Internal migration.</h4>
                        <li className='ml-3'>
                            • Collaborated on the <b>design and migration of internal applications</b> to React.js, significantly enhancing performance, maintainability, and user experience. Utilized modern JavaScript ES6+ features and React's component-based architecture to streamline development and improve scalability.
                        </li>
                        <li className='ml-3'>
                            • Developed a library of modular, responsive UI components using React.js and Redux, increasing <b>code reusability by 20%</b> and reducing overall development time for new features across the platform.
                        </li>
                        <li className='ml-3'>
                            •  Collaborated closely with<b> UX and Design teams</b> to translate wireframes and user journey insights into interactive, accessible web applications. Ensured project alignment on user needs and business objectives, which contributed to smoother product rollouts.
                        </li>
                        <li className='ml-3'>
                            • Achieved a <b>15% improvement in page load times</b> by implementing code optimization strategies, such as lazy loading, efficient state management with Redux, and code-splitting to improve the overall user experience and performance.
                        </li>
                    </ul>
                    <br></br>
                </div>
            </div>
        </div>
    )
}

export default Experience;
