import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, createStore } from 'redux';
import * as actions from './actions';
import Icon from 'react-native-vector-icons/FontAwesome';

// const store = createStore(counterReduxReducer);

const mapStateToProps = ({counterReduxReducer, toggleColorReducer}) => ({
    counter: counterReduxReducer,
    isToggle: toggleColorReducer
});

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         ...actions
//     }, dispatch)
// }

class CounterRedux extends React.Component {

    componentWillMount() {
        console.log('will mount', this.props);
    }

    onPressIncrement = () => {
        this.props.increment();
    }

    onPressDecrement = () => {
        this.props.decrement();
    }

    render() {
        const colors = ['black', 'yellow', 'brown', 'cyan', 'fuchsia']
        const isToggle = this.props.isToggle.isToggleColor;
        const index = Math.floor(Math.random() * (5 - 1 + 1)) + 1
        const toggle = isToggle ? colors[index] : colors[index];

        return (
            <View style={ styles.container }>
                <Text style={{ fontSize: 25 }}>
                    Example of Redux
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={ this.onPressDecrement }>
                        <Icon name='minus' style={{ fontSize: 20 }} />
                    </TouchableOpacity>
                    <Text style={{ color: toggle, fontSize: 30, paddingHorizontal: 8 }}>{this.props.counter}</Text>
                    <TouchableOpacity onPress={ this.onPressIncrement }>
                        <Icon name='plus' style={{ fontSize: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default connect(mapStateToProps, actions)(CounterRedux);