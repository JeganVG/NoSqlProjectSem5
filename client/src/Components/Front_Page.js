import Button from '@mui/material/Button';
import "./Front_Page.css"
import Marquee from "react-fast-marquee";

function Front_Page() {
    const handleClick1 = () =>{
        window.location.replace("http://localhost:3000/createpage")
    }

    return(
        <div className="Front_Page">
          <Marquee speed={200}><b>This Project Was Done By Jegan And Sweeton From MEPCO Schlenk College Of Engineering, Sivakasi</b></Marquee>
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