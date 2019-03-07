import React from "react";
import EventForm from "./EventForm"
import firebase from "../firebase/firebase"


class EditSingleEvent extends React.Component {

    constructor(){
        super()
        this.state={
        }
    }

    componentWillMount = () => {
        firebase.database().ref("Events/" + this.props.match.params.eventkey).once("value").then((snapshot) => {
            const eventToEdit = snapshot.val();
            this.setState(() => ({eventToEdit}))
        })
    }

    onSubmit = (updates) => {
        firebase.database().ref("Events/" + this.props.match.params.eventkey).update(updates)
    }

    render(){
        return(
            <div>
            {this.state.eventToEdit && <EventForm {...this.state.eventToEdit} btn={"Upravit"} onSubmit={this.onSubmit}/>}
            </div>
        )
    }

}

export default EditSingleEvent