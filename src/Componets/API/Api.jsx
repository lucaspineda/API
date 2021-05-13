import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

import './Api.css'

export default class List extends React.Component {
    state = {
        linguagens: []
    };

    componentDidMount(props) {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    linguagens: res
                });
            });
    }

    render(props) {
        return (
            <div>
                <h1>Listagem</h1>
                <ul className = "style">
                    {this.state.linguagens.map(item => (
                        <li id="URL" key={item.id}>
                            <Link to={`/posts/${item.id}`}>ID:{item.id}</Link>
                            
                            <p><b>UserId:</b> a{item.userId}</p>

                            <p><b>Titúlo:</b> {item.title}</p>
                            
                            <p><b>Texto:</b> {item.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}