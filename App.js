import React from "react"
import Image from './Components/Image'
import Header from './Components/Header'
import AboutSection from './Components/About'
import Interests from './Components/Interests'
import Footer from './Components/footer'

export default function App() {
    return (
    <div className="digital-card">
            <Image />
            <Header />
            <AboutSection />
            <Interests />
            <Footer />
    </div>
    )
}