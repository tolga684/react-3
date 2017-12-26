import I from "immutable";

function reducer(state = I.Map(), action) {
    switch (action.type) {

        case "ADD_CURRENT_INPUT":
            return state.set("currentInput", action.data);


        case "ADD_TODO_ITEM":
            const currentItems = state.get("todoItems", I.List());

            return state.set("todoItems", currentItems.push(action.data));


        case "DELETE_TODO_ITEM":
            const currentList = state.get("todoItems", I.List());
            const newList = currentList.filter(each => each.get("id") !== action.id);

            return state.set("todoItems", newList);

      
        case "ADD_CURRENT_SEARCH_TEXT":

            return state.set("searchText", action.data);
      

      

            /* you can use "includes()" method to filter texts..
     
             look at the documentation:
             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes*/

        case "SEARCH_TODO_ITEM":        
            const currentSearchList =  state.get("todoItems", I.List());
            const newSearchList = currentSearchList.filter(each => each.get("text").includes(action.data.get("text")));
        
            return state.set("searchItems", newSearchList);

      


        default:
            return state;
    }
}

export default reducer;
