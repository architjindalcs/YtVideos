import React from "react"
import "./SearchBar.css"
class SearchBar extends React.Component
{
    state={
        searchquery: ""
    }
    onInputChange=(e)=>
    {
        this.setState({searchquery: e.target.value})
    }    
    onFormSubmit=(e)=>
    {
        e.preventDefault();
        this.props.callback(this.state.searchquery)
    }
    render()
    {
       return (<form onSubmit={this.onFormSubmit}>
           <input class="form-control" type="text" value={this.state.searchquery} placeholder="Search" onChange={this.onInputChange}></input>
       </form>) 
    }
}

export default SearchBar;