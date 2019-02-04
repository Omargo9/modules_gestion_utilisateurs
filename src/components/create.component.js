import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonId = this.onChangePersonId.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_id: '',
      person_firstname: '',
      person_name: '',
      email: '',
      creation_date: moment(new Date()).format("DD/MM/YYYY"),
      password: ''

    }
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangePersonId(e) {
    this.setState({
      person_id: e.target.value
    });
  }
  onChangeFirstName(e) {
    this.setState({
      person_firstname: e.target.value
    })
  }
  onChangeName(e) {
    this.setState({
      person_name: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_id: this.state.person_id,
      person_firstname: this.state.person_firstname,
      person_name: this.state.person_name,
      email: this.state.email,
      creation_date: this.state.creation_date,
      password: this.state.password
    };
    console.log(obj)
    axios.post('http://localhost:4000/business/add', obj)
      .then(function (response) {
        if (response.data.status === 200) {
          alert(response.data.status);

        } else {
          alert("Utilisteur Ajouté");
        }
      })

    this.setState({
      person_id: '',
      person_firstname: '',
      person_name: '',
      email: '',
      creation_date: '',
      password: ''
    })
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">AJOUTER UTILISATEUR</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>ID:  </label>
            <input
              type="text"
              title="Accepte seulement Alpha numérique"
              required
              pattern="[a-z0-9A-Z]+"
              className="form-control"
              value={this.state.person_id}
              onChange={this.onChangePersonId}
            />
          </div>
          <div className="form-group">
            <label>Prénom: </label>
            <input type="text"
              required
              minLength="3"
              className="form-control"
              value={this.state.person_firstname}
              onChange={this.onChangeFirstName}
            />
          </div>
          <div className="form-group">
            <label>Nom: </label>
            <input type="text"
              required
              minLength="3"
              className="form-control"
              value={this.state.person_name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input type="email"
              className="form-control"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Mot de passe: </label>
            <input type="password"
              className="form-control"
              minLength="8"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>

          <div className="form-group">

            <input type="submit"
              value="Ajouter Utilisateur"
              className="btn btn-primary" />

          </div>

        </form>
      </div>
    )
  }
}