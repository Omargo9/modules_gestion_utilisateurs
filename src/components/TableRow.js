import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   creation_date: moment(new Date()).format("DD/MM/YYYY")}
    this.delete = this.delete.bind(this);

  }
  delete() {
    axios.get('http://localhost:4000/business/delete/' + this.props.obj._id)
      .then(function (response) {
        if (response.data.status === 200) {
          alert(response.data.status);

        } else {
          alert("Utilisteur Supprimé");
        }
      })
      .catch(err => console.log(err));

  }
  render() {
    return (
      <tr>
        <td>
          {this.props.obj.person_id}
        </td>
        <td>
          {this.props.obj.person_firstname}
        </td>
        <td>
          {this.props.obj.person_name}
        </td>
        <td>
          {this.props.obj.email}
        </td>
        <td>
          {this.props.obj.creation_date}
        </td>
        <td>
          <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Modifier</Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Supprimer</button>
        </td>
      </tr>
    );
  }
}

export default TableRow;