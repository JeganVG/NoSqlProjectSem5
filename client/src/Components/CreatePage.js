import App from "./App.js"
import LoadingButton from '@mui/material/Button';
import "./CreatePage.css"

function CreatePage () {
    return(
        <div className="CreatePage">
            <div className="subpagecreate">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <textarea className="textarea" placeholder="Type Your Create Query Here..." required></textarea><br></br><br></br>
                <LoadingButton
                    loading
                    loadingPosition="start"
                    variant="contained"
                    className="Back" >
                    Create
                </LoadingButton>
            </div>
            <LoadingButton
                    loading
                    loadingPosition="start"
                    variant="contained"
                    className="Back" >
                    Back
                </LoadingButton>
        </div>
    )
}

export default CreatePage;