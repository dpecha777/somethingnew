import { appSpacing, AppSpacingUnion } from '../constants/Spacing';

export const useSpacing = (size: AppSpacingUnion) => {
  return appSpacing[size] || 0;
};
