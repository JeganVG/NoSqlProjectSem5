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
                <form action="http://localhost:3001/api/ReadDept" method="get">
                {/* <label className="label">Set Attribute 1</label><br></br><br></br>
                <input type="text" name="Department_ID" className="textbox"></input><br></br><br></br>
                <label className="label">Set Attribute 2</label><br></br><br></br>
                <input type="text" name="Department_Name" className="textbox"></input><br></br><br></br> */}
                <Button type="submit" variant="contained" className="button" >Fetch</Button>
                </form>
            </div>
            <Button variant="contained" className="Back" color="error" onClick={handleClick}>Back</Button>
        </div>
    )
}

export default ReadPage;