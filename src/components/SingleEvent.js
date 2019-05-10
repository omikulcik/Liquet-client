import React from "react";
import RegistrationForm from "./RegistrationForm";
import firebase from "../firebase/firebase";
import { Button, Modal, ModalBody, Collapse, Spinner, Alert } from 'reactstrap';


class SingleEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            modal: false,
            collapse: false
        }
    }

    onSubmit = (registration) => {
        this.setState(() => ({isSending:true}))
        firebase.database().ref("Events/" + this.props.evKey + "/registration").push({...registration}).then(() =>
        this.setState(() => ({isSending: false, sent: true}))
        )
      };

    toggle = () => {
    this.setState(prevState => ({
        modal: !prevState.modal
    }));
    }

    collapseToggle = () => {
        this.setState((prevState) => ({collapse: !prevState.collapse}) )
    }

    render(){
        return(
             <div className="event col-12">
                <div className="row">
                    <div className="col-md-5 col-12 order-md-2">
                        <img src={this.props.img}  alt={this.props.imgalt} className="event-preview"/>
                    </div>
                    <div className="col-md-7 col-12">
                        <div className="row no-gutters down-push">
                            <div className="event-info">
                                <h1>{this.props.name}</h1>
                                <p>{this.props.date}</p>
                                <p>Obsazenost : {this.props.registeredCount} / 25</p>
                                <p>{this.props.desc}</p>
                            </div>
                            <div className="btns-holder">
                                <Button  onClick={this.toggle}>Registrovat</Button>
                                <Button className="more-info" onClick={this.collapseToggle}>{this.state.collapse? "Skrýt detaily" : "Více informací"}</Button>
                            </div>
                        </div>
                    </div>
                    <Collapse isOpen={this.state.collapse} className="col-12 order-md-3">
                        {this.state.collapse && <div className="col-12 event-article">
                            <div  dangerouslySetInnerHTML={{__html: this.props.article && this.props.article}}>
                            </div>
                        </div>}
                        <div className="article-btns">
                            <Button  onClick={this.toggle}>Registrovat</Button>
                            <Button className="more-info" onClick={this.collapseToggle}>{this.state.collapse? "Skrýt detaily" : "Více informací"}</Button>
                        </div>
                    </Collapse>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                        {this.state.isSending && <Spinner size="sm" color="primary" children=""/>}
                        {this.state.sent && <div><Alert>Vaše registrace byla odeslána.</Alert>
                            <Button onClick={this.toggle}>Zavřít</Button>
                            </div>

                        }
                        {!this.state.isSending && !this.state.sent &&
                        <RegistrationForm onSubmit={this.onSubmit } toggle={this.toggle} />
                        }
                    </ModalBody>
                </Modal>
            </div> 
        
        )}
}

export default SingleEvent;