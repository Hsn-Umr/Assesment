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
        marginRight: wp(4),
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
        top: hp(1.5),
        left: wp(2),
        paddingTop: hp(2.8),
        paddingRight: wp(0.8),
        backgroundColor: AppColor.white,
        borderColor: AppColor.blue,
        borderWidth: wp(4),
        borderRadius: 50,
        width: wp(13),
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
        marginVertical: 6,
        paddingHorizontal: wp(3),
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    postText: {
        fontSize: 13,
        fontWeight: 'bold',
        bottom: 7
    },
    timeText: {
        fontSize: 9,
        color: '#747476',
        bottom: 7
    },
    iconAlign: {
        bottom: 7
    },
    postDetails: {
        fontSize: 12,
        lineHeight: 16,
        paddingHorizontal: wp(3),
    },
    tags: {
        color: AppColor.blue,
        fontSize: 14,
        paddingLeft: 7,
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
        top: 5
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
        width: wp(5),
        height: hp(3.2),
        top: 3,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6,
    },
    textCount: {
        fontSize: 11,
        color: '#424040',
        top: 2
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
    },
    //// End Post  ////

    /// Start People You May Know ////
    peopleCardContainer: {
        width: wp(55),
        height: hp(54),
        marginVertical: 10,
        marginLeft: wp(1),
        borderWidth: 2,
        borderColor: AppColor.grayLight,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12
    },
    peopleIconImg: {
        width: wp(55),
        height: hp(38),
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12
    },
    peopleFooter: {
        width: wp(55),
        marginHorizontal: wp(3)
    },
    peopleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: AppColor.black,

    },
    propleBtn: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: hp(2)
    },
    addFriend: {
        width: wp(27),
        height: hp(5),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 6,
        backgroundColor: AppColor.blue,
        marginRight: 12,
        marginTop: hp(1.5),
        paddingTop: 4,
        marginLeft: wp(3)
    },
    remove: {
        width: wp(17),
        height: hp(5),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 6,
        backgroundColor: AppColor.gray,
        marginRight: 12,
        marginTop: hp(1.5),
        paddingTop: 4,
        marginRight: wp(3)
    },
    btnText: {
        color: AppColor.white,
        fontSize: 14,
        fontWeight: '700'
    },
    removeText: {
        color: AppColor.black,
        fontSize: 14,
        fontWeight: '700'
    }
    /// End People You May Know ////

});

export { styles }