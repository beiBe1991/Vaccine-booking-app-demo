import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import EditText from "../shared-components/text-input-custom";
import AppButton from "../shared-components/app-button";
import { Colors } from "../app-constants/themes";
import { connect } from 'react-redux'
import Autocomplete from 'react-native-autocomplete-input'
import { requestDistList, requestCentreByDist } from '../actions/search-actions'


class SearchByDistScreen extends React.Component {
    constructor(props) {
        super()
        this.state = {
            stateName: '',
            distName: '',
            isButtonDisabled: true,
            isDistInputEditable: false,
            statesList: [],
            filteredStates: [],
            selectedState: {},
            distsList: [],
            filteredDists: [],
            selectedDist: {},
            isDispatchHappenedHere: false

        }

    }



    onPressSearch = () => {
        let payload = {
            district_id: this.state.selectedDist.district_id
        }
        this.props.onSearch(payload)
        this.setState({
            isDispatchHappenedHere: true
        })

    }


    findState = (query) => {
        this.setState({
            stateName: query,
            isButtonDisabled: true,
            isDistInputEditable: false
        })
        // Method called every time when we change the value of the input
        if (query) {
            // Making a case insensitive regular expression
            const regex = new RegExp(`${query.trim()}`, 'i');
            // Setting the filteredStates array according the query
            if (Object.keys(this.props.stateList).length != 0 && this.props.stateList.success) {
                let copyfilter = this.props.stateList.data.filter((item) => item.state_name.search(regex) >= 0)
                this.setState({
                    filteredStates: copyfilter,
                });
            } else {
                this.setState({
                    filteredStates: []
                })
            }
        } else {
            // If the query is null then return blank
            this.setState({
                filteredStates: [],
            })
        }
    };


    findDist = (query) => {
        this.setState({
            distName: query,
            isButtonDisabled: true
        })
        if (query) {
            const regex = new RegExp(`${query.trim()}`, 'i');

            let copyfilter = this.props.distList.data.filter((item) => item.district_name.search(regex) >= 0)
            this.setState({
                filteredDists: copyfilter,
            });
        } else {
            this.setState({
                filteredDists: [],
            })
        }
    };



    render() {
        return (
            <View style={styles.mainContainer}>

                <View style={{ flex: 1 }}>
                    <View style={styles.stateInputContainer}>
                        <Autocomplete
                            inputContainerStyle={styles.inputFrame}
                            data={this.state.filteredStates}
                            flatListProps={{
                                keyboardShouldPersistTaps: 'always',
                                keyExtractor: (item) => item.state_id.toString(),
                                renderItem: (({ item }) => (
                                    <TouchableOpacity
                                        onPress={() => {
                                            let payload = {
                                                state_id: item.state_id
                                            }
                                            this.props.onSelectState(payload)
                                            this.setState({
                                                selectedState: item,
                                                filteredStates: [],
                                                stateName: item.state_name
                                            })

                                        }}>
                                        <Text style={styles.itemText} >
                                            {item.state_name}
                                        </Text>
                                    </TouchableOpacity>
                                ))
                            }}
                            renderTextInput={() => (
                                <EditText
                                    title={'State'}
                                    secure={false}
                                    autoCorrect={false}
                                    type={'default'}
                                    isEditable={true}
                                    onChange={this.findState}
                                    value={this.state.stateName}
                                />
                            )}
                        />
                    </View>
                    <View style={{ padding: 50 }} />

                    <View style={styles.distInputContainer}>
                        <Autocomplete
                            inputContainerStyle={styles.inputFrame}
                            data={this.state.filteredDists}
                            flatListProps={{
                                keyboardShouldPersistTaps: 'always',
                                keyExtractor: (item) => item.district_id.toString(),
                                renderItem: (({ item }) => (
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({
                                                selectedDist: item,
                                                filteredDists: [],
                                                isButtonDisabled: false,
                                                distName: item.district_name
                                            })

                                        }}>
                                        <Text style={styles.itemText} >
                                            {item.district_name}
                                        </Text>
                                    </TouchableOpacity>
                                ))
                            }}
                            renderTextInput={() => (
                                <EditText
                                    title={'District'}
                                    secure={false}
                                    autoCorrect={false}
                                    type={'default'}
                                    isEditable={this.state.isDistInputEditable}
                                    onChange={this.findDist}
                                    value={this.state.distName}
                                />
                            )}
                        />
                    </View>
                </View>

                <AppButton
                    title={'Search'}
                    disabled={this.state.isButtonDisabled}
                    onPress={this.onPressSearch}
                />

            </View>
        )
    }

    componentDidMount = () => { }

    componentDidUpdate = prevProps => {
        if (this.props.distList != prevProps.distList && Object.keys(this.props.distList).length != 0) {
            if (this.props.distList.success) {
                this.setState({
                    distsList: this.props.distList.data,
                    isDistInputEditable: true
                })
            }
        }
        if (this.props.centresList != prevProps.centresList && Object.keys(this.props.centresList).length != 0) {
            if (this.state.isDispatchHappenedHere) {
                this.props.navigation.navigate('centres', { title: this.state.selectedDist.district_name })
                this.setState({
                    isDispatchHappenedHere: false
                })
            }

        }
    }
}

const mapStateToProps = (state) => {
    return {
        stateList: state.states.stateList,
        distList: state.districts.distList,
        centresList: state.centre.centresList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectState: (payload) => {
            dispatch(requestDistList(payload))
        },
        onSearch: (payload) => {
            dispatch(requestCentreByDist(payload))
        }
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 30,
        flex: 1,
        backgroundColor: Colors.primaryColor,
        zIndex: 1,
    },
    stateInputContainer: {
        flex: 1,
        backgroundColor: Colors.primaryColor,
        zIndex: 3,
        position: 'absolute',
        left: 0,
        right: 0

    },
    distInputContainer: {
        zIndex: 2,
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 90

    },
    itemText: {
        fontSize: 15,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 2,
    },
    inputFrame: {
        borderColor: Colors.primaryTextColor,
        borderWidth: 0,
        justifyContent: 'center',
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchByDistScreen)