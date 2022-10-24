import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Supernova} from '@qlik/react-native-carbon';
import theme from './theme.json';
import {useAtomValue} from 'jotai';
import {currentModelAtom, loadableOpenAppAtom} from '../atoms';
import {SafeAreaView} from 'react-native-safe-area-context';
import {expandCellAtom} from '@qlik/react-native-simple-grid/src/atoms';
import {useNavigation} from '@react-navigation/native';

const Visualization = () => {
  const model = useAtomValue(currentModelAtom);
  const openedApp = useAtomValue<any>(loadableOpenAppAtom);
  const expandCell = useAtomValue(expandCellAtom);
  const navigation = useNavigation();

  useEffect(() => {
    if (expandCell.expand) {
      navigation.push('ExpandedTableCell');
    }
  }, [expandCell, navigation]);

  return (
    <SafeAreaView style={styles.body} edges={['bottom', 'left', 'right']}>
      <Supernova
        sn={supernova}
        theme={theme}
        object={model}
        app={openedApp.data.app}
        appLayout={openedApp.data.appLayout}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: 'white',
    overflow: 'hidden',
    padding: 8,
    margin: 8,
  },
});

export default Visualization;
