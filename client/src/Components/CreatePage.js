import App from "./App.js"
import LoadingButton from '@mui/material/Button';
import "./CreatePage.css"

function CreatePage () {
    return(
        <div className="CreatePage">
            <div className="subpagecreate">
                
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