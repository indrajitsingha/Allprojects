import React from "react";
import Movieapp from "./componenet/movieApp/Movieapp";
import Navbar from "./componenet/Navbar";
import Galleryapp from "./componenet/unsplash/Galleryapp";
// import Displaydata from "./componenet/Displaydata";
import Basicform from "./componenet/loginform/Basicform";
// import Myprops from "./Myprops";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Getsepecific from "./componenet/movieApp/Getsepecific";
import Singlepage from "./componenet/movieApp/Singlepage";
import Weatherapp from "./componenet/Weather/Weatherapp";
import Filterdata from "./componenet/filterdata/Filterdata";
import User from "./componenet/User/User";
import Quiz from "./componenet/quizapp/Quiz";
import Showuser from "./componenet/curdapp/Showuser";
import Addaauser from "./componenet/curdapp/Addaauser";
import Homeuser from "./componenet/curdapp/Homeuser";
import Quotes from "./componenet/RandomQuotes/Quotes";
import NavbarFuser from "./componenet/Firebase Curd app/NavbarFuser";
import AddFuser from "./componenet/Firebase Curd app/AddFuser";
import ShowFuser from "./componenet/Firebase Curd app/ShowFuser";
import Contextfile from "./componenet/Firebase Curd app/Contextfile";
import Bmicalculator from "./componenet/BMI Calculator/Bmicalculator";

function App(){

  return(
    <>
    {/* <Navbar/> */}
    {/* <Displaydata /> */}
    {/* <Basicform/> */}
    {/* <Galleryapp/> */}
    {/* <Movieapp/> */}
    {/* <Getsepecific/> */}

    <BrowserRouter>
    <Contextfile>
    <Navbar/> 
      <Routes>
        <Route path="/" element={<Basicform/>}/>
        <Route path="movieapp" element={<Movieapp/>}/>
        <Route path="/movieapp/movieapp/:movie_id" element={<Getsepecific/>}/>
        <Route path="galleryapp" element={<Galleryapp/>}/>
        <Route path="Weatherapp" element={<Weatherapp/>}/>
        <Route path="filterapp" element={<Filterdata/>}/>
        <Route path="user" element={<User/>}/>
        <Route path="quiz" element={<Quiz/>}/>
       

        <Route path="homeuser" element={<Homeuser/>}>
            <Route index  element ={<Showuser/>} />
            <Route path="adduser"  element ={<Addaauser/>} />
       </Route>
      <Route path="Quotes" element={<Quotes/>}/>

      
      <Route path="Firebasecurd" element={<NavbarFuser/>}>
            <Route index  element ={<ShowFuser/>} />
            <Route path="addfuser"  element ={<AddFuser/>} />
       </Route>
       
       <Route path="BMICalculator" element={<Bmicalculator/>}/>
        <Route path="*" element={<div><h1>page not found</h1></div>}/>
         
      </Routes>
      </Contextfile>
    </BrowserRouter> 

    

    </>
  );
}

export default App;