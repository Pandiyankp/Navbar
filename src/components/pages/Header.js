import {BrowserRouter,Route,Routes} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
// import { Card } from '@mui/material';
import Home from './../page/Home';
import Appcard from "../love/Appcard"



function Header() {


        
        return ( <> 
   
           <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path='/' /> 
            <Route exact path='/About' element={<About/>}/>
            <Route exact path='/Service' element={<Service/>}/>
            <Route exact path='/Contact' element={<Contact/>}/>
            
        </Routes>
<Home/>

<Appcard/>
        </BrowserRouter>

        
    </> );
}

export default Header;