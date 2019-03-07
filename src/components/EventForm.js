import React from "react"


class EventForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: props.name ? props.name : "",
          desc: props.desc ? props.desc : "",
          date: props.date ? props.date : ""
        };
      }

handleNameChange = (e) =>{
    const name = e.target.value;
    this.setState(() => ({name}))
};

handleDateChange = (e) =>{
    const date = e.target.value;
    this.setState(() => ({date}))
};

handleDescChange = (e) =>{
    const desc = e.target.value;
    this.setState(() => ({desc}))
};

onSubmit = (e) =>{
    e.preventDefault();
    this.props.onSubmit({
        name: this.state.name,
        date: this.state.date,
        desc:this.state.desc
    })
}

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <label>Name<input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} /></label><br />
                <label>Date<input type="text" name="date" value={this.state.date} onChange={this.handleDateChange}/></label><br />
                <label>Desc<input type="text" name="description" value={this.state.desc} onChange={this.handleDescChange}/><br />
                <button type="submit">{this.props.btn}</button></label>
            </form>
        )
    }
}

export default EventForm