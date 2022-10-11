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
                    <h1 className="text">Videos</h1>
                </div>
                <br></br>
                <br></br>
                <form action="http://localhost:3001/api/CreateVideos" method="post" autocomplete="off">
                    <label className="label">Video ID</label><br></br><br></br>
                    <input type="text" name="Video_ID" className="textbox"></input><br></br><br></br>
                    <label className="label">Genre</label><br></br><br></br>
                    <input type="text" name="Genre" className="textbox"></input><br></br><br></br>
                    <label className="label">REVENUE COLLECTED</label><br></br><br></br>
                    <input type="Number" name="Revenue_Collected" className="textbox"></input><br></br><br></br>
                    <label className="label">TOTAL LIKES</label><br></br><br></br>
                    <input type="Number" name="Total_Likes" className="textbox"></input><br></br><br></br>
                    <label className="label">TOTAL DISLIKES</label><br></br><br></br>
                    <input type="Number" name="Total_Dislikes" className="textbox"></input><br></br><br></br>
                    <label className="label">VIDEO NAME</label><br></br><br></br>
                    <input type="text" name="Video_Name" className="textbox"></input><br></br><br></br>
                    <label className="label">YOUTUBER ID</label><br></br><br></br>
                    <input type="text" name="Youtuber_ID" className="textbox"></input><br></br><br></br>
                    
                    <button type="submit" className="label">INSERT</button>
                </form>
            </div>
            <Button variant="contained" className="Back" color="error" onClick={DeptPage}>Back</Button>
        </div>
    )
}

export default CreatePage;