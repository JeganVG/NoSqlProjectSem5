import Button from '@mui/material/Button';
import "./Video_Page.css"
import { useState } from 'react';

function CreatePage () {

    const DeptPage = ()=>{
      window.location.replace("http://localhost:3000/updatepage")
    }
    const [Video_ID, setVideo_ID] = useState('');
    const [Genre, setGenre] = useState('');
    const [Revenue_Collected, setRevenue_Collected]= useState('');
    const [Total_Likes, setTotal_Likes]= useState('');
    const [Total_Dislikes, setTotal_Dislikes]= useState('');
    const [Total_Views, setTotal_Views]= useState('');
    const [Video_Name, setVideo_Name]= useState('');
    const [Youtuber_ID, setYoutuber_ID]= useState('');
    const handlesubmit = (e) =>{
        e.preventDefault();
        const blog = {Video_ID, Genre, Revenue_Collected, Total_Likes, Total_Dislikes, Total_Views, Video_Name, Youtuber_ID};
        
        fetch('http://localhost:3001/api/UpdateVideos',{
            method:'PUT',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('UPDATED');
        })
        setVideo_ID('');
        setGenre('');
        setVideo_Name('');
        setRevenue_Collected('');
        setTotal_Likes('');
        setTotal_Dislikes('');
        setTotal_Views('');
        setVideo_Name('');
        setYoutuber_ID('');
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
                <form >
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Video Id</label><br></br><br></br>
                            <input type="text" name="Video_ID" className="textbox"value={Video_ID} onChange={(e)=>setVideo_ID(e.target.value)}></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Genre</label><br></br><br></br>
                            <input type="text" name="Genre" className="textbox"value={Genre} onChange={(e)=>setGenre(e.target.value)}></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Revenue Collected</label><br></br><br></br>
                            <input type="Number" name="Revenue_Collected" className="textbox" value={Revenue_Collected} onChange={(e)=>setRevenue_Collected(e.target.value)}></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Total Likes</label><br></br><br></br>
                            <input type="Number" name="Total_Likes" className="textbox" value={Total_Likes} onChange={(e)=>setTotal_Likes(e.target.value)}></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        
                        <td>
                            <label className="label">Total Dislikes</label><br></br><br></br>
                            <input type="Number" name="Total_Dislikes" className="textbox" value={Total_Dislikes} onChange={(e)=>setTotal_Dislikes(e.target.value)}></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Video Name</label><br></br><br></br>
                            <input type="text" name="Video_Name" className="textbox" value={Video_Name} onChange={(e)=>setVideo_Name(e.target.value)}></input><br></br><br></br>
                        </td>
                    </table>
                    <table>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                        <td>
                            <label className="label">Youtuber Id</label><br></br><br></br>
                            <input type="text" name="Youtuber_ID" className="textbox" value={Youtuber_ID} onChange={(e)=>setYoutuber_ID(e.target.value)}></input><br></br><br></br>
                        </td>
                        <td>
                            <label className="label">Total Views</label><br></br><br></br>
                            <input type="Number" name="Total_Views" className="textbox" value={Total_Views} onChange={(e)=>setTotal_Views(e.target.value)}></input><br></br><br></br>
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