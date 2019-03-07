import React from "react";
import RegistrationForm from "./RegistrationForm";
import firebase from "../firebase/firebase";
import { Button } from 'reactstrap';


class SingleEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            expanded:false,
        }
    }

    handleExpand = () => {
        this.setState(
            (state) => {
                return {
                    expanded: !state.expanded,
                    btn:"Rezervovat místo"
                }
            }
        );
    };

    onSubmit = (registration) => {
        firebase.database().ref("Events/" + this.props.evKey + "/registration").push({...registration})
      };

    render(){
        return(
             <div className={"event col-12"}>
                <div className={"row"}>
                    <div className={"col-5"}>
                        <img src={this.props.img} />
                    </div>
                    <div className={"col-7"} >
                        <h1>{this.props.name}</h1>
                        <p>{this.props.date}</p>
                        <p>{this.props.desc}</p>
                        <p>Obsazenost : {this.props.registeredCount} / 25</p>
                        {this.state.expanded && <RegistrationForm onSubmit={this.onSubmit}/>}
                        <Button color="primary" onClick={this.handleExpand}>Zobrazit více informací</Button>
                    </div>
                </div>

            </div> 
        
        )}
}

export default SingleEvent;