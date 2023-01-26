/* eslint-disable react/no-unstable-nested-components */
import {BottomSheetFlatList, BottomSheetModal} from '@gorhom/bottom-sheet';
import React, {forwardRef, useMemo} from 'react';
import {Text, View} from 'react-native';

export const BottomSheetGallery = forwardRef<BottomSheetModal>((_, ref) => {
  const snapPoints = useMemo(() => ['50%', '75%', '100'], []);

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      style={{
        backgroundColor: 'red',
      }}>
      <BottomSheetFlatList
        data={[0, 1]}
        renderItem={() => (
          <View>
            <Text>Teste</Text>
          </View>
        )}
      />
    </BottomSheetModal>
  );
});