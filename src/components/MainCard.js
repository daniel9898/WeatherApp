import * as React from 'react';
import PropTypes from 'prop-types';
import { Card, Title, Paragraph } from 'react-native-paper';

const styles = {
  container: {
    marginVertical: 20,
    elevation: 4,
  },
};

const MainCard = ({
  headerTitle,
  headerSubTitle,
  contentTitle,
  contentSubtitle,
}) => (
  <Card style={styles.container}>
    <Card.Title title={headerTitle} subtitle={headerSubTitle} />
    <Card.Content>
      <Title>{contentTitle}</Title>
      <Paragraph>{contentSubtitle}</Paragraph>
    </Card.Content>
  </Card>
);

MainCard.propTypes = {
  headerTitle: PropTypes.string,
  headerSubTitle: PropTypes.string,
  contentTitle: PropTypes.string,
  contentSubtitle: PropTypes.string,
};

MainCard.defaultProps = {
  headerTitle: '--',
  headerSubTitle: '--',
  contentTitle: '--',
  contentSubtitle: '--',
};

export default MainCard;
