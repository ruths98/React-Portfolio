import React from 'react'
// import { useState, useEffect } from 'React'
import Portfolio from './portfolio'
import About from './about'
import Contact from './contact'
import Resume from './resume'
import Header from './header'
import Footer from './footer'

//useState stuff here
// const pageContent = () => {
//     const [page, setPage] = useState(About)
// }

//useEffect hook stuff here
// useEffect(() => {
//     alert('called when value of `endpoint` or `id` changes');
//    }, [endpoint, id]);

export default function Main() {
    return (
        <div>
            <Header />
            <About />
            <Footer />
        </div>
    )
}