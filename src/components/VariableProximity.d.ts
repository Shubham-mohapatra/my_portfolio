import { ComponentType, RefObject } from 'react';

interface VariableProximityProps {
  label: string;
  fromFontVariationSettings: string;
  toFontVariationSettings: string;
  containerRef?: RefObject<HTMLElement>;
  radius?: number;
  falloff?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  [key: string]: unknown;
}

declare const VariableProximity: ComponentType<VariableProximityProps>;
export default VariableProximity;
