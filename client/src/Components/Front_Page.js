import Button from '@mui/material/Button';
import "./Front_Page.css"

function Front_Page() {
    const handleClick1 = () =>{
        window.location.replace("http://localhost:3000/createpage")
    }
    return(
        <div className="Front_Page">
            <div className="Sub_Page">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Button variant="contained" className="Create" color="error" onClick={handleClick1}>Create Query</Button><br></br><br></br>
                <Button variant="contained" className="Read" color="error" >Read Query</Button><br></br><br></br>
                <Button variant="contained" className="Update" color="error" >Update Query</Button><br></br><br></br>
                <Button variant="contained" className="Delete" color="error" >Delete Query</Button><br></br><br></br>
                <Button variant="contained" className="Aggregate" color="error" >Aggregate Query</Button><br></br><br></br>
            </div> 
        </div>
    )
}

export default Front_Page;