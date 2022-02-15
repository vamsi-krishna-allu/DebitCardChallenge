import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import cardIcon from '../assets/cardIcon.jpeg';
import {windowWidth} from '../constants';
import {Icon} from 'react-native-elements';
import {colors} from '../styles/globalStyles';

export const Card = (props: {
  number: any;
  name: any;
  cvv: any;
  startDate: any;
}) => {
  const number = props.number;
  const name = props.name;
  const cvv = props.cvv;
  const startDate = props.startDate;
  const [hideCardNumber, setHideCardNumber] = useState(false);

  return (
    <View>
      <View style={styles.hideCard}>
        <TouchableOpacity
          style={styles.hideCardLayout}
          onPress={() => setHideCardNumber(!hideCardNumber)}>
          <Icon
            name={hideCardNumber ? 'eye' : 'eye-with-line'}
            color={colors.primary}
            type="entypo"
          />
          <Text style={styles.hideCardTitle}>
            {hideCardNumber ? 'Show card number' : 'Hide card number'}
          </Text>
          <View style={styles.invertedCurve} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardStyle}>
        <View style={styles.section}>
          <View style={styles.logoWithTitle}>
            <Image source={cardIcon} style={styles.cardIcon} />
            <Text style={styles.cardTitle}>aspire</Text>
          </View>
          <Text style={styles.cardName}>{name}</Text>
          <View style={styles.numberDateAndCvv}>
            {!hideCardNumber && <Text style={styles.number}>{number}</Text>}
            {hideCardNumber && (
              <Text style={styles.number}>
                {'X X X X    X X X X    X X X X    X X X X'}
              </Text>
            )}
            <View style={styles.dateAndCvv}>
              <Text style={styles.dateOrCvv}>Thru: {startDate}</Text>
              <Text style={styles.dateOrCvv}>CVV: {cvv}</Text>
            </View>
          </View>
          <Text style={styles.visa}>VISA</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: '#04cb62',
    borderRadius: 10,
  },
  section: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 20,
    marginTop: 10,
  },
  dateAndCvv: {
    flexDirection: 'row',
    color: 'white',
    justifyContent: 'space-between',
    marginTop: 10,
    marginRight: windowWidth - 220,
  },
  numberDateAndCvv: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  cardTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
  },
  cardName: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    paddingTop: 10,
  },
  number: {
    color: 'white',
    fontSize: 14,
  },
  dateOrCvv: {
    color: 'white',
    fontSize: 14,
  },
  visa: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    left: windowWidth - 140,
  },
  hideCard: {
    backgroundColor: 'white',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: windowWidth - 220,
    left: windowWidth - 230,
    padding: 3,
  },
  hideCardTitle: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 12,
    color: '#04cb62',
  },
  invertedCurve: {
    backgroundColor: 'white',
  },
  logoWithTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    lineHeight: 1.5,
  },
  cardIcon: {
    width: 20,
    height: 20,
    borderRadius: 30,
    marginRight: 10,
    marginTop: 5,
  },
  hideCardLayout: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
