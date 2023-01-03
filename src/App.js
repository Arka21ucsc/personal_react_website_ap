
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Experience from './components/Experience';
function App() {
  return (
    <>
   <Routes>
    <Route path = "/personal_react_website_ap" element = {<Layout/>}>
    <Route index element = {<Home/>} />
    <Route path = "personal_react_website_ap/about" element = {<About/>} />
    <Route path= "personal_react_website_ap/contact" element = {<Contact/>} />
    <Route path= "personal_react_website_ap/hobbies" element = {<Hobbies/>} />
    <Route path ="personal_react_website_ap/projects" element = {<Projects/>}/>
    <Route path ="personal_react_website_ap/experience" element = {<Experience/>}/>
    </Route>
   </Routes>
   </>

  )
}

export default App;
