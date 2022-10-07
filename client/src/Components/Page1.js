import LoadingButton from '@mui/material/Button';
import "./Page1.css"

function page1() {
    const handleClick = () =>{
        window.location.replace("http://localhost:3000/createpage")
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
                    className="Create" onClick={handleClick}>
                    Create
                </LoadingButton><br></br><br></br>
                <LoadingButton
                    loading
                    loadingPosition="start"
                    variant="contained">
                    Read
                </LoadingButton><br></br><br></br>
                <LoadingButton
                    loading
                    loadingPosition="start"
                    variant="contained">
                    Update
                </LoadingButton><br></br><br></br>
                <LoadingButton
                    loading
                    loadingPosition="start"
                    variant="contained">
                    Delete
                </LoadingButton><br></br><br></br>
                <LoadingButton
                    loading
                    loadingPosition="start"
                    variant="contained">
                    Aggregate
                </LoadingButton>
            </div> 
        </div>
    )
}

export default page1;