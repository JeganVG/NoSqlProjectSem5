import Button from '@mui/material/Button';
import "./Create_Page1.css"

function CreatePage () {
    const handleClick = ()=> {
        window.location.replace("http://localhost:3000/")
    }

    const DeptPage = ()=>{
      window.location.replace("http://localhost:3000/CreateDepartments/")
    }

    const VideoPage = ()=>{
        window.location.replace("http://localhost:3000/CreateVideos/")
    }

    const YoutuberPage = ()=>{
        window.location.replace("http://localhost:3000/CreateYoutuber/")
    }

    const ViewersPage = ()=>{
        window.location.replace("http://localhost:3000/CreateViewers/")
    }

    const MembersPage = ()=>{
        window.location.replace("http://localhost:3000/CreateMembers/")
    }

    return(
        <div className="Create_Page1">
            <div className="Sub_Page_Create1">
                <br></br>
                <br></br>
                <div className="Create_Title">
                    <h1 className="text">Create Query Window</h1>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Button variant="contained" className="Dept" color="success" onClick={DeptPage}>Departments</Button><br></br><br></br>
                <Button variant="contained" className="Videos" color="success" onClick={VideoPage}>Videos</Button><br></br><br></br>
                <Button variant="contained" className="Viewers" color="success" onClick={ViewersPage}>Viewers</Button><br></br><br></br>
                <Button variant="contained" className="Members" color="success" onClick={MembersPage}>Members</Button><br></br><br></br>
                <Button variant="contained" className="Youtubers" color="success" onClick={YoutuberPage}>Youtubers</Button>
            </div>
            <Button variant="contained" className="Back" color="error" onClick={handleClick}>Back</Button>
        </div>
    )
}

export default CreatePage;