import React from "react";
import SingleEvent from "./SingleEvent";
import Navigation from "./Navigation"
import firebase from "../firebase/firebase";
import { Spinner } from 'reactstrap';
import "../scss/events.scss";




class Events extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            events:[],
            isFetching: true,
        }
    }    

    componentWillMount = () => {
        firebase.database().ref("Events").once("value").then((snapshot) => {
           const events = [];

           snapshot.forEach((childSnapshot) => {
               events.push({
                   key: childSnapshot.key,
                   evKey: childSnapshot.key,
                   name: childSnapshot.val().name,
                   desc: childSnapshot.val().desc,
                   date: childSnapshot.val().date,
                   registeredCount: childSnapshot.val().registration ? Object.values(childSnapshot.val().registration).length : 0,
               });
            });
           this.setState(() => ({events}));
           this.setState(() => ({isFetching: false}))
       })
    }

    render(){
        return(  
    <div className={"container"}>
        <Navigation />
        {document.title="Events"}
        <p>
        Those are the upcomming events:</p>
        <div className={"row"} >
            {this.state.isFetching ? <Spinner size="sm" color="primary" children=""/> : this.state.events.map((event) => <SingleEvent  {...event} img={"/img/preview.jpg"} />)}
        </div>
      
    </div>
)}}

export default Events;