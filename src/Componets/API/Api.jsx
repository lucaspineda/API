import React from 'react';

import './Api.css'

export default class List extends React.Component {
    state = {
        linguagens: []
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    linguagens: res
                });
            });
    }

    render() {
        return (
            <div>
                <h1>Listagem</h1>
                <ul className = "style">
                    {this.state.linguagens.map(item => (
                        <li key={item.id}>
                            
                            <p><b>userId:</b> a{item.userId}</p>

                            <p><b>Número da notícia:</b> {item.id}</p>

                            <p><b>Titúlo:</b> {item.title}</p>
                            
                            <p><b>Texto:</b> {item.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}