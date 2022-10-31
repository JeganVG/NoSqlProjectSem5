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
"http://localhost:3001/api/ReadMembers")
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
                    <center>
                    <table border={"|||"}>
                      {
                        Object.keys(items.data).map((key) => ( 
                            <tr key = {key} >
                            <td>Channel_Name: { items.data[key].Channel_Name }</td>,  
                            <td>Department_ID: { items.data[key].Department_ID }</td>, 
                            <td>Member_ID: { items.data[key].Member_ID }</td>,
                            <td>Videos_Worked:{items.data[key].Videos_Worked}</td> 
                            </tr> 
                        ))
                    }
                    </table>
                    </center>
                    <Button variant="contained" className="Back" color="error" onClick={handleClick}>Back</Button>
                </div>
            );
        }
}

export default ReadPage;