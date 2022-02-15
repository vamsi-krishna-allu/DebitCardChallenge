import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import fetch from 'react-native-fetch-polyfill';
import { Card } from '../../components/Card';
import { apiHost, windowWidth } from '../../constants';
import { updateCardDetails, updateWidth } from '../../reducers/DebitCard/actionCreators';

const NewCard = (props: { navigation: any }) => {
  const dispatch = useDispatch();

  const [cardDetailsList, setCardDetailsList] = useState([]);

  const cardDetails = useSelector(state => {
    return state.cardDetails;
  });

  const weeklySpendingLimit =
    useSelector(state => {
      return state.spendingLimit;
    }) || 0;

  useEffect(() => {
    fetch(`http://${apiHost}:3000/cardDetails/`, { method: 'GET' })
      .then(results => results.json())
      .then(data => {
        data = data.filter(
          i => i.status === 'active' && i.id !== cardDetails.id,
        );
        setCardDetailsList(data);
      });
    // eslint-disable-next-line
  }, []);

  const updateCard = item => {
    const id = cardDetails.id;
    let updatedCardDetails = cardDetails;
    cardDetails.status = 'inactive';
    fetch(`http://${apiHost}:3000/cardDetails/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCardDetails),
    })
      .then(results => results.json())
      .then(() => {
        dispatch(updateCardDetails(item));
        let width = (item.amountSpent * 100) / weeklySpendingLimit;
        dispatch(updateWidth(width + '%'));
        props.navigation.navigate('CardScreen');
      });
  };

  return (
    <ScrollView style={styles.container}>
      {cardDetailsList.map(item => {
        return (
          <TouchableOpacity onPress={() => updateCard(item)}>
            <Card
              number={item.cardNumber}
              name={item.cardOwnerName}
              cvv={item.cvv}
              startDate={item.startDate}
            />
          </TouchableOpacity>
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

export default NewCard;
