import React from "react";
import SingleEvent from "./SingleEvent";
import Navigation from "./Navigation"
import firebase from "../firebase/firebase";
import { Spinner } from 'reactstrap';
import "../scss/events.scss";
import Footer from "./Footer";




class Events extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            events:[],
            isFetching: true,
        }
    }    

    componentWillMount = () => {
        document.title="Events";
        firebase.database().ref("Events").orderByChild('timeStamp').once("value").then((snapshot) => {
           const events = [];

           snapshot.forEach((childSnapshot) => {
               events.push({
                   key: childSnapshot.key,
                   evKey: childSnapshot.key,
                   name: childSnapshot.val().name,
                   desc: childSnapshot.val().desc,
                   date: childSnapshot.val().date,
                   img:  childSnapshot.val().img,
                   imgalt: childSnapshot.val().imgalt,
                   registeredCount: childSnapshot.val().registration ?Object.values(childSnapshot.val().registration).map((registration) => registration.personCount).reduce((sum, value) => sum + value, 0) : 0,
                   article: childSnapshot.val().editorHtml, 
               });
            });
           this.setState(() => ({events}));
           this.setState(() => ({isFetching: false}))
       })
    }

    render(){
        return(  
            <div>
                <Navigation />
                <div className="container-fluid events-container">
                    <div className="container">
                        <h1>Následující události</h1>
                        <div className="row">
                            <div className="col-md-8 col-12">
                                <div className="row no-gutters" >
                                    {this.state.isFetching ? <Spinner  children=""/> : this.state.events.map((event) => <SingleEvent  {...event} />)}
                                </div>
                            </div>
                            <div className="col-md-3 d-none d-md-block offset-1">
                                <div className="row sidepannel">
                                    <div className="col-12">
                                        <h3>Nevíte si rady?</h3>
                                        <p>Zavolejte nám a my vám rádi poradíme !</p>
                                    </div>
                                    <div className="col-12">
                                        <h3>Sledujte nás na sociálních sítích</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <Footer />
                </div>
)}}

export default Events;