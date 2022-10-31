import Button from '@mui/material/Button';
import "./Create_Page.css"
import "./Departments.css"
import  {useState} from 'react'

function CreatePage () {

    const DeptPage = ()=>{
      window.location.replace("http://localhost:3000/deletepage")
    }
    const [Department_ID, setDepartment_ID] = useState('');
    const handlesubmit = (e) =>{
        e.preventDefault();
        const blog = {Department_ID};
        
        fetch('http://localhost:3001/api/DeleteDept',{
            method:'DELETE',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('DELETED');
        })
        setDepartment_ID('');
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
                <form>
                    <label className="label">Department Id</label><br></br><br></br>
                    <input type="text" name="Department_ID" className="textbox" value={Department_ID} onChange={(e)=>setDepartment_ID(e.target.value)}></input><br></br><br></br>
                    <button type="submit" className="label" onClick={handlesubmit}>DELETE</button>
                </form>
            </div>
            <Button variant="contained" className="Back" color="error" onClick={DeptPage}>Back</Button>
        </div>
    )
}

export default CreatePage;