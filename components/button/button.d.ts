import React, { ComponentProps } from 'react';
import { ButtonScale } from './types';
export type ButtonProps = ComponentProps<'button'> & {
    scale?: ButtonScale;
};
export declare const Button: ({ scale, type, className, children, ...props }: ButtonProps) => React.JSX.Element;
