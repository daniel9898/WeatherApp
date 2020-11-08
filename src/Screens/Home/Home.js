import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import Spinner from 'react-native-loading-spinner-overlay';

import MainCard from 'components/MainCard';

import styles from './style';
import HomeStore from './HomeStore';

const Home = () => {
  const [homeStore] = useState(new HomeStore());

  useEffect(() => {
    homeStore.getWeatherForTheCurrentPosition();
  }, []);

  return (
    <View style={styles.container}>
      <Spinner
        visible={homeStore.showSpinner}
        textStyle={styles.spinnerTextStyle}
      />
      <Text>Home Screen</Text>
      <MainCard
        headerTitle={homeStore.cityName}
        headerSubTitle={homeStore.todayDescription}
        contentTitle={homeStore.temperature}
        contentSubtitle={homeStore.sensation}
        icon={homeStore.icon}
      />
      <MainCard
        headerTitle="Pronóstico diario"
        // headerSubTitle={homeStore.currentCity.list[0].date}
        // contentTitle={homeStore.currentCity.list[0].temp}
        // contentSubtitle={homeStore.currentCity.list[0].feelsLike}
      />
    </View>
  );
};

export default observer(Home);
