import Button from '@mui/material/Button';
import React from 'react';
import "./Read_Page.css"
function UpdatePage () {
    const handleClick = ()=> {
        window.location.replace("http://localhost:3000/")
    }
    const handle1 =(e)=>{
        e.preventDefault();
        window.location.replace("http://localhost:3000/updatepage/UpdateDept")
    }
    const handle2 =(e)=>{
        e.preventDefault();
        window.location.replace("http://localhost:3000/updatepage/UpdateViewers")
    }
    const handle3 =(e)=>{
        e.preventDefault();
        window.location.replace("http://localhost:3000/updatepage/UpdateVideos")
    }
    const handle4 =(e)=>{
        e.preventDefault();
        window.location.replace("http://localhost:3000/updatepage/UpdateYoutubers")
    }
    const handle5 =(e)=>{
        e.preventDefault();
        window.location.replace("http://localhost:3000/updatepage/UpdateMembers")
    }
    return(
        <div className="Read_Page">
            <div className="Sub_Page_Read">
                <br></br>
                <br></br>
                <div className="Read_Title">
                    <h1 className="text">Read Query Window</h1>
                </div>
                <br></br>
                <br></br>
                <form >
                {/* <label className="label">Set Attribute 1</label><br></br><br></br>
                <input type="text" name="Department_ID" className="textbox"></input><br></br><br></br>
                <label className="label">Set Attribute 2</label><br></br><br></br>
                <input type="text" name="Department_Name" className="textbox"></input><br></br><br></br> */}
                <Button type="submit" variant="contained" className="button" onClick={handle1}>Update Department</Button><br></br><br/>
                <Button type="submit" variant="contained" className="button" onClick={handle2}>Update Viewers</Button><br></br><br/>
                <Button type="submit" variant="contained" className="button" onClick={handle3}>Update Videos</Button><br></br><br/>
                <Button type="submit" variant="contained" className="button" onClick={handle4}>Update Youtubers</Button><br></br><br/>
                <Button type="submit" variant="contained" className="button" onClick={handle5}>Update Members</Button><br></br><br/>
                </form>
            </div>
            <Button variant="contained" className="Back" color="error" onClick={handleClick}>Back</Button>
        </div>
    );
}
export default UpdatePage;