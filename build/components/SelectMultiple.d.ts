import * as React from 'react';
import { ReactNode } from 'react';
import './styles.css';
interface SelectMultipleProps {
    children?: ReactNode;
    placeholder?: string;
    name?: string;
    required?: boolean;
    disabled?: boolean;
    id?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    maxNumber?: number;
    onChange?: (arg: string[]) => void;
    tagIcon?: React.ReactElement;
    tagContainerClass?: string;
    tagBackgroundColor?: string;
    tagTextColor?: string;
    selectTagClass?: string;
    selectTagTextClass?: string;
    selectTagIconClass?: string;
    selectClass?: string;
}
export default function SelectMultiple({ children, placeholder, name, required, disabled, id, autoComplete, autoFocus, maxNumber, onChange, tagIcon, tagContainerClass, tagBackgroundColor, tagTextColor, selectTagClass, selectTagTextClass, selectTagIconClass, selectClass, }: SelectMultipleProps): JSX.Element;
export declare const ClearButton: () => JSX.Element;
export {};
