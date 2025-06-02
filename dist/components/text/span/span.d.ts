import React from 'react';
import { TextElementProps } from '../text-element';
export type SpanProps = Omit<TextElementProps<'span'>, 'type'>;
export declare const Span: ({ scale, ...props }: SpanProps) => React.JSX.Element;
