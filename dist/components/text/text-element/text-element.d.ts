import { ComponentProps } from 'react';
import { TextElementScale, TextElementType, TextElementWeight } from './types';
export type TextElementProps<T extends TextElementType> = ComponentProps<T> & {
    type: T;
    scale?: TextElementScale;
    italic?: boolean;
    weight?: TextElementWeight;
};
export declare const TextElement: <T extends TextElementType>({ type, scale, italic, weight, className, ...props }: TextElementProps<T>) => import("react").DetailedReactHTMLElement<{
    className: string;
} & Omit<TextElementProps<T>, "scale" | "type" | "className" | "italic" | "weight">, HTMLSpanElement>;
