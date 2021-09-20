import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Colors } from '../app-constants/themes'

const ItemCard = (props) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.titleStyle}>{props.item.name}</Text>
            <Text style={styles.addressStyle}>{props.item.address}, {props.item.district_name}</Text>

            <View style={{ padding: 5 }} />

            <View style={{ flexDirection: 'row' }}>
                {renderCovaxinCount(props.item, props.firstDose)}
                <View style={{ padding: 10 }} />
                {renderCovisheildCount(props.item, props.firstDose)}
            </View>

        </View>
    )
}



const renderCovisheildCount = (item, firstDose) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={covishieldCount(item.sessions) < 15 ? styles.vaccineCount : [styles.vaccineCount, { backgroundColor: Colors.safeGreen }]}>
                <Text style={styles.countText}>{covishieldCount(item.sessions, firstDose)}</Text>
            </View>
            <View style={{ padding: 3 }} />
            <Text style={styles.addressStyle}>Covishield</Text>
        </View>
    )
}

const renderCovaxinCount = (item, firstDose) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={covaxinCount(item.sessions) < 15 ? styles.vaccineCount : [styles.vaccineCount, { backgroundColor: Colors.safeGreen }]}>
                <Text style={styles.countText}>{covaxinCount(item.sessions, firstDose)}</Text>
            </View>
            <View style={{ padding: 3 }} />
            <Text style={styles.addressStyle}>Covaxin</Text>
        </View>
    )
}

const covaxinCount = (sessions, firstDose) => {
    return getVaccineCount(sessions, 'COVAXIN', firstDose)
}
const covishieldCount = (sessions, firstDose) => {
    return getVaccineCount(sessions, 'COVISHIELD', firstDose)
}

const getVaccineCount = (sessions, vaccineName,firstDose) => {
    if (firstDose) {
        let filteredVaccines = sessions.filter(item => item.vaccine === vaccineName).map(item => item)
        let count = filteredVaccines.map(item => item.available_capacity_dose1).reduce((prevCount, currentCount, index) => prevCount + currentCount, 0)
        return count
    } else {
        let filteredVaccines = sessions.filter(item => item.vaccine === vaccineName).map(item => item)
        let count = filteredVaccines.map(item => item.available_capacity).reduce((prevCount, currentCount, index) => prevCount + currentCount, 0)
        return count
    }

}

const styles = StyleSheet.create({
    mainContainer: {
        width: 320,
        height: 150,
        backgroundColor: Colors.primaryColor,
        borderRadius: 2,
        elevation: 2,
        paddingVertical: 13,
        paddingTop: 6,
        paddingHorizontal: 15,
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 18,
    },
    titleStyle: {
        fontSize: 15,
        marginVertical: 5,
        color: Colors.titleColor
    },
    addressStyle: {
        fontSize: 12,
        color: Colors.primaryTextColor

    },
    vaccineCount: {
        height: 40,
        width: 40,
        backgroundColor: Colors.warningRed,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    countText: {
        fontSize: 12,
        color: Colors.primaryColor
    }
})

export default ItemCard