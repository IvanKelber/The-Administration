var ComponentForm = React.createClass({
  render: function() {
    return (
      <form action="/components" method="post">
        <input name="utf8" type="hidden" value="&#x2713;" />
        <input type="hidden" name="authenticity_token" value={this.props.authenticity_token} />

        <div className="form-group">
          <label htmlFor="component_name">Name</label>
          <input type="text" className="form-control"
            id='component_name' name="component[name]"></input>
        </div>

        <label htmlFor="component_category">Category</label>
        <select name="component[category]" id="component_category">
          <option value="nil">Category</option>
          <option value="Alcohol">Alcohol</option>
          <option value="Physical">Physical</option>
          <option value="Puzzle">Puzzle</option>
        </select>

        <label for="component_min_teams">Min teams</label>
         <input defaultValue="1" class="form-control" min="1" max="4" type="number" name="component[min_teams]" id="component_min_teams" />

         <label for="component_max_teams">Max teams</label>
         <input defaultValue="4" class="form-control" min="1" max="4" type="number" name="component[max_teams]" id="component_max_teams" />

         <label for="component_description">Description</label>
         <textarea class="form-control" name="component[description]" id="component_description">
         </textarea>

        <input type="submit" name="commit" value="Create Component"
          className="btn btn-primary" data-disable-with="Create Component" />
      </form>
    )
  }
})
