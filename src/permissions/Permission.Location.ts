
import { PermissionsAndroid, Platform } from "react-native"
import { Permission } from "react-native"

export const requestLocationPermission = async ( ) => {
    if ( Platform.OS === "ios" ) {

    } else if ( Platform.OS === "android" ) {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Allow Uber App to access your location?",
                    message: "Enable Uber App to access your device location to find better results",
                    buttonNegative: "Deny",
                    buttonPositive: "Allow"
                },
            );

            if ( granted === PermissionsAndroid.RESULTS.GRANTED ) {
                console.log("ACCESS_FINE_LOCATION permission has been GRANTED!")
            } else {
                console.log("ACCESS_FINE_LOCATION permission has been DENIED!")
            }
        } catch(err) {
            console.warn(err)
        }
    }
}