import LoadingButton from '@mui/material/Button';
import "./CreatePage.css"

function CreatePage () {
    const handleClick = ()=> {
        window.location.replace("http://localhost:3000/")
    }
    return(
        <div className="CreatePage">
            <div className="subpagecreate">
                <br></br>
                <br></br>
                <div className="createtitle">
                    <h1 className="text">Create Query Window</h1>
                </div>
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
                    className="Back" onClick={handleClick}>
                    Home
                </LoadingButton>
        </div>
    )
}

export default CreatePage;