import React, { PropTypes } from 'react';
import ComponentRow from './Component'
import ErrorBox from '../Shared/ErrorBox'

export default class ComponentForm extends React.Component {


  constructor() {
    super();
    this.state = {
      name: '',
      category:'nil',
      min_teams:'1',
      max_teams:'4',
      description:'',
      errors:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  initialState() {
    return {
      name: '',
      category:'nil',
      min_teams:'1',
      max_teams:'4',
      description:'',
      errors:''
    };
  };

  handleChange(event){
    event.preventDefault();
    var obj = {}
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };

  handleSubmit(event) {
    event.preventDefault()
    var data = this.state
    delete data["errors"]
    $.ajax({
      method: 'POST',
      data: {component:data},
      dataType:'JSON',
      success: function(data) {
        this.props.handleSubmit(data)
        this.setState(this.initialState())
      }.bind(this),
      error: function(data) {
        this.setState({errors:data})
      }.bind(this)
    })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="utf8" type="hidden" value="&#x2713;" />
        <input type="hidden" name="authenticity_token" value={this.props.authenticity_token} />
        {this.state.errors && <ErrorBox errors={this.state.errors}/>}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control"
             name="name"
            value={this.state.name} onChange={this.handleChange}></input>
        </div>

        <label htmlFor="category">Category</label>
        <select name="category" onChange={this.handleChange}>
          <option value="nil">Category</option>
          <option value="Alcohol">Alcohol</option>
          <option value="Physical">Physical</option>
          <option value="Puzzle">Puzzle</option>
        </select>

        <label htmlFor="teams">Teams: </label>
        <div className="form-inline" id="teams">
         <input value={this.state.min_teams} className="form-control" min="1" max="4"
           type="number" name="min_teams"
           onChange={this.handleChange} />
         <strong> <span fontSize="25">-</span> </strong>
         <input value={this.state.max_teams} className="form-control" min="1" max="4"
           type="number" name="max_teams"
           onChange={this.handleChange}/>
        </div>
         <label htmlFor="description">Description</label>
         <textarea className="form-control" name="description"
           value={this.state.description} onChange={this.handleChange}>
         </textarea>

        <input type="submit" name="commit" value="Create Component"
          className="btn btn-primary" />
      </form>
    )
  }
}
