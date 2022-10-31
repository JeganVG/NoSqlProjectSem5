import Button from '@mui/material/Button';
import "./Create_Page.css"
import "./Departments.css"
import  {useState} from 'react'

function CreatePage () {

    const DeptPage = ()=>{
      window.location.replace("http://localhost:3000/updatepage")
    }
    const [Channel_Name, setChannel_Name] = useState('');
    const [Department_ID, setDepartment_ID] = useState('');
    const [Member_ID, setMember_ID]= useState('');
    const [Member_Name, setMember_Name]= useState('');
    const [Videos_Workedarray, setVideos_Worked]= useState('');
    const handlesubmit = (e) =>{
        const Videos_Worked = Videos_Workedarray.split(',');
        e.preventDefault();
        const blog = {Channel_Name, Department_ID, Member_ID, Member_Name, Videos_Worked};
        
        fetch('http://localhost:3001/api/UpdateMembers',{
            method:'PUT',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then((body)=>{
            console.log(body);
        })
        setChannel_Name('');
        setDepartment_ID('');
        setMember_ID('');
        setMember_Name('');
        setVideos_Worked('');
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
                <form  method="post">
                    <label className="label">CHANNEL NAME</label><br></br><br></br>
                    <input type="text" name="Channel_Name" className="textbox" value={Channel_Name} onChange={(e)=>setChannel_Name(e.target.value)}></input><br></br><br></br>
                    <label className="label">DEPARTMENT ID</label><br></br><br></br>
                    <input type="text" name="Department_ID" className="textbox" value={Department_ID} onChange={(e)=>setDepartment_ID(e.target.value)}></input><br></br><br></br>
                    <label className="label">MEMBER ID</label><br></br><br></br>
                    <input type="text" name="Member_ID" className="textbox" value={Member_ID} onChange={(e)=>setMember_ID(e.target.value)}></input><br></br><br></br>
                    <label className="label">MEMBER NAME</label><br></br><br></br>
                    <input type="text" name="Member_Name" className="textbox" value={Member_Name} onChange={(e)=>setMember_Name(e.target.value)}></input><br></br><br></br>
                    <label className="label">VIDEOS WORKED</label><br></br><br></br>
                    <input type="text" name="Videos_Worked" className="textbox" value={Videos_Workedarray} onChange={(e)=>setVideos_Worked(e.target.value)}></input><br></br><br></br>
                
                    <button type="submit" className="label" onClick={handlesubmit}>INSERT</button>
                </form>
            </div>
            <Button variant="contained" className="Back" color="error" onClick={DeptPage}>Back</Button>
        </div>
    )
}

export default CreatePage;