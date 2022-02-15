import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { windowWidth } from '../constants';
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
  amountSpent: number;
}) => {
  const heading = props.heading;
  const subHeading = props.subHeading;
  const index = props.index;
  const [switchValue, setSwitchValue] = useState(false);

  const sectionClickEvents = (index: string) => {
    if (index === '1') {
      props.navigation.navigate('SpendingLimit', {
        amountSpent: props.amountSpent,
      });
    } else if (index === '0') {
      props.navigation.navigate('TopUp');
    } else if (index === '3') {
      props.navigation.navigate('SelectNewCard');
    } else if (index === '4') {
      props.navigation.navigate('ViewInactiveCards');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionLayout}>
        <TouchableOpacity
          onPress={() => sectionClickEvents(index)}
          style={styles.iconTouch}>
          <View style={styles.iconBackground}>
            <Icon name={props.name} color="white" type={props.type} />
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.subHeading}>{subHeading}</Text>
          </View>
        </TouchableOpacity>
        {props.isSwitchEnabled && (
          <Switch
            trackColor={{ false: colors.tertiary, true: colors.primary }}
            thumbColor={colors.white}
            ios_backgroundColor={colors.tertiary}
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
  container: {
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
  iconBackground: {
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: colors.secondary,
    marginRight: 10,
    justifyContent: 'center',
  },
  sectionLayout: {
    width: windowWidth - 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconTouch: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
