import { StyleSheet } from 'react-native';
import AppColor from '../../Theme/colors';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../../Theme/HeightWidth';

const styles = StyleSheet.create({
    /// Start Home Top Bar Style  ///////
    container: {
        width: wp(10),
        height: hp(10),
        position: 'relative',
    },
    image: {
        width: wp(11),
        height: hp(7),
        borderRadius: 50,
    },
    userActive: {
        width: wp(3),
        height: hp(2),
        borderRadius: 50,
        backgroundColor: '#4bcb1f',
        position: 'absolute',
        bottom: 18,
        right: 0,
        borderWidth: 2,
        borderColor: '#ffffff'
    },
    /// End Home Top Bar Style  ///////

    /// Start User Room ////////
    userImg: {
        marginRight: wp(4)
    },
    /// End User Room ////////

    //// Story Card Start /////
    storyCard: {
        width: wp(30),
        height: hp(35),
        position: 'relative',
        marginRight: wp(1)
    },
    storyCardUser: {
        width: wp(30),
        height: hp(34),
        position: 'relative',
        marginRight: wp(1),
        backgroundColor: AppColor.grayLight,
        borderRadius: 12,
    },
    storyImg: {
        width: wp(30),
        height: hp(34),
        borderRadius: 12
    },
    storyIconImg: {
        width: wp(30),
        height: hp(25),
        borderRadius: 12
    },
    storyUser: {
        position: 'absolute',
        top: hp(6),
        left: wp(6),
        backgroundColor: AppColor.white,
        borderRadius: 20,
        width: wp(2),
        height: hp(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    storyUserIcon: {
        backgroundColor: AppColor.blue,
        width: wp(11),
        height: hp(7),
        justifyContent: 'center',
        paddingLeft: wp(1.3),
        borderRadius: 50,
        borderColor: AppColor.grayLight,
        borderWidth: wp(0.5),
        bottom: hp(3.7),
        left: wp(10)
    },
    iconText: {
        color: 'black',
        left: 12,
        fontWeight: 'normal',
        top: 6,
    },
    storyFooter: {
        width: wp(100),
        position: 'absolute',
        bottom: 12,
        left: 9,
    },
    storyText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: AppColor.white,
        textShadowColor: 'rgba(0, 0, 0, 0.4)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1
    },
    //// Story Card End ////

    //// Start Post  ////
    postHeader: {
        height: hp(5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 6,
        paddingHorizontal: wp(3),
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    postText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    timeText: {
        fontSize: 9,
        color: '#747476'
    }, 
    postDetails: {
        fontSize: 12,
        lineHeight: 16,
        paddingHorizontal: wp(3),
    },
    postImage: {
        marginTop: 9,
        width: wp(100),
        height: hp(50)
    },
    footerCount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(3),
        
    },
    bottomDivider: {
        width: wp(100),
        height: hp(1),
        backgroundColor: AppColor.gray
    },
    separator: {
        width: wp(0.1),
        height: hp(4),
        marginTop: hp(1),
        backgroundColor: AppColor.divider
    },
    iconCount: {
        backgroundColor: '#1878f3',
        width: wp(3),
        height: hp(3),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6,
    },
    textCount: {
        fontSize: 11,
        color: '#424040',
    },
    footerMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(3),
        paddingBottom: 20
    },
    footermenuText: {
        fontSize: 12,
        color: '#424040'
    }
    //// End Post  ////


});

export { styles }