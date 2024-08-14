import type {
  BottomSheetBackdropProps,
  BottomSheetModalProps,
} from '@gorhom/bottom-sheet';
import { BottomSheetModal, useBottomSheet } from '@gorhom/bottom-sheet';
import * as React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { appSpacing } from '../../constants/Spacing';
import { useThemeColor } from '../../hooks/useThemeColor';
import { BORDER_WIDHT, radius } from '../../constants/Border';

type ModalProps = BottomSheetModalProps;

type ModalRef = React.ForwardedRef<BottomSheetModal>;

export const useModal = () => {
  const ref = React.useRef<BottomSheetModal>(null);
  const present = React.useCallback((data?: unknown) => {
    ref.current?.present(data);
  }, []);
  const dismiss = React.useCallback(() => {
    ref.current?.dismiss();
  }, []);
  return { ref, present, dismiss };
};

// eslint-disable-next-line react/display-name
export const Modal = React.forwardRef(
  (
    {
      snapPoints: _snapPoints = ['50%'],
      detached = false,
      ...props
    }: ModalProps,
    ref: ModalRef,
  ) => {
    const detachedProps = React.useMemo(
      () => getDetachedProps(detached),
      [detached],
    );
    const modal = useModal();
    const snapPoints = React.useMemo(() => _snapPoints, [_snapPoints]);
    const handleLineColor = useThemeColor('secondaryTxt');
    const modalBg = useThemeColor('primaryBg');
    const borderColor = useThemeColor('outline');

    const modalTopBorderStyles: BottomSheetModalProps['style'] = {
      backgroundColor: borderColor,
      borderColor: borderColor,
      borderRadius: radius.normal,
      borderTopWidth: BORDER_WIDHT,
    };

    React.useImperativeHandle(
      ref,
      () => (modal.ref.current as BottomSheetModal) || null,
    );

    const renderHandleComponent = React.useCallback(
      () => (
        <>
          <View
            style={[
              styles.handle,
              {
                backgroundColor: handleLineColor,
              },
            ]}
          />
        </>
      ),
      [modal.dismiss],
    );

    return (
      <BottomSheetModal
        {...props}
        {...detachedProps}
        style={modalTopBorderStyles}
        backgroundStyle={[
          styles.modalShadow,
          {
            backgroundColor: modalBg,
          },
        ]}
        ref={modal.ref}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={props.backdropComponent || renderBackdrop}
        handleComponent={renderHandleComponent}
      />
    );
  },
);

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const CustomBackdrop = ({ style }: BottomSheetBackdropProps) => {
  const { close } = useBottomSheet();
  const modalBackDropBg = useThemeColor('modalBg');

  return (
    <AnimatedPressable
      onPress={() => close()}
      entering={FadeIn.duration(50)}
      exiting={FadeOut.duration(20)}
      style={[
        style,
        {
          backgroundColor: modalBackDropBg,
        },
      ]}
    />
  );
};

export const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <CustomBackdrop {...props} />
);

const getDetachedProps = (detached: boolean) => {
  if (detached) {
    return {
      detached: true,
      bottomInset: 46,
      style: { marginHorizontal: 16, overflow: 'hidden' },
    } as Partial<BottomSheetModalProps>;
  }
  return {} as Partial<BottomSheetModalProps>;
};

const styles = StyleSheet.create({
  modalShadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -36,
    },
    shadowOpacity: 0.1,
    shadowRadius: 36,
    elevation: -26,
  },
  handle: {
    height: 3,
    width: 40,
    borderRadius: 2,
    opacity: 0.5,
    alignSelf: 'center',
    marginVertical: appSpacing.xl,
  },
});
