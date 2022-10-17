import React from 'react';
import './styles.css';
interface InputMultipleProps {
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
    type?: string;
    tagBackgroundColor?: string;
    tagTextColor?: string;
    tagContainerClass?: string;
    inputTagClass?: string;
    inputTagTextClass?: string;
    inputTagIconClass?: string;
    inputClass?: string;
}
export default function InputMultiple({ placeholder, name, required, disabled, id, autoComplete, autoFocus, maxNumber, onChange, tagIcon, type, tagBackgroundColor, tagTextColor, tagContainerClass, inputTagClass, inputTagTextClass, inputTagIconClass, inputClass, }: InputMultipleProps): JSX.Element;
export {};
