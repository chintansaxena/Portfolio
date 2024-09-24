import React from 'react'

const Projects = () => {
    return (
        <div>

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
                Projects
            </div>
            <div className='text-center text-xl font-mono m-2 p-1'>
                Crafting engaging digital experiences, one project at a time.
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mx-16 my-12'>

                <div className='p-6 rounded-lg border border-gray-800 shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] hover:bg-gray-200 text-black bg-white ease-out hover:translate-y-1 transition-all'>
                    <h2 className='text-center font-serif font-bold text-xl my-2'>MyflixGPT </h2>
                    <span>
                        Inspired from Netflix, made a movie recommendation service using <b><em>Reactjs & Redux.</em></b> Leveraged <b><em>TMDB API</em></b> for movie data and <b><em>GPT-3</em></b> for personalized suggestions. Built a <b><em>Firebase</em></b> backend for user <b><em>authentication</em></b> and deployment.
                    </span>
                    <div className='flex flex-row justify-between text-lg mt-4'>
                        <h1 className='px-4 py-1 mx-4 rounded-lg bg-opacity-60 bg-purple-800 text-white'>
                            <a href='https://myflix-gpt.netlify.app/'
                                target='_blau'
                            >
                                Live link
                            </a>
                        </h1>
                        <h1 className='px-4 py-1 mx-4 rounded-lg bg-opacity-60 bg-purple-800 text-white'>
                            <a href='https://github.com/chintansaxena/Netflix-GPT'
                                target='_blat'
                            >
                                Repo link
                            </a>
                        </h1>
                    </div>
                </div>
                <div className='p-6 rounded-lg border border-gray-800 shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] hover:bg-gray-200 text-black bg-white ease-out hover:translate-y-1 transition-all'>
                    <h2 className='text-center font-bold text-xl my-2 font-serif'>YouThoob </h2>
                    <span>
                        A YouTube like high-performance video streaming platform created using <b><em>React.js & Redux.</em></b> Integrated <b><em>YouTube's API</em></b> for popular videos and search suggestions, optimizing search with <b><em>debouncing & caching.</em></b> Implemented real-time chat for a seamless user experience.
                    </span>
                    <div className='flex flex-row justify-between text-lg mt-4'>
                        <h1 className='px-4 py-1 mx-4 rounded-lg bg-opacity-60 bg-purple-800 text-white'>
                            <a href='https://youthoobh.netlify.app/'
                                target='_blas'
                            >
                                Live link
                            </a>
                        </h1>
                        <h1 className='px-4 py-1 mx-4 rounded-lg bg-opacity-60 bg-purple-800 text-white'>
                            <a href='https://github.com/chintansaxena/Youthoob'
                                target='_blar'
                            >
                                Repo link
                            </a>
                        </h1>
                    </div>
                </div>
                <div className='p-6 rounded-lg border border-gray-800 shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] hover:bg-gray-200 text-black bg-white ease-out hover:translate-y-1 transition-all'>
                    <h2 className='text-center font-bold text-xl my-2 font-serif'>Food Ordering Web App </h2>
                    <span>
                        Developed a scalable food ordering app using <b><em>React.js, Parcel, Babel</em></b> and <b><em>Redux.</em></b> Integrated <b><em>Swiggy's live API</em></b> for restaurant data. Prioritized user experience with smooth loading transitions and optimized performance through <b><em>code splitting & lazy loading.</em></b>
                    </span>
                    <div className='flex flex-row justify-between text-lg mt-4'>
                        <h1 className='px-4 py-1 mx-4 rounded-lg bg-opacity-60 bg-purple-800 text-white'>
                            <a href='_blaq'
                                target='_blap'
                            >
                                Live link
                            </a>
                        </h1>
                        <h1 className='px-4 py-1 mx-4 rounded-lg bg-opacity-60 bg-purple-800 text-white'>
                            <a href='https://github.com/chintansaxena/ReactApp'
                                target='_blao'
                            >
                                Repo link
                            </a>
                        </h1>
                    </div>
                </div>

            </div>
            <div className='flex w-[29%] mx-auto'>
                <div className='p-6 rounded-lg border border-gray-800 shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] hover:bg-gray-200 text-black bg-white ease-out hover:translate-y-1 transition-all'>
                    <h2 className='text-center font-bold text-xl my-2 font-serif'>ScreenStream </h2>
                    <span>
                        Discover globally trending movies and TV shows with ScreenStream. Built with <b><em>React.js & Material UI,</em></b> it offers advanced search, filtering, and a vast database powered by TMDB. Incorporated user-friendly <b><em>modals</em></b> for detailed information and quick actions.
                    </span>
                    <div className='flex flex-row justify-between text-lg mt-4'>
                        <h1 className='px-4 py-1 mx-4 rounded-lg bg-opacity-60 bg-purple-800 text-white'>
                            <a href='https://screenstream.netlify.app/'
                                target='_blam'
                            >
                                Live link
                            </a>
                        </h1>
                        <h1 className='px-4 py-1 mx-4 rounded-lg bg-opacity-60 bg-purple-800 text-white'>
                            <a href='https://github.com/chintansaxena/ScreenStream'
                                target='_blan'
                            >
                                Repo link
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;