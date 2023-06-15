import React from 'react'
// import { useState, useEffect } from 'React'
import Portfolio from './portfolio'
// import About from './about'
// import Contact from './contact'
// import Resume from './resume'
import Header from './header'
import Footer from './footer'

//useState stuff here
// const pageContent = () => {
//     const [page, setPage] = useState(About)
// }

// const clickedTab = ()=> {
// const [tab, setTab] = useState(About)
// }

//useEffect hook stuff here
// useEffect(() => {
//     alert('called when value of `endpoint` or `id` changes');
//    }, [endpoint, id]);
//the function pageTitle is a state hook with the object being name and the function running that will change the value of name is setName
// function pageTitle(){
//     const [name, setName] = useState('');
    
//     useEffect(() => {
//     document.title = `${clickedTab}`;
//     })
// }

export default function Main() {
    return (
        <div>
            <Header />
            <Portfolio />
            <Footer />
        </div>
    )
}