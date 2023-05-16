// MainPage

import Header from '../../components/header/Header'
import Repair from '../../components/repair/Repair'
import Footer from '../../components/footer/Footer'

import './MainPage.css'


const MainPage = () => {
    return (
        <div 
            className="MainPage"
        >
            <Header />

            <Repair />

            <Footer />
        </div>
    );
}

export default MainPage
