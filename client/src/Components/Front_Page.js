import LoadingButton from '@mui/material/Button';
import "./Front_Page.css"

function Front_Page() {
    const handleClick1 = () =>{
        window.location.replace("http://localhost:3000/createpage")
    }

    const handleClick2= ()=>{
        window.location.replace("http://localhost:3000/readpage")
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

export default Front_Page;