import { Sizes } from '../../../interface';

export type TextSize = Extract<Sizes, 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'> | 'xxxl';

/**
 * `extra-bold`: 800
 * `bold`: 700
 * `medium`: 500
 * `regular`: 400
 */
export type TextWeight = 'extra-bold' | 'bold' | 'medium' | 'regular';

export type TextColor = 'primary' | 'secondary' | 'tertiary' | 'custom-brand-accent' | 'true-primary-blue' | 'true-primary-green' | 'true-primary-red' | 'neutral-100';
