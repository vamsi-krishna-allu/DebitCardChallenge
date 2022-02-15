import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateSpendingLimit} from '../../reducers/DebitCard/actionCreators';
import {colors} from '../../styles/globalStyles';
import {windowHeight, windowWidth} from '../../constants';

const SpendingLimit = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  return (
    <View style={styles.total}>
      <TextInput
        style={{
          width: windowWidth - 40,
          fontSize: 40,
          borderColor: colors.secondary,
          borderWidth: 1,
        }}
        placeholder="Enter new limit"
        onChangeText={newText => setText(newText)}
        value={text}
      />
      <TouchableOpacity
        onPress={() => dispatch(updateSpendingLimit(text))}
        style={{
          backgroundColor: colors.primary,
          width: windowWidth - 40,
          height: 50,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: colors.white, fontSize: 20, fontWeight: 'bold'}}>
          Change Spending Limit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  total: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    left: 20,
    paddingBottom: 20,
    paddingTop: 10,
    width: windowWidth - 40,
  },
  section: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  heading: {
    fontSize: 13,
    color: 'black',
  },
  subHeading: {
    fontSize: 13,
  },
});

export default SpendingLimit;
