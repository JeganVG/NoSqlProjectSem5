import Button from '@mui/material/Button';
import "./Create_Page.css"
import "./Departments.css"
import {useState} from 'react'

function CreatePage () {

    const DeptPage = ()=>{
      window.location.replace("http://localhost:3000/updatepage")
    }
    var [Age, setAge] = useState('');
    var [Contribution, setContribution] = useState('');
    const [Region, setRegion]= useState('');
    const [Videos_Dislikedarray, setVideos_Disliked]= useState('');
    const [Videos_Likedarray, setVideos_Liked]= useState('');
    const [Viewer_Name, setViewers_Name]= useState('');
    const handlesubmit = (e) =>{
        Age=parseInt(Age)
        Contribution=parseInt(Contribution)
        const Videos_Disliked =Videos_Dislikedarray.split(','); 
        const Videos_Liked = Videos_Likedarray.split(',');
        e.preventDefault();
        const blog = {Age, Contribution, Region, Videos_Disliked, Videos_Liked, Viewer_Name};
        console.log(blog);
        
        fetch('http://localhost:3001/api/UpdateViewers',{
            method:'PUT',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('UPDATED');
        })
        setAge('');
        setContribution('');
        setRegion('');
        setVideos_Disliked('');
        setVideos_Liked('');
        setViewers_Name('');
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
                <form method="post" >
                <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">AGE</label><br></br><br></br>
                            <input type="Number" name="Age" className="textbox" value={parseInt(Age)} onChange={(e)=>setAge(e.target.value)}></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">CONTRIBUTION</label><br></br><br></br>
                            <input type="Number" name="Contribution" className="textbox" value={parseInt(Contribution)} onChange={(e)=>setContribution(e.target.value)}></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">REGION</label><br></br><br></br>
                            <input type="text" name="Region" className="textbox" value={Region} onChange={(e)=>setRegion(e.target.value)}></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">VIDEOS DISLIKED</label><br></br><br></br>
                            <input type="String" name="Videos_Dislikedarray" className="textbox" value={Videos_Dislikedarray} onChange={(e)=>setVideos_Disliked(e.target.value)}></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">VIDEOS LIKED</label><br></br><br></br>
                            <input type="text" name="Videos_Likedarray" className="textbox" value={Videos_Likedarray} onChange={(e)=>setVideos_Liked(e.target.value)}></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">VIEWERS NAME</label><br></br><br></br>
                            <input type="text" name="Viewer_Name" className="textbox" value={Viewer_Name} onChange={(e)=>setViewers_Name(e.target.value)}></input><br></br><br></br>
                        </td>
                    </table>                    
                    <button type="submit" className="label" onClick={handlesubmit}>UPDATE</button>
                </form>
            </div>
            <Button variant="contained" className="Back" color="error" onClick={DeptPage}>Back</Button>
        </div>
    )
}

export default CreatePage;