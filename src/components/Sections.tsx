import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { windowHeight, windowWidth } from '../constants';
import { Icon } from 'react-native-elements';
import { colors } from '../styles/globalStyles';

export const SectionView = (props: {
  index: string;
  heading: string;
  subHeading: string;
  name: any;
  onSwitchClick?: void;
  isSwitchEnabled?: boolean;
  navigation: any;
  type: string;
}) => {
  const heading = props.heading;
  const subHeading = props.subHeading;
  const index = props.index;
  const [switchValue, setSwitchValue] = useState(false);

  const sectionClickEvents = (index: string) => {
    if (index === '1') {
      props.navigation.navigate('SpendingLimit');
    }
  };

  return (
    <View style={styles.total}>
      <View
        style={{
          width: windowWidth - 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => sectionClickEvents(index)}
          style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <View
            style={{
              borderRadius: 20,
              width: 40,
              height: 40,
              backgroundColor: colors.secondary,
              marginRight: 10,
              justifyContent: "center"
            }}
          >
            <Icon
              name={props.name}
              color='white'
              type={props.type}
            ></Icon>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.subHeading}>{subHeading}</Text>
          </View>
        </TouchableOpacity>
        {props.isSwitchEnabled && (
          <Switch
            trackColor={{ false: '#f4f3f4', true: '#04cb62' }}
            thumbColor={'#ffffff'}
            ios_backgroundColor="#0c375b"
            value={switchValue}
            onValueChange={switchValue => {
              setSwitchValue(switchValue);
              props.onSwitchClick;
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  total: {
    flex: 1,
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
