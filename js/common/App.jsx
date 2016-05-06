import React, { Component } from 'react';
import Gallery from './Gallery';
import s from '../../css/scss/App.scss';

class App extends Component {

    render() {
        return <Gallery items={this.props.galleryItems} />;
    }

}
export default App;