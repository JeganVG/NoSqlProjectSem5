import LoadingButton from '@mui/material/Button';
import "./Page1.css"

function page1() {
    const handleClick1 = () =>{
        window.location.replace("http://localhost:3000/createpage")
    }

    const handleClick2= ()=>{
        window.location.replace("http://localhost:3000/readpage")
    }
    return(
        <div className="page1">
            <div className="subpage">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <LoadingButton
                    loading
                    loadingPosition="start"
                    variant="contained"
                    className="Create" onClick={handleClick1}>
                    Create Query
                </LoadingButton><br></br><br></br>
                <LoadingButton
                    loading
                    loadingPosition="start"
                    variant="contained" 
                    className="Read" onClick={handleClick2}>
                    Read Query
                </LoadingButton><br></br><br></br>
                <LoadingButton
                    loading
                    loadingPosition="start"
                    variant="contained">
                    Update Query
                </LoadingButton><br></br><br></br>
                <LoadingButton
                    loading
                    loadingPosition="start"
                    variant="contained">
                    Delete Query
                </LoadingButton><br></br><br></br>
                <LoadingButton
                    loading
                    loadingPosition="start"
                    variant="contained">
                    Aggregate Query
                </LoadingButton>
            </div> 
        </div>
    )
}

export default page1;