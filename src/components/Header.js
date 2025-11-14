// ...existing code...
import React, { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-10 bg-slate-200/90 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto flex items-center justify-between p-4 sm:p-6 rounded-xl">
                <div className="flex items-center gap-3">
                    <img
                        className="w-10 h-10"
                        alt="logo"
                        src="https://www.svgrepo.com/show/439715/copyright-circle-fill.svg"
                    />
                    <h1 className="font-bold text-xl">
                        <a href="/">Portfolio</a>
                    </h1>
                </div>

                <nav className="hidden sm:flex gap-2 items-center">
                    <a className="px-4 py-2 text-base font-semibold hover:bg-slate-300 rounded-xl transition-transform hover:translate-y-1" href="#about">About</a>
                    <a className="px-4 py-2 text-base font-semibold hover:bg-slate-300 rounded-xl transition-transform hover:translate-y-1" href="#skills">Skills</a>
                    <a className="px-4 py-2 text-base font-semibold hover:bg-slate-300 rounded-xl transition-transform hover:translate-y-1" href="#projects">Projects</a>
                    <a className="px-4 py-2 text-base font-semibold hover:bg-slate-300 rounded-xl transition-transform hover:translate-y-1" href="#experience">Experience</a>
                    <a className="px-4 py-2 text-base font-semibold hover:bg-slate-300 rounded-xl transition-transform hover:translate-y-1" href="#education">Education</a>
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        className="px-3 py-1 rounded-lg bg-purple-800 text-white text-sm sm:text-base hover:bg-purple-950 transition-transform hover:translate-y-1"
                        href="https://drive.google.com/file/d/12XUL_rhV40HSqfclTA6wMTTiB0rqwZ7x/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>

                    {/* Mobile menu button */}
                    <button
                        className="sm:hidden p-2 rounded-md ring-1 ring-slate-300"
                        aria-label="Toggle menu"
                        onClick={() => setOpen(v => !v)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {open ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {open && (
                <nav className="sm:hidden bg-slate-200/95 border-t border-slate-300">
                    <div className="max-w-6xl mx-auto flex flex-col p-4 gap-2">
                        <a className="px-3 py-2 rounded-lg hover:bg-slate-300" href="#about" onClick={() => setOpen(false)}>About</a>
                        <a className="px-3 py-2 rounded-lg hover:bg-slate-300" href="#skills" onClick={() => setOpen(false)}>Skills</a>
                        <a className="px-3 py-2 rounded-lg hover:bg-slate-300" href="#projects" onClick={() => setOpen(false)}>Projects</a>
                        <a className="px-3 py-2 rounded-lg hover:bg-slate-300" href="#experience" onClick={() => setOpen(false)}>Experience</a>
                        <a className="px-3 py-2 rounded-lg hover:bg-slate-300" href="#education" onClick={() => setOpen(false)}>Education</a>
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Header;
//