import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./pages/home/home";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/login' element="Login Page"></Route>
                <Route path='/*' element="404 temporary"></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;