import Button from '@mui/material/Button';
import "./Create_Page.css"
import React from 'react'

function AggregatePage () {
    const handleClick = ()=> {
        window.location.replace("http://localhost:3000/")
    }
    return(
        <div className="Create_Page">
            <div className="Sub_Page_Create">
                <br></br>
                <br></br>
                <div className="Create_Title">
                    <h1 className="text">Create Query Window</h1>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {/* <form action="http://localhost:3001/api/Dept" method="post">
                    <label>DEPARTMENT ID :<input type="text" name="Department_ID"></input><br></br></label>
                    <label>DEPARTMENT NAME :<input type="text" name="Department_Name"></input><br></br></label>
                    <label>MEMBERS :<input type="text" name="Members"></input><br></br></label>
                    <label>VIDEOS WORKED :<input type="text" name="Videos_Produced"></input><br></br></label>
                    <Button type="submit" variant="contained" className="Create" color="error">Create</Button><br></br><br></br>
                </form> */}
                {/* <textarea className="textarea" placeholder="Type Your Create Query Here..." required></textarea><br></br><br></br> */}
                
            </div>
            <Button variant="contained" className="Create" color="error" onClick={handleClick}>Home</Button>
        </div>
    )
}

export default AggregatePage;