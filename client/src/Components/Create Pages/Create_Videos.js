import Button from '@mui/material/Button';
import "./Video_Page.css"

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
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Video Id</label><br></br><br></br>
                            <input type="text" name="Video_ID" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Genre</label><br></br><br></br>
                            <input type="text" name="Genre" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Genre</label><br></br><br></br>
                            <input type="text" name="Genre" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Revenue Collected</label><br></br><br></br>
                            <input type="Number" name="Revenue_Collected" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Total Likes</label><br></br><br></br>
                            <input type="Number" name="Total_Likes" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Total Dislikes</label><br></br><br></br>
                            <input type="Number" name="Total_Dislikes" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Video Name</label><br></br><br></br>
                            <input type="text" name="Video_Name" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Youtuber Id</label><br></br><br></br>
                            <input type="text" name="Youtuber_ID" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <button type="submit" className="label">INSERT</button>
                </form>
            </div>
            <Button variant="contained" className="Back" color="error" onClick={DeptPage}>Back</Button>
        </div>
    )
}

export default CreatePage;