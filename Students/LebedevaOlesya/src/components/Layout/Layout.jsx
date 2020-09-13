<<<<<<< HEAD

import './style.css';
import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import MessageField from '../MessageField/MessageField.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import Header from '../Header/Header.jsx';

export default class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
    static defaultProps = {
        chatId: 1,
    };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     }
    // }

    render() {
        return (
            <div className="Layout d-flex row">
                <Header chatId={this.props.chatId} />
                <ChatList />
                <MessageField name="Me" />
            </div>
        )
    }
}
=======

import './style.css';
import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import MessageField from '../MessageField/MessageField.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import Header from '../Header/Header.jsx';

export default class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
    static defaultProps = {
        chatId: 1,
    };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     }
    // }

    render() {
        return (
            <div className="Layout d-flex row">
                <Header chatId={this.props.chatId} />
                <ChatList />
                <MessageField name="Me" />
            </div>
        )
    }
}
>>>>>>> c1f317307805d71d7423a0b5b7291b1f4987a096
