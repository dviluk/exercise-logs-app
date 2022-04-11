import React from 'react';

import {Text} from '@ui-kitten/components';
import {Col, Row, Screen} from 'components';
import {StyleSheet} from 'react-native';

//@ts-ignore
const isHermes = global.HermesInternal;

const HelloWorldScreenComponent = () => {
  return (
    <Screen>
      <Text>Hello World</Text>
      <Text>Using Hermes: {isHermes ? 'true' : 'false'}</Text>
      <Row>
        <Col xs={10} sm={6} style={[style.col, {backgroundColor: 'red'}]}>
          <Text style={style.textInCols}>Col 1</Text>
        </Col>
        <Col xs={2} sm={6} style={[style.col, {backgroundColor: 'blue'}]}>
          <Text style={style.textInCols}>Col 2</Text>
        </Col>
      </Row>
    </Screen>
  );
};

export default HelloWorldScreenComponent;

const style = StyleSheet.create({
  textInCols: {
    color: '#fff',
  },
  col: {
    padding: 5,
  },
});
