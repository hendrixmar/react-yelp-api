import React from 'react'

import './SearchBar.css'

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
  }

/* 
 Client ID

hZ5nJEz1hLT6CfLgIczI4A
API Key

c8qhziAQNNpFhArSbb_XyGKxfAE9r2I6QZX6i4UDeH6s8_n5KGyHcEZZZGlK-ljGbaZZnXoHZuAgmG_3W_n9EaA1yCZp9YNn3MZLZNe1aXcbH-SrS8HTbNrTs7PiXnYx

*/

class SearchBar extends React.Component{
    render(){

    }

    renderSortByOptions(){
        return  Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}> {sortByOption} </li>;
        });
    }
}