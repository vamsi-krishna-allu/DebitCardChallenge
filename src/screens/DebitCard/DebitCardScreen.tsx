import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Animated,
    Platform,
    StatusBar,
} from 'react-native';
import { SectionView } from '../../components/Sections';
import { Card } from '../../components/Card';
import homeIcon from '../../assets/homeIcon.jpeg';
import { useSelector } from 'react-redux';
import { colors } from '../../styles/globalStyles';
import fetch from 'react-native-fetch-polyfill';
import { windowWidth, currencyFormat, apiHost } from '../../constants';

const DebitCardScreen = (props: { navigation: any }) => {
    let activeStatus = 'active';

    const weeklySpendingLimit = useSelector(state => {
        return state.spendingLimit;
    }) || 0;

    const switchSpendingLimit = () => {
        // console.log('switchSpendingLimit');
    };

    const barWidth = useSelector(state => {
        return state.width;
    });

    const [cardDetails, setCardDetails] = useState({
        id: 1,
        cardNumber: '',
        cardOwnerName: '',
        cvv: '',
        startDate: '',
        amountSpent: 0,
        availableBalance: 0,
    });

    const switchFreezeCard = () => {
        // console.log('switchFreezeCard');
    };

    const navigation = props.navigation;

    useEffect(() => {
        fetch(`http://${apiHost}:3000/cardDetails/1`, { method: 'GET' })
            .then(results => results.json())
            .then(data => {
                setCardDetails(data);
            });
    });

    const sectiondata: [
        {
            key: string;
            heading: string;
            subHeading: string;
            iconName: any;
            iconType: string;
            isSwitchEnabled: boolean;
            onSwitchClick?: void;
        },
    ] = [
            {
                key: '0',
                heading: 'Top-up account',
                subHeading: 'Deposit money to your account to use with card',
                iconName: 'upload',
                iconType: 'antdesign',
                isSwitchEnabled: false,
            },
            {
                key: '1',
                heading: 'Weekly spending Limit',
                subHeading: `Your weekly spending limit is ${currencyFormat(weeklySpendingLimit)}`,
                iconName: 'dashboard',
                iconType: 'antdesign',
                isSwitchEnabled: true,
                onSwitchClick: switchSpendingLimit(),
            },
            {
                key: '2',
                heading: 'Freeze card',
                subHeading: `Your debit card is currently ${activeStatus}`,
                iconName: 'snowflake',
                iconType: 'fontisto',
                isSwitchEnabled: true,
                onSwitchClick: switchFreezeCard(),
            },
            {
                key: '3',
                heading: 'Get a new card',
                subHeading: 'This deactivates your current debit card',
                iconName: 'creditcard',
                iconType: 'antdesign',
                isSwitchEnabled: false,
            },
            {
                key: '4',
                heading: 'Deactivated Cards',
                subHeading: 'Your previously deactivated cards',
                iconName: 'prohibited',
                iconType: 'foundation',
                isSwitchEnabled: false,
            },
        ];

    return (
        <>
            <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
            <View style={styles.container}>
                <ScrollView stickyHeaderIndices={[0]}>
                    <View style={styles.box}>
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.header}>Debit Card</Text>
                            <Image source={homeIcon} style={styles.homeIcon} />
                        </View>
                        <View style={styles.balanceSection}>
                            <Text style={styles.subHeader}>Available Balance</Text>
                            <Text style={styles.header}>{currencyFormat(cardDetails.availableBalance)}</Text>
                        </View>
                    </View>
                    <View style={styles.cardPosition}>
                        <Card
                            number={cardDetails.cardNumber}
                            name={cardDetails.cardOwnerName}
                            cvv={cardDetails.cvv}
                            startDate={cardDetails.startDate}
                        />
                    </View>
                    <View style={styles.overlay}>
                        <View style={styles.textData}>
                            <View style={styles.limitWithBar}>
                                <Text style={styles.spendingLimit}>
                                    Debit Card Spending Limit
                                </Text>
                                <View style={styles.amountSpentOuter}>
                                    <Text style={styles.amountSpentText}>
                                        {currencyFormat(cardDetails.amountSpent)}
                                    </Text>
                                    <Text style={styles.grayColor}> | </Text>
                                    <Text style={styles.grayColor}>{currencyFormat(weeklySpendingLimit)}</Text>
                                </View>
                            </View>
                            <View style={styles.progressBar}>
                                <Animated.View
                                    style={[
                                        StyleSheet.absoluteFill,
                                        styles.colorFill,
                                        { width: barWidth },
                                    ]}
                                />
                            </View>
                        </View>
                        {sectiondata.map(item => {
                            if (item.isSwitchEnabled) {
                                return (
                                    <SectionView
                                        index={item.key}
                                        navigation={navigation}
                                        heading={item.heading}
                                        subHeading={item.subHeading}
                                        name={item.iconName}
                                        type={item.iconType}
                                        onSwitchClick={item.onSwitchClick}
                                        amountSpent={cardDetails.amountSpent}
                                        isSwitchEnabled
                                    />
                                );
                            } else {
                                return (
                                    <SectionView
                                        index={item.key}
                                        navigation={navigation}
                                        heading={item.heading}
                                        subHeading={item.subHeading}
                                        name={item.iconName}
                                        type={item.iconType}
                                        amountSpent={cardDetails.amountSpent}
                                    />
                                );
                            }
                        })}
                    </View>
                </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    box: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        left: 20,
        paddingTop: 40,
        paddingBottom: 70,
    },
    overlay: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        zIndex: 22,
    },
    textData: {
        marginTop: 170,
        left: 20,
    },
    header: {
        color: colors.white,
        fontSize: 22,
        fontWeight: '700',
    },
    subHeader: {
        color: colors.white,
        fontSize: 12,
    },
    balanceSection: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    cardPosition: {
        zIndex: 44,
        position: 'absolute',
        top: 130,
        left: 20,
        width: windowWidth - 40,
    },
    progressBar: {
        height: 14,
        flexDirection: 'row',
        width: windowWidth - 40,
        backgroundColor: '#E8FCE8',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 20,
    },
    spendingLimit: {
        fontSize: 13,
        color: 'black',
    },
    homeIcon: {
        width: 40,
        height: 40,
        right: 40,
    },
    limitWithBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: windowWidth - 40,
    },
    amountSpentOuter: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    amountSpentText: {
        color: colors.primary,
    },
    grayColor: {
        color: colors.gray,
    },
    colorFill: {
        backgroundColor: colors.primary,
        borderRadius: 20,
        borderTopRightRadius: 0,
    },
});

export default DebitCardScreen;
