import Button from '@mui/material/Button';
import "./Create_Page.css"
import "./Departments.css"

function CreatePage () {

    const DeptPage = ()=>{
      window.location.replace("http://localhost:3000/createpage/")
    }

    return(
        <div className="Create_Page">
            <div className="Sub_Page_Create">
                <br></br>
                <br></br>
                <div className="Create_Title">
                    <h1 className="text">Members</h1>
                </div>
                <br></br>
                <br></br>
                <form action="http://localhost:3001/api/CreateMembers" method="post" autocomplete="off">
                    <label className="label">CHANNEL NAME</label><br></br><br></br>
                    <input type="text" name="Channel_Name" className="textbox"></input><br></br><br></br>
                    <label className="label">DEPARTMENT ID</label><br></br><br></br>
                    <input type="text" name="Department_ID" className="textbox"></input><br></br><br></br>
                    <label className="label">MEMBER ID</label><br></br><br></br>
                    <input type="Number" name="Member_ID" className="textbox"></input><br></br><br></br>
                    <label className="label">MEMBER NAME</label><br></br><br></br>
                    <input type="Number" name="Member_Name" className="textbox"></input><br></br><br></br>
                    <label className="label">VIDEOS WORKED</label><br></br><br></br>
                    <input type="Number" name="Videos_Worked" className="textbox"></input><br></br><br></br>
                
                    <button type="submit" className="label">INSERT</button>
                </form>
            </div>
            <Button variant="contained" className="Back" color="error" onClick={DeptPage}>Back</Button>
        </div>
    )
}

export default CreatePage;