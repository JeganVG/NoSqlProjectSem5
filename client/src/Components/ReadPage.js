import App from "./App.js"
import LoadingButton from '@mui/material/Button';
import "./Readpage.css"

function ReadPage () {
    const handleClick = ()=> {
        window.location.replace("http://localhost:3000/")
    }
    return(
        <div className="ReadPage">
            <div className="subpageread">
                <br></br>
                <br></br>
                <div className="readtitle">
                    <h1 className="text">Read Query Window</h1>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <textarea className="textarea" placeholder="Type Your Read Query Here..." required></textarea><br></br><br></br>
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

export default ReadPage;