import { StyleSheet } from 'react-native';
import AppColor from './colors';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from './HeightWidth';

const styles = StyleSheet.create({

    // App.js body style
    body: {
        flex: 1,
        backgroundColor: AppColor.white
    }

});

export { styles }