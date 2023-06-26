// 
import Header from './components/header/Header'
import AppRouter from './components/AppRouter'
import Footer from './components/footer/Footer'

import './styles/App.css'


const App = () => {
    return (
        <div 
            className="App"
        >
            <Header />
            <div
                className="App_AppRouter"
            >
                <AppRouter />
            </div>
            <Footer />
        </div>
    );
}

export default App
