// ...existing code...
import React from 'react'

const Projects = () => {
    return (
        <section id="projects" className="px-4 sm:px-6 md:px-12 lg:px-20 py-8">
            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-gray-600" />
                <span className="flex-shrink mx-4 text-gray-400">
                    <img
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        alt="apostrophe"
                        src="https://www.svgrepo.com/show/149638/double-quotes.svg"
                    />
                </span>
                <div className="flex-grow border-t border-gray-600" />
            </div>

            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold m-4 my-6">
                Projects
            </h2>

            <p className="text-center text-sm sm:text-base md:text-lg font-mono m-2 p-1 max-w-3xl mx-auto">
                Crafting engaging digital experiences, one project at a time.
            </p>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 my-8">
                <article className="p-6 rounded-lg border border-gray-800 shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] hover:bg-gray-200 text-black bg-white ease-out hover:translate-y-1 transition-all">
                    <h3 className="text-center font-serif font-bold text-lg sm:text-xl my-2">MyflixGPT</h3>
                    <p className="text-sm sm:text-base leading-relaxed">
                        Inspired from Netflix, made a movie recommendation service using <strong><em>Reactjs & Redux</em></strong>. Leveraged <strong><em>TMDB API</em></strong> for movie data and <strong><em>GPT-3</em></strong> for personalized suggestions. Built a <strong><em>Firebase</em></strong> backend for user <strong><em>authentication</em></strong> and deployment.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-3 mt-4">
                        <a className="px-4 py-2 rounded-lg bg-purple-800 text-white text-center" href="https://myflix-gpt.netlify.app/" target="_blank" rel="noopener noreferrer">Live link</a>
                        <a className="px-4 py-2 rounded-lg bg-purple-800 text-white text-center" href="https://github.com/chintansaxena/Netflix-GPT" target="_blank" rel="noopener noreferrer">Repo link</a>
                    </div>
                </article>

                <article className="p-6 rounded-lg border border-gray-800 shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] hover:bg-gray-200 text-black bg-white ease-out hover:translate-y-1 transition-all">
                    <h3 className="text-center font-serif font-bold text-lg sm:text-xl my-2">YouThoob</h3>
                    <p className="text-sm sm:text-base leading-relaxed">
                        A YouTube-like high-performance video streaming platform created using <strong><em>React.js & Redux</em></strong>. Integrated <strong><em>YouTube's API</em></strong> for popular videos and search suggestions, optimizing search with <strong><em>debouncing & caching</em></strong>. Implemented real-time chat for a seamless user experience.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-3 mt-4">
                        <a className="px-4 py-2 rounded-lg bg-purple-800 text-white text-center" href="https://youthoobh.netlify.app/" target="_blank" rel="noopener noreferrer">Live link</a>
                        <a className="px-4 py-2 rounded-lg bg-purple-800 text-white text-center" href="https://github.com/chintansaxena/Youthoob" target="_blank" rel="noopener noreferrer">Repo link</a>
                    </div>
                </article>

                <article className="p-6 rounded-lg border border-gray-800 shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] hover:bg-gray-200 text-black bg-white ease-out hover:translate-y-1 transition-all">
                    <h3 className="text-center font-serif font-bold text-lg sm:text-xl my-2">Food Ordering Web App</h3>
                    <p className="text-sm sm:text-base leading-relaxed">
                        Developed a scalable food ordering app using <strong><em>React.js, Parcel, Babel</em></strong> and <strong><em>Redux</em></strong>. Integrated <strong><em>Swiggy's live API</em></strong> for restaurant data. Prioritized user experience with smooth loading transitions and optimized performance through <strong><em>code splitting & lazy loading</em></strong>.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-3 mt-4">
                        <a className="px-4 py-2 rounded-lg bg-purple-800 text-white text-center" href="##" target="_blank" rel="noopener noreferrer">Live link</a>
                        <a className="px-4 py-2 rounded-lg bg-purple-800 text-white text-center" href="https://github.com/chintansaxena/ReactApp" target="_blank" rel="noopener noreferrer">Repo link</a>
                    </div>
                </article>
            </div>

            <div className="max-w-3xl mx-auto my-6">
                <article className="p-6 rounded-lg border border-gray-800 shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] hover:bg-gray-200 text-black bg-white ease-out hover:translate-y-1 transition-all">
                    <h3 className="text-center font-serif font-bold text-lg sm:text-xl my-2">ScreenStream</h3>
                    <p className="text-sm sm:text-base leading-relaxed">
                        Discover globally trending movies and TV shows with ScreenStream. Built with <strong><em>React.js & Material UI</em></strong>, it offers advanced search, filtering, and a vast database powered by TMDB. Incorporated user-friendly <strong><em>modals</em></strong> for detailed information and quick actions.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-3 mt-4">
                        <a className="px-4 py-2 rounded-lg bg-purple-800 text-white text-center" href="https://screenstream.netlify.app/" target="_blank" rel="noopener noreferrer">Live link</a>
                        <a className="px-4 py-2 rounded-lg bg-purple-800 text-white text-center" href="https://github.com/chintansaxena/ScreenStream" target="_blank" rel="noopener noreferrer">Repo link</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Projects
//