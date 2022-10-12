import Button from '@mui/material/Button';
import "./Read_Page.css"

function ReadPage () {
    const handleClick = ()=> {
        window.location.replace("http://localhost:3000/")
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
                <label className="label">Set Attribute 1</label><br></br><br></br>
                <input type="text" name="Department_ID" className="textbox"></input><br></br><br></br>
                <label className="label">Set Attribute 2</label><br></br><br></br>
                <input type="text" name="Department_Name" className="textbox"></input><br></br><br></br>
                <Button variant="contained" className="button" >Fetch</Button>
            </div>
            <Button variant="contained" className="Back" color="error" onClick={handleClick}>Back</Button>
        </div>
    )
}

export default ReadPage;