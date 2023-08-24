<<<<<<< HEAD
=======
// import React from 'react'
// import { Route, Routes, Link } from 'react-router-dom';
// import Home from './Home';
// import Contact from './Contact';
// import Login from './Login';
// import './css/NavBar.css'
// import Register from './Register';
// function NavBar() {
//     return (
//         <React.Fragment>
//             <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
//                 <a class="navbar-brand" href="#">Coding Club</a>
//                 <div class="container">
//                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
//                         <ul class="navbar-nav">
//                             <li class="nav-item active">
//                                 <Link to="/" class="nav-link" href="#">Home</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Blog</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Problem Set</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Profile</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">QR/Scan</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Events</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">About</a>
//                             </li>
//                             <li class="nav-item">
//                                 <Link to="/contact" class="nav-link" >Contact</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//             <Routes>
//                 <Route exact path="/" Component={Home} />
//                 <Route exact path="/contact" Component={Contact} />
//                 <Route exact path="/login" Component={Login}/>
//                 <Route exact path='/register' Component={Register}/>
//             </Routes>
//         </React.Fragment>
//     )
// }

// export default NavBar

>>>>>>> 60a321bd626918ae7c4f184fb8d8b375ee004b06
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Login from './Login';
import './css/NavBar.css';
import Register from './Register';

function NavBar() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <a className="navbar-brand" href="#">Coding Club</a>
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
<<<<<<< HEAD
                        <ul className="navbar-nav text-left">
=======
                        <ul className="navbar-nav">
>>>>>>> 60a321bd626918ae7c4f184fb8d8b375ee004b06
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                 <a class="nav-link" href="#">Problem Set</a>
                            </li>
                             <li class="nav-item">
                                 <a class="nav-link" href="#">Profile</a>
                             </li>
                             <li class="nav-item">
                                 <a class="nav-link" href="#">QR/Scan</a>
                             </li>
                             <li class="nav-item">
                                 <a class="nav-link" href="#">Events</a>
                             </li>
                             <li class="nav-item">
                                 <a class="nav-link" href="#">About</a>
                             </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
            <Route exact path="/" Component={Home} />
                 <Route exact path="/contact" Component={Contact} />
                 <Route exact path="/login" Component={Login}/>
                 <Route exact path='/register' Component={Register}/>
            </Routes>
        </React.Fragment>
    )
}

<<<<<<< HEAD
export default NavBar;
=======
export default NavBar;
>>>>>>> 60a321bd626918ae7c4f184fb8d8b375ee004b06
