import Button from '@mui/material/Button';
import "./Create_Page.css"
import "./Departments.css"
import  {useState} from 'react'

function CreatePage () {

    const DeptPage = ()=>{
      window.location.replace("http://localhost:3000/UpdateDept")
    }
    const [Department_ID, setDepartment_ID] = useState('');
    const [Department_Name, setDepartment_Name] = useState('');
    const [Membersarray, setMembers]= useState('');
    const [Videos_Producedarray, setVideos_Produced]= useState('');
    const handlesubmit = (e) =>{
        const Members=Membersarray.split(',');
        const Videos_Produced=Videos_Producedarray.split(',');
        e.preventDefault();
        const blog = {Department_ID, Department_Name, Members, Videos_Produced};
        
        fetch('http://localhost:3001/api/UpdateDept',{
            method:'PUT',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('NEW BLOG ADDED');
        })
        setDepartment_ID('');
        setDepartment_Name('');
        setMembers('');
        setVideos_Produced('');
    }

    return(
        <div className="Create_Page">
            <div className="Sub_Page_Create">
                <br></br>
                <br></br>
                <div className="Create_Title">
                    <h1 className="text">Departments</h1>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <form  method="post" autocomplete="off">
                    <label className="label">Department Id</label><br></br><br></br>
                    <input type="text" name="Department_ID" className="textbox" value={Department_ID} onChange={(e)=>setDepartment_ID(e.target.value)}></input><br></br><br></br>
                    <label className="label">Department Name</label><br></br><br></br>
                    <input type="text" name="Department_Name" className="textbox" value={Department_Name} onChange={(e)=>setDepartment_Name(e.target.value)}></input><br></br><br></br>
                    <label className="label">Members</label><br></br><br></br>
                    <input type="text" name="Members" className="textbox" value={Membersarray} onChange={(e)=>setMembers(e.target.value)}></input><br></br><br></br>
                    <label className="label">Videos Produced</label><br></br><br></br>
                    <input type="text" name="Videos_Produced" className="textbox" value={Videos_Producedarray} onChange={(e)=>setVideos_Produced(e.target.value)}></input><br></br><br></br>
                    <button type="submit" className="label" onClick={handlesubmit}>UPDATE</button>
                </form>
            </div>
            <Button variant="contained" className="Back" color="error" onClick={DeptPage}>Back</Button>
        </div>
    )
}

export default CreatePage;