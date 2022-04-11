import React from 'react';
import {ViewStyle} from 'react-native';
import {Col as COLComponent} from 'react-native-responsive-grid-system';

interface Props {
  children: React.ReactChild;
  style?: ViewStyle | ViewStyle[];
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

export default function ColComponent(props: Props) {
  const {children, style, lg, md, sm, xs} = props;

  const higherValue = lg || md || sm || xs || 12;

  return (
    <COLComponent
      colStyles={style}
      lg={lg || higherValue}
      md={md || higherValue}
      sm={sm || higherValue}
      xs={xs || higherValue}>
      {children}
    </COLComponent>
  );
}
