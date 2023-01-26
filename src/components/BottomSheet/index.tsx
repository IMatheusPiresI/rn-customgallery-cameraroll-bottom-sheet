/* eslint-disable react/no-unstable-nested-components */
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import React, {forwardRef, useMemo} from 'react';
import {Text, View} from 'react-native';

export const BottomSheetGallery = forwardRef<BottomSheet>((_, ref) => {
  const snapPoints = useMemo(() => ['50%', '75%', '100'], []);

  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose>
      <BottomSheetFlatList
        data={[0, 1]}
        renderItem={() => (
          <View>
            <Text>Teste</Text>
          </View>
        )}
      />
    </BottomSheet>
  );
});
