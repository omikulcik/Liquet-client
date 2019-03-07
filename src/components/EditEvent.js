import React from "react";
import firebase from "../firebase/firebase";
import {Link} from "react-router-dom";
import AdminNav from "./AdminNav";



class EditEvent extends React.Component {

    constructor(){
        super()
        this.state={
            events:[]
        }
    }

    componentWillMount = () => {
        firebase.database().ref("Events").once("value").then((Snapshot) => {
            const events = [];

            Snapshot.forEach(childSnapshot => {
                events.push({
                    evkey: childSnapshot.key,
                    ...childSnapshot.val()})
            });
            this.setState(() => ({events}))
        })
    }

    render(){
        return(
            <div>
                <AdminNav />
                <div className="container">
                    {this.state.events.map((event) => <p key={event.evkey}>{event.name}, {event.date} <Link to={'editevent/'+ event.evkey}>Edit</Link></p>)}
                </div>
            </div>
        )
    }

}

export default EditEvent