import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-center text-white">


            <div
                className="p-4 text-center"

            >
                © {new Date().getFullYear()} Copyright:
                <a className="text-white" href="https://www.linkedin.com/in/md-naim-hossen-567679201/"
                >Md Naim Hossen</a
                >
            </div>
        </footer>
    )
}

export default Footer