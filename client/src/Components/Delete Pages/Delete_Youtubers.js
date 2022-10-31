import Button from '@mui/material/Button';
import "./Create_Page.css"
import "./Departments.css"
import  {useState} from 'react'

function CreatePage () {

    const DeptPage = ()=>{
      window.location.replace("http://localhost:3000/deletepage")
    }
    const [Youtuber_ID, setYoutuber_ID] = useState('');
    const handlesubmit = (e) =>{
        e.preventDefault();
        const blog = {Youtuber_ID};
        
        fetch('http://localhost:3001/api/deletepage',{
            method:'DELETE',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('DELETED');
        })
        setYoutuber_ID('');
    }

    return(
        <div className="Create_Page">
            <div className="Sub_Page_Create">
                <br></br>
                <br></br>
                <div className="Create_Title">
                    <h1 className="text">Youtuber_ID</h1>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <form>
                    <label className="label">Youtuber_ID</label><br></br><br></br>
                    <input type="text" name="Youtuber_ID" className="textbox" value={Youtuber_ID} onChange={(e)=>setYoutuber_ID(e.target.value)}></input><br></br><br></br>
                    <button type="submit" className="label" onClick={handlesubmit}>DELETE</button>
                </form>
            </div>
            <Button variant="contained" className="Back" color="error" onClick={DeptPage}>Back</Button>
        </div>
    )
}

export default CreatePage;