import React, {useCallback, useRef} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {BottomSheetGallery} from './components/BottomSheet';
const App: React.FC = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheet>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.snapToIndex(0);
  }, []);

  // renders
  return (
    <View style={styles.container}>
      <Button
        onPress={handlePresentModalPress}
        title="Present Modal"
        color="white"
      />
      <BottomSheetGallery ref={bottomSheetModalRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
export default App;
