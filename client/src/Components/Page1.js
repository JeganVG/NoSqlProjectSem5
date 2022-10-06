import LoadingButton from '@mui/material/Button';
import SaveIcon from '@mui/material/Button';
import "./Page1.css"

function page1() {
    return(
        <div className="page1">
            <div className="subpage">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <LoadingButton
                    loading
                    variant="contained" >
                    Create
                </LoadingButton><br></br><br></br>
                <LoadingButton
                    loading
                    variant="contained">
                    Read
                </LoadingButton><br></br><br></br>
                <LoadingButton
                    loading
                    variant="contained">
                    Update
                </LoadingButton><br></br><br></br>
                <LoadingButton
                    loading
                    variant="contained">
                    Delete
                </LoadingButton><br></br><br></br>
                <LoadingButton
                    loading
                    variant="contained">
                    Aggregate
                </LoadingButton>
            </div> 
        </div>
    )
}

export default page1;