import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

var base_path = window.location.origin;

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: []
        }
    }

    componentDidMount() { 
        fetch(`${ base_path }/data/nav-page.json`)
        .then(response=>{
            response.json().then(data=>{
              if(data.length > 0) {
                  this.setState({
                      pages: data,
                });
              }
            });
        });
    }

	render() {
        var pages = this.state.pages;
		return (
			<nav>
                <ul id="menu">
                    <li>
                        <input id="check01" type="checkbox" name="menu" />
                        <label className="menulist" htmlFor="check01">&nbsp;</label>
                        <ul className="submenu">
                            {
                                pages.map(page => (
                                    <li key= {page.id}><NavLink exact to = { page.pageUrl } activeClassName="active">{ page.pageName }</NavLink></li>
                                ))
                            };
                        </ul>
                    </li>
                </ul>
            </nav>
		)
	}
}
export default Navigation;