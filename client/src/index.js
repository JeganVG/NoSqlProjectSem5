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
import Viewers from "./Components/Create Pages/Create_Viewers"
import Members from "./Components/Create Pages/Create_Members"
import ReadPage from "./Components/Read Pages/Read_Page"
import {Chart} from "./Components/Aggregation pages/Chart"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/createpage" element={<CreatePage />}/>
    <Route path="/readpage" element={<ReadPage />}/>
    <Route path="/CreateDepartments" element={<Departments/>}/>
    <Route path="/CreateVideos" element={<Videos/>}/>
    <Route path="/CreateYoutuber" element={<Youtuber/>}/>
    <Route path="/CreateViewers" element={<Viewers/>}/>
    <Route path="/CreateMembers" element={<Members/>}/>
    <Route path="/AggregatePage" element={<Chart/>}/>
  </Routes>
</BrowserRouter>
);

reportWebVitals();
