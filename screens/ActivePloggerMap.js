import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';
import {connect} from 'react-redux'; 
import Banner from '../components/Banner';
import { MapView, Location, Permissions } from 'expo';
import Colors from '../constants/Colors';
import { Marker } from 'react-native-maps';
import Options from '../constants/Options';

class ActivePloggerMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {
                latitude: 42.387,
                longitude: -71.0995,
                latitudeDelta: 0.05,
                longitudeDelta: 0.04,
            },
            localUsers: []
        };
    }

    async componentDidMount() {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({});

            if (location.latitude) {
                this.setState({ location });
            }
        }
        this.getLocalUsers();
    }

    static navigationOptions = {
        title: 'Active Plogger Map'
    };

    getLocalUsers = () => {
        this.setState({
            localUsers: [{
                latitude: 42.387,
                longitude: -71.0995,
                latitudeDelta: 0.05,
                longitudeDelta: 0.04,
            },
            {
                latitude: 42.387,
                longitude: -71.0995,
                latitudeDelta: 0.05,
                longitudeDelta: 0.04,
            }]
        });
    }

    render() {
        const ActivityIcon = Options.activities.get(
            'walking'
        ).icon;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <Banner>
                        {this.state.localUsers.length} active ploggers in {this.location}
                    </Banner>
                    <MapView
                        style={[styles.map]}
                        initialRegion={this.state.location}
                        followsUserLocation={true}
                        showsUserLocation={true}
                    >
                        {this.state.localUsers.forEach(user => (
                            <Marker
                                coordinate={user}
                                tracksViewChanges={false}
                            >
                                <ActivityIcon
                                    width={40}
                                    height={40}
                                    fill={Colors.activeColor}
                                />
                            </Marker>
                        ))}
                    </MapView>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
    },
    map: {
        borderColor: Colors.borderColor,
        borderWidth: 1,
        flex: 1,
        height: 800,
        margin: 5
    },
});


export default connect(
    (state) => ({
      currentUser: state.users.get("current"),
    }),
    {}
)(ActivePloggerMap);