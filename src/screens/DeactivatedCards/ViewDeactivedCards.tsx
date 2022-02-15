import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import fetch from 'react-native-fetch-polyfill';
import {Card} from '../../components/Card';
import {apiHost, windowWidth} from '../../constants';

const DeactivatedCard = () => {
  const [cardDetailsList, setCardDetailsList] = useState([]);

  useEffect(() => {
    fetch(`http://${apiHost}:3000/cardDetails/`, {method: 'GET'})
      .then(results => results.json())
      .then(data => {
        data = data.filter(i => i.status === 'inactive');
        setCardDetailsList(data);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {cardDetailsList.map(item => {
        return (
          <Card
            number={item.cardNumber}
            name={item.cardOwnerName}
            cvv={item.cvv}
            startDate={item.startDate}
          />
        );
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    left: 20,
    paddingBottom: 20,
    paddingTop: 10,
    width: windowWidth - 40,
  },
});

export default DeactivatedCard;
