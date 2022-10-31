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
import ReadDept from "./Components/Read Pages/Read_Dept"
import ReadMembers from "./Components/Read Pages/Read_Members"
import ReadViewers from "./Components/Read Pages/Read_Viewers"
import ReadYoutuber from "./Components/Read Pages/Read_Youtubers"
import ReadVideos from "./Components/Read Pages/Read_Videos"
import Aggregation from "./Components/Aggregation pages/Aggregation"
import Agg1 from "./Components/Aggregation pages/Agg1"
import Agg2 from "./Components/Aggregation pages/Agg2"
import UpdatePage from './Components/Update Pages/Update_Page';
import UpdateDept from'./Components/Update Pages/Update_Dept';
import UpdateVideos from'./Components/Update Pages/Update_Videos';
import UpdateViewers from'./Components/Update Pages/Update_Viewers';
import UpdateYoutubers from'./Components/Update Pages/Update_Youtuber';
import UpdateMembers from'./Components/Update Pages/Update_Members';
import DeleteDept from "./Components/Delete Pages/Delete_Department"
import DeleteMembers from "./Components/Delete Pages/Delete_Members"
import DeleteViewers from "./Components/Delete Pages/Delete_Viewers"
import DeleteVideos from "./Components/Delete Pages/Delete_Videos"
import DeleteYoutubers from "./Components/Delete Pages/Delete_Youtubers"
import Deletepage from "./Components/Delete Pages/Delete_Page"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/createpage" element={<CreatePage />}/>
    <Route path="/readpage" element={<ReadPage />}/>
    <Route path="/readpage/ReadDept" element={<ReadDept/>}/>
    <Route path="/CreateDepartments" element={<Departments/>}/>
    <Route path="/CreateVideos" element={<Videos/>}/>
    <Route path="/CreateYoutuber" element={<Youtuber/>}/>
    <Route path="/CreateViewers" element={<Viewers/>}/>
    <Route path="/CreateMembers" element={<Members/>}/>
    <Route path="/AggregatePage" element={<Chart/>}/>,
    <Route path="/readpage/ReadMembers" element={<ReadMembers/>}/> 
    <Route path="/readpage/ReadVideos" element={<ReadVideos/>}/>
    <Route path="/readpage/ReadViewers" element={<ReadViewers/>}/>
    <Route path="/readpage/ReadYoutuber" element={<ReadYoutuber/>}/>
    <Route path="/aggregation" element={<Aggregation/>}/>
    <Route path="/agg1" element={<Agg1/>}/>
    <Route path="/agg2" element={<Agg2/>}/>
    <Route path='/updatepage' element={<UpdatePage/>}/>
    <Route path='/updatepage/UpdateDept' element={<UpdateDept/>}/>
    <Route path='/updatepage/UpdateVideos' element={<UpdateVideos/>}/>
    <Route path='/updatepage/UpdateViewers' element={<UpdateViewers/>}/>
    <Route path='/updatepage/UpdateMembers' element={<UpdateMembers/>}/>
    <Route path='/updatepage/UpdateYoutubers' element={<UpdateYoutubers/>}/>
    <Route path="/deletepage" element={<Deletepage/>}/>
    <Route path="/deletepage/DeleteDept" element={<DeleteDept/>}/>
    <Route path="/deletepage/DeleteViewers" element={<DeleteViewers/>}/>
    <Route path="/deletepage/DeleteVideos" element={<DeleteVideos/>}/>
    <Route path="/deletepage/DeleteYoutubers" element={<DeleteYoutubers/>}/>
    <Route path="/deletepage/DeleteMembers" element={<DeleteMembers/>}/>
  </Routes>
</BrowserRouter>
);

reportWebVitals();
