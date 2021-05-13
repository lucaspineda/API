import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'


class Unico extends React.Component {
    state = {
        linguagens: []
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
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
                    <li>
                    <p><b>ID:</b> {this.state.linguagens.id}</p>

                    <p><b>UserId:</b> a{this.state.linguagens.userId}</p>

                    <p><b>Titúlo:</b> {this.state.linguagens.title}</p>

                    <p><b>Texto:</b> {this.state.linguagens.body}</p>                   
                    </li>
                </ul>
            </div>
        );
    }
}
export default withRouter(Unico)