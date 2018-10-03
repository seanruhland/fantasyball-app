import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Users extends Component {

    // this method fires off before anything gets rendered
    // just search for react lifecycle methods and you will understand what i mean
    componentWillMount() {
        getUsers();
    }

    constructor(props) {
        super(props);
        this.title = "NBA Data";
        this.state = {
            nbaData: {}
        }
    }

    getUsers = () => {
        axios.get('ttps://stats-prod.nba.com/wp-json/statscms/v1/synergy/player/?category=Isolation&limit=500&names=offensive&q=2512501&season=2017&seasonType=Reg')
            .then( (response) => {
                this.setState({nbaData: response.data});
            })
            .catch( (error) => {
                console.log(error);
            });
    }

module.exports = Data;