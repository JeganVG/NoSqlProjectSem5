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
                <form action="http://localhost:3000/api/movie" method="post">
                    <input type="text" name="name">NAME</input><br></br>
                    <input type="text" name="time">TIMING</input><br></br>
                    <input type="number" name="rating">RATING</input><br></br>
                </form>
                <textarea className="textarea" placeholder="Type Your Create Query Here..." required></textarea><br></br><br></br>
                <Button variant="contained" className="Create" color="error">Create</Button><br></br><br></br>
            </div>
            <Button variant="contained" className="Create" color="error" onClick={handleClick}>Home</Button>
        </div>
    )
}

export default CreatePage;