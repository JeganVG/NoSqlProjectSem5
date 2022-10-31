import Button from '@mui/material/Button';
import React from 'react';
import "./Read_Page.css"
// import {useState} from 'react'
// function ReadPage () {
    const handleClick = ()=> {
        window.location.replace("http://localhost:3000/readpage")
    }
class ReadPage extends React.Component{
   
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    componentDidMount() {
        fetch(
"http://localhost:3001/api/ReadViewers")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render(){
        const { DataisLoaded, items } = this.state;
        console.log("hello");
        console.log(items);
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
            return (
                <div className = "App">
                     {
                        Object.keys(items.data).map((key) => ( 
                        <ol key = {key} >
                            Age: { items.data[key].Age },  
                            Contribution: { items.data[key].Contribution }, 
                            Region: { items.data[key].Region },
                            Videos_Disliked:{items.data[key].Videos_Disliked},
                            Videos_Liked:{items.data[key].Videos_Liked},
                            Viewers_Name:{items.data[key].Viewers_Name}
                            </ol>  
                        ))
                    }
                    <Button variant="contained" className="Back" color="error" onClick={handleClick}>Back</Button>
                </div>
            );
        }
}

export default ReadPage;