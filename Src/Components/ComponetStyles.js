import { StyleSheet } from 'react-native';
import AppColor from '../Theme/colors';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from '../Theme/HeightWidth';

const styles = StyleSheet.create({
/// Start Home Top Bar Style  ///////
    container: {
        width: wp(100),
        height: hp(10),
        paddingHorizontal: wp(3),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: AppColor.white,

    },
    text: {
        color: AppColor.blue,
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: -0.3,
    },
    btn: {
        width: wp(10),
        height: hp(6),
        borderRadius: 50,
        backgroundColor: AppColor.grayLight,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: wp(2)
    },
/// End Home Top Bar Style  ///////

/// Start ToolBar Style  ///////
toolBarContainer: {
	width: wp(100),
	height: hp(18),
},
row: {
    flexDirection: 'row',
	backgroundColor: AppColor.white,
	width: wp(100),
	alignItems: 'center',
    justifyContent: 'center',
    paddingTop: hp(0.8)
},
input: {
    height: hp(6),
	width: wp(80),
    marginLeft: wp(3),
    paddingLeft: wp(4),
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 0.4,
    borderColor: AppColor.divider,
    marginBottom: hp(3),
},
divider: {
    width: wp(100),
	height: hp(0.1),
	backgroundColor: AppColor.divider
},
menu: {
    flex: 1,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	height: hp(5)
},
menuText: {
    paddingLeft: 11,
	fontWeight: '500',
	fontSize: 12
},
separator: {
    width: wp(0.1),
	height: hp(4),
    marginTop: hp(1),
	backgroundColor: AppColor.divider
},
bottomDivider: {
    width: wp(100),
	height: hp(1),
	backgroundColor: AppColor.gray
},
/// End ToolBar Style  ///////

/// Start Create Room Style  ///////

createRoomContainer: {
    width: wp(100),
	height: hp(12),
	flexDirection: 'row',
    paddingTop: hp(2.5)
},
room: {
    width: wp(25),
	height: hp(5),
	flexDirection: 'row',
	alignItems: 'center',
	borderRadius: 6,
	backgroundColor: '#dee5f2',
	marginRight: 12,
    marginTop: hp(1.5)
},
roomText: {
    color: AppColor.blue,
	fontSize: 14,
	paddingLeft: 7,
},
/// End Create Room Style  ///////

/// Start Story Style  ///////
storyContainer: {
    width: wp(100),
    height: hp(36),
    flexDirection: 'row',
    alignItems: 'center'
},
/// End Story Style  ///////


});

export { styles }