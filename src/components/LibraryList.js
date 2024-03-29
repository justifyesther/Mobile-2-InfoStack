import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

    renderRow = ({item}) => {
        return <ListItem library={item} />
    } //Item --->> Baku Bawaan FlatList

    render() {
        return (
           <FlatList
               data={this.props.libraries}
               renderItem={this.renderRow}
           />
        )
    }
}

const mapStateToProps = (state) => {
    return { libraries: state.libraries}
}

export default connect(mapStateToProps)(LibraryList);