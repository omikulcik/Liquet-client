import React from "react"

class RegistrationForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            personCount:1,
            voucherCode:"",
        }
    };

    handleNameChange = (e) => {
        const name = e.target.value;
        this.setState(() =>({name}))
    };

    handlePersonCountChange = (e) => {
        const personCount = e.target.value;
        this.setState(() =>({personCount}))
    };

    handleVoucherChange = (e) => {
        const voucherCode = e.target.value;
        this.setState(() => ({voucherCode}))
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            name: this.state.name,
            personCount: this.state.personCount,
            voucherCode: this.state.voucherCode
        })
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
            <label>Name</label><input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/><br />
            <label>Person count</label><input type="number" name="count" value={this.state.personCount} onChange={this.handlePersonCountChange}/><br />
            <label>Voucher code</label><input type="text" name="code" value={this.state.voucherCode} onChange={this.handleVoucherChange}/><br />
            <button type="submit">Rezervovat</button>
            </form>
        )
    }
}

export default RegistrationForm