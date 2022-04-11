import React from 'react';
import {ViewStyle} from 'react-native';
import {Row as ROWComponent} from 'react-native-responsive-grid-system';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}

export default function RowComponent(props: Props) {
  const {children, style} = props;

  return <ROWComponent rowStyles={style}>{children}</ROWComponent>;
}
