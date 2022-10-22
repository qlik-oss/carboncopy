import {expandCellAtom} from '@qlik/react-native-simple-grid/src/atoms';
import {useAtom} from 'jotai';
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DataTable, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ExpandedTableCell} from '@qlik/react-native-simple-grid';

const DATA_TABLE_HEADER_HEIGHT = 48;

const ExpandedTableCellView = () => {
  return <ExpandedTableCell />;
};

const styles = StyleSheet.create({
  header: {
    height: DATA_TABLE_HEADER_HEIGHT,
  },
  title: {
    paddingHorizontal: 8,
  },
  cell: {
    flex: 1,
    padding: 8,
  },
  textCol2: {
    fontWeight: 'bold',
  },
  miniChart: {
    minHeight: 96,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 4,
  },
});

export default ExpandedTableCellView;
