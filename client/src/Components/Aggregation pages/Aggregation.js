import Button from '@mui/material/Button';
const handleClick = ()=> {
    window.location.replace("http://localhost:3000/agg1")
}
const handleClick1 =()=>{
    window.location.replace("http://localhost:3000/agg2")
}
const handleClick0 =()=>{
    window.location.replace("http://localhost:3000")
}

function Aggregate(){
    return (
        <div>
            <div>
                <center>
                <div style={{}}>
            <h1>YOUTUBERS WITH MOST LIKES</h1>
            <Button variant="contained" className="Back" color="error" onClick={handleClick}>ok</Button>
            </div><br></br><br></br><br></br>
            <h1>GENRES MOST LIKED</h1>
            <Button variant="contained" className="Back" color="error" onClick={handleClick1}>ok</Button><br></br>
            </center>
            <Button variant="contained" className="Back" color="error" onClick={handleClick0}>Back</Button><br></br>
            </div>
        </div>
    )
}

export default Aggregate;