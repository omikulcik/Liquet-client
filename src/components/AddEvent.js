import React from "react";
import AdminNav from "./AdminNav";
import EventForm from "./EventForm";
import firebase from "../firebase/firebase"

const onSubmit = (newEvent) => {
    firebase.database().ref("Events").push(newEvent)
  };

const AddEvent = () => (
    <div>
        <AdminNav />
        <div className={"container"}>
            <EventForm btn="Vytvořit událost" onSubmit={onSubmit}/>
        </div>
    </div>
);

export default AddEvent