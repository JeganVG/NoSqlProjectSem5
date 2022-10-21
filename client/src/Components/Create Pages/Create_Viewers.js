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
                    <h1 className="text">Viewers</h1>
                </div>
                <br></br>
                <br></br>
                <form action="http://localhost:3001/api/CreateViewers" method="post" autocomplete="off">
                <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">AGE</label><br></br><br></br>
                            <input type="Number" name="Age" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">CONTRIBUTION</label><br></br><br></br>
                            <input type="Number" name="Contribution" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">REGION</label><br></br><br></br>
                            <input type="text" name="Region" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">VIDEOS DISLIKED</label><br></br><br></br>
                            <input type="String" name="Videos_Disliked" className="textbox"></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">VIDEOS LIKED</label><br></br><br></br>
                            <input type="String" name="Videos_Liked" className="textbox"></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">VIEWERS NAME</label><br></br><br></br>
                            <input type="String" name="Viewers_Name" className="textbox"></input><br></br><br></br>
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