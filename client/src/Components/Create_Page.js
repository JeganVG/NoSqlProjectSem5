import Button from '@mui/material/Button';
import "./Create_Page.css"

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
                <Button variant="contained" className="Dept" color="success" onClick={DeptPage}>Departments</Button><br></br><br></br>
                <Button variant="contained" className="Videos" color="success" onClick={VideoPage}>Videos</Button><br></br><br></br>
                <Button variant="contained" className="Viewers" color="success">Viewers</Button><br></br><br></br>
                <Button variant="contained" className="Members" color="success">Members</Button><br></br><br></br>
                <Button variant="contained" className="Youtubers" color="success" onClick={YoutuberPage}>Youtubers</Button>
            </div>
            <Button variant="contained" className="Back" color="error" onClick={handleClick}>Back</Button>
        </div>
    )
}

export default CreatePage;