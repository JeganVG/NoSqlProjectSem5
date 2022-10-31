import Button from '@mui/material/Button';
import "./Video_Page.css"
import {useState} from 'react'

function CreatePage () {

    const DeptPage = ()=>{
      window.location.replace("http://localhost:3000/updatepage/")
    }
    const [Channel_Name, setChannel_Name] = useState('');
    const [Total_Dislikes, setTotal_Dislikes] = useState('');
    const [Total_Likes, setTotal_Likes]= useState('');
    const [Videosarray, setVideos]= useState('');
    const [Youtuber_ID, setYoutuber_ID]= useState('');
    const [Youtuber_Name, setYoutuber_Name]= useState('');
    const handlesubmit = (e) =>{
        const Videos = Videosarray.split(',');
        e.preventDefault();
        const blog = {Channel_Name, Total_Dislikes, Total_Likes, Videos, Youtuber_ID, Youtuber_Name};
        
        fetch('http://localhost:3001/api/UpdateYoutuber',{
            method:'PUT',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('UPDATED');
        })
        setChannel_Name('');
        setTotal_Dislikes('');
        setTotal_Likes('');
        setVideos('');
        setYoutuber_ID('');
        setYoutuber_Name('');
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
                <form  method="post">
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Channel Name</label><br></br><br></br>
                            <input type="text" name="Channel_Name" className="textbox" value={Channel_Name} onChange={(e)=>setChannel_Name(e.target.value)}></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Total Dislikes</label><br></br><br></br>
                            <input type="Number" name="Total_Dislikes" className="textbox" value={Total_Dislikes} onChange={(e)=>setTotal_Dislikes(e.target.value)}></input><br></br><br></br>
                        </td>
                    </table>
                    <br></br>
                    <br></br>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Total Likes</label><br></br><br></br>
                            <input type="Number" name="Total_Likes" className="textbox" value={Total_Likes} onChange={(e)=>setTotal_Likes(e.target.value)}></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Videos</label><br></br><br></br>
                            <input type="text" name="Videosarray" className="textbox" value={Videosarray} onChange={(e)=>setVideos(e.target.value)}></input><br></br><br></br>
                        </td>
                    </table>
                    <br></br>
                    <br></br>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Youtuber Id</label><br></br><br></br>
                            <input type="text" name="Youtuber_ID" className="textbox" value={Youtuber_ID} onChange={(e)=>setYoutuber_ID(e.target.value)}></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Youtuber Name</label><br></br><br></br>
                            <input type="text" name="Youtuber_Name" className="textbox" value={Youtuber_Name} onChange={(e)=>setYoutuber_Name(e.target.value)}></input><br></br><br></br>
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