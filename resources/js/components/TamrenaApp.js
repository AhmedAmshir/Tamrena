import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
import TamrenaList from './TamrenaList';
import Header from './Header';
import './Tamrena.css';

export default class TamrenaApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tamrenas: [],
            error: null
        };
    }
    
    componentDidMount() {
        axios.get('/api/tamrenas')
            .then(tamrenas => {
                this.setState({ tamrenas : tamrenas.data });
            })
            .catch((error) => {
                this.setState({error: error});
            });
    }

    deleteTamrenaHandler(index) {

        const tamrena = this.state.tamrenas[index];
        axios.post(`/api/tamrena/${tamrena.id}`)
            .then(respone => {
                const tamrenas = this.state.tamrenas.filter(item => {
                    return item.id !== tamrena.id
                });
                this.setState({tamrenas: tamrenas});
            })
            .catch((error) => {
                this.setState({error: error});
            });
        
    }

    render() {
        
        if(this.state.error) {
            return <p>{this.state.error.message}</p>;
        }
        return (
            <div>
                <Header />

                <TamrenaList clicked={this.deleteTamrenaHandler.bind(this)} tamrenas={this.state.tamrenas} />
            </div>                
        );
    }
}

ReactDOM.render(<TamrenaApp />, document.getElementById('root'));