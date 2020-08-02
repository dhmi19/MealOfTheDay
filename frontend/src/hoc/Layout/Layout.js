import React, { Component } from 'react';
//import NavBar from '../../components/NavBar/NavBar';
//import classes from './Layout.module.css';
import Aux from '../Aux';

class Layout extends Component {


    render() {
        return (
            <Aux>
                {/*<NavBar />*/}
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;