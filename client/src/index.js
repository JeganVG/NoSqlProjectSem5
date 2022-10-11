import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreatePage from './Components/Create_Page';
import Departments from "./Components/Create Pages/Create_Departments"
import Videos from "./Components/Create Pages/Create_Videos"
import Youtuber from "./Components/Create Pages/Create_Youtubers"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/createpage" element={<CreatePage />}/>
    <Route path="/CreateDepartments" element={<Departments/>}/>
    <Route path="/CreateVideos" element={<Videos/>}/>
    <Route path="/CreateYoutuber" element={<Youtuber/>}/>
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
