import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
// import App from './App';
import BlogContextProvider from './context/contextprovider';
import Header from './components/header';
import Card from './components/card';
import reportWebVitals from './reportWebVitals';
import MostComment from './components/mostcommentpost';
import MostLike from './components/mostlikedpost';
import Footer from './components/footer';
import ProfileCard from './components/profile';
import Post from './components/post';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
   <BrowserRouter>
   < Header/>
    <BlogContextProvider>
      <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path='/profile' element={<ProfileCard/>}/>
        <Route path='/mostlikedpost' element={<MostLike/>}/>
        <Route path='/mostcommentpost' element={<MostComment/>}/>
        <Route path='/post' element={<Post/>}/>
      </Routes>
    </BlogContextProvider>
    < Footer />
   </BrowserRouter>
   
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
