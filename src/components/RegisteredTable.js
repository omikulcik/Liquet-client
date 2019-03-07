import React from "react";
import AdminNav from "./AdminNav";
import ReactTable from "react-table";
import firebase from "../firebase/firebase"
import 'react-table/react-table.css';

class RegisteredTable extends React.Component {

  constructor(){
    super()
    this.state={data:[]}
  }

  componentWillMount= () => {
   firebase.database().ref("Events").once("value").then((snapshot) => {
     const data = [];
     snapshot.forEach((childSnapshot) =>{
       data.push(childSnapshot.val())
     });
     this.setState(() => ({data}))
   })
  };

    render(){
      const columns = [{
        Header: 'Event',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: 'Date',
        accessor: 'date',
      }, {
        Header: 'Registered people',
        columns:[{
          Header: "Name",
          id:"RegisteredNames",
          accessor: d => d.registration && Object.values(d.registration).map((singleReg) => <p>{singleReg.name}</p>)
        },
        {
          Header: "Persons",
          id:"RegisteredCount",
          accessor: d => d.registration && Object.values(d.registration).map((singleReg) => <p>{singleReg.personCount}</p>)
        },
        {
          Header: "Voucher",
          id:"RegisteredVoucher",
          accessor: d => d.registration && Object.values(d.registration).map((singleReg) => <p>{singleReg.voucherCode}</p>)
        },
      
      ]
      }];

        return(
          <div>
            <AdminNav />
            <ReactTable
            data={this.state.data}
            columns={columns}
            />
          </div>
        )
    }
} 

export default RegisteredTable