import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import Spinner from 'react-native-loading-spinner-overlay';

import styles from './style';
import HomeStore from './HomeStore';

const Home = () => {
  const [homeStore] = useState(new HomeStore());

  return (
    <View>
      <Spinner
        visible={homeStore.showSpinner}
        textStyle={styles.spinnerTextStyle}
      />
      <Text>Home Screen</Text>
    </View>
  );
};

export default observer(Home);
