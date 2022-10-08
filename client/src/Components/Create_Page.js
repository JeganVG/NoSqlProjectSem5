import Button from '@mui/material/Button';
import "./Create_Page.css"
import React from 'react'

function CreatePage () {
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
                <textarea className="textarea" placeholder="Type Your Create Query Here..." required></textarea><br></br><br></br>
                <Button variant="contained" className="Create" color="error">Create</Button><br></br><br></br>
            </div>
            <Button variant="contained" className="Create" color="error" onClick={handleClick}>Home</Button>
        </div>
    )
}

export default CreatePage;