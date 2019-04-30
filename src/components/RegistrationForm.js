import React from "react";
import {Button, Alert} from 'reactstrap';

class RegistrationForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            personCount:1,
            voucherCode: false,
        }
    };

    handleNameChange = (e) => {
        const name = e.target.value;
        this.setState(() =>({name}))
    };

    handlePersonCountChange = (e) => {
        if(e.target.value && e.target.value <= 0){
           this.setState(() => ({error:"Musíte provést rezervaci alespoň pro 1 osobu"}))
        }
        else {
        const personCount = e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
        this.setState(() =>({personCount, error: false}))
        }
    };

    handleVoucherChange = () => {

        this.setState((prevState) => ({voucherCode: !prevState.voucherCode}))
    };

    handleIncrement = () => {
        if(this.state.personCount + 1 >= 8){
            this.setState(() => ({error:"Pro skupinu 8 a více lidí nás prosím kontaktujte individuálně."}))
         }
        else {
        this.setState((prevState) => ({personCount: prevState.personCount + 1, error: false}))
        }
    }

    handleDecrement = () => {
        if(this.state.personCount-1 <= 0){
            this.setState(() => ({error:"Musíte provést rezervaci alespoň pro 1 osobu."}))
         }
        else{
        this.setState((prevState) => ({personCount: prevState.personCount - 1, error: false}))
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.name === ""){
            this.setState(() => ({error:"Vyplňtě prosím své jméno."}))
        }
        else if(!this.state.personCount){
            this.setState(() => ({error:"Vyplňtě prosím počet osob"}))
        }
        else {
        this.props.onSubmit({
            name: this.state.name,
            personCount: this.state.personCount,
            voucherCode: this.state.voucherCode? "Ano" : "Ne",
            registrationTimeStamp: new Date().getTime()
        })
        }
    }

    render(){
        return(
            <form onSubmit={this.onSubmit} className="registration-form">
                <div className="form-row">
                    <label>Jméno a příjmení: </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
                </div>
                <div className="form-row">
                    <label>Počet osob: </label>
                    <input type="number" name="count" min="1" value={this.state.personCount} onChange={this.handlePersonCountChange}/>
                    <span className="number-handler" onClick={this.handleIncrement} >+</span>
                    <span className="number-handler" onClick={this.handleDecrement} >-</span>
                </div>

                <div className="form-row">
                    <label>Mám voucher: </label>
                    <input type="checkbox" name="code" value={this.state.voucherCode} onChange={this.handleVoucherChange}/>
                </div>
                {this.state.error && 
                 <Alert color="danger">{this.state.error}</Alert>
                }
                <div className="form-btns">
                    <Button type="submit">Rezervovat</Button>
                    <Button onClick={this.props.toggle}>Zrušit</Button>
                </div>
            </form>
        )
    }
}

export default RegistrationForm