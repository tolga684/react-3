import React, { Component } from "react";
import addCurrentSearchInput from "../actions/addCurrentSearchInput.js";
import searchTodo from "../actions/searchTodo.js";

class SearchContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {searchText, dispatch} = this.props;

        return (
          <form className="search-container" onSubmit={e => e.preventDefault()}>        
        <div>        
        <input
          className="input-field"
          placeholder={"Search"}
          value={searchText}
          onChange={e => addCurrentSearchInput(dispatch, e.target.value)}
        />
      </div>
      <div>
          <button
            className="add-task-btn"
            onClick={() => searchTodo(dispatch, searchText)}
          >
    {"Search"}
  </button>
</div>
        
</form>
);
    }
}

export default SearchContainer;
 