import React, { Component } from 'react';
import axios from 'axios';
export default class Edit extends Component {
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
      creation_date: '',
      password: ''

    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/business/edit/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          person_id: response.data.person_id,
          person_firstname: response.data.person_firstname,
          person_name: response.data.person_name,
          email: response.data.email,
          creation_date: response.data.creation_date,
          password: response.data.password
        });
      })
      .catch(function (error) {
        console.log(error);
      })
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
  onChangePassword(e) {
    this.setState({
      password: e.target.value
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
    axios.post('http://localhost:4000/business/update/' + this.props.match.params.id, obj)
      .then(function (response) {
        if (response.data.status === 200) {
          alert(response.data.status);

        } else {
          alert("Profile à jour");
        }
      })

    this.props.history.push('/index');
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Modifier Profil</h3>
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
              minlength="3"
              className="form-control"
              value={this.state.person_firstname}
              onChange={this.onChangeFirstName}
            />
          </div>
          <div className="form-group">
            <label>Nom: </label>
            <input type="text"
              required
              minlength="3"
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
              minlength="8"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <span >Compte Actif</span>
            <select name="Compte Actif"  >

              <option>  Oui</option>
              <option>  Non </option>

            </select>
          </div>
          <div className="form-group">
            <input type="checkbox" /><label>Obliger Utilisateur</label>
          </div>

          <div className="form-group">
            <input type="submit"
              value="Modifier Profil"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}