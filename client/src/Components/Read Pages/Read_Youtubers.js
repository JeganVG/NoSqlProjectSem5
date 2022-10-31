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
"http://localhost:3001/api/ReadYoutuber")
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
                            Channel_Name: { items.data[key].Channel_Name },  
                            Total_Likes: { items.data[key].Total_Likes }, 
                            Total_Dislikes: { items.data[key].Total_Dislikes },
                            Videos:{items.data[key].Videos},
                            Youtuber_ID:{items.data[key].Youtuber_ID},
                            Youtuber_Name:{items.data[key].Youtuber_Name}
                            </ol>  
                        ))
                    }
                    <Button variant="contained" className="Back" color="error" onClick={handleClick}>Back</Button>
                </div>
            );
        }
}

export default ReadPage;