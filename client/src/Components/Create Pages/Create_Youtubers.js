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
                    <h1 className="text">Youtuber</h1>
                </div>
                <br></br>
                <br></br>
                <form action="http://localhost:3001/api/CreateYoutuber" method="post" autocomplete="off">
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Channel Name</label><br></br><br></br>
                            <input type="text" name="Channel_Name" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Total Dislikes</label><br></br><br></br>
                            <input type="Number" name="Total_Dislikes" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <br></br>
                    <br></br>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Total Likes</label><br></br><br></br>
                            <input type="Number" name="Total_Likes" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Videos</label><br></br><br></br>
                            <input type="text" name="Videos" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <br></br>
                    <br></br>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Youtuber Id</label><br></br><br></br>
                            <input type="text" name="Youtuber_ID" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Youtuber Name</label><br></br><br></br>
                            <input type="text" name="Youtuber_Name" className="textbox"></input><br></br><br></br>
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