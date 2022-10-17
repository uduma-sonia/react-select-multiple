import * as React from 'react';
import React__default, { useState, useCallback, useEffect } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".rselect_multiple_tag_container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.rselect_multiple_tag_container .rselect_tag {\r\n  cursor: default;\r\n  font-size: 16px;\r\n  display: flex;\r\n  align-items: flex-end;\r\n  gap: 10px;\r\n  border-radius: 15px;\r\n  padding: 5px 10px;\r\n  background-color: rgba(113, 219, 113, 0.334);\r\n}\r\n\r\n.rselect_multiple_tag_container .rselect_tag .rselect_tag_text {\r\n  margin: 0px;\r\n}\r\n\r\n.rselect_multiple_tag_container .rselect_tag_remove_button {\r\n  padding: 0px;\r\n  background-color: transparent;\r\n  border: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n}\r\n\r\n.rselect_multiple_tag_container .rselect_tag_remove_button:hover {\r\n  background-color: rgb(246, 194, 194);\r\n}\r\n\r\n.rselect_select {\r\n  width: 100%;\r\n  height: 45px;\r\n  border-radius: 8px;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  outline: none;\r\n  border: 1px solid gray;\r\n}\r\n\r\n.rselect_select {\r\n  padding: 10px;\r\n  padding-right: 30px;\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2300CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');\r\n  background-repeat: no-repeat, repeat;\r\n  background-position: right 0.7em top 50%, 0 0;\r\n  background-size: 0.65em auto, 100%;\r\n}\r\n\r\n.rselect_select::-ms-expand {\r\n  display: none;\r\n}\r\n\r\n.rselect_input {\r\n  width: 100%;\r\n  height: 45px;\r\n  border-radius: 8px;\r\n  outline: none;\r\n  border: 1px solid gray;\r\n  font-size: 16px;\r\n  padding: 10px;\r\n  padding-right: 30px;\r\n}\r\n";
styleInject(css_248z);

function SelectCombo({ children, placeholder, name, required = false, disabled = false, id, autoComplete, autoFocus = false, maxNumber, onChange, tagIcon, tagContainerClass, tagBackgroundColor, tagTextColor, selectTagClass, selectTagTextClass, selectTagIconClass, selectClass, }) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleSelect = useCallback((value) => {
        if (maxNumber) {
            if (selectedOptions.length >= maxNumber) {
                setSelectedOptions(selectedOptions);
            }
            else {
                setSelectedOptions((prev) => {
                    const isOptionSelected = prev.find((item) => item === value);
                    if (!isOptionSelected) {
                        return [...prev, value];
                    }
                    else {
                        return [...prev];
                    }
                });
            }
        }
        else {
            setSelectedOptions((prev) => {
                const isOptionSelected = prev.find((item) => item === value);
                if (!isOptionSelected) {
                    return [...prev, value];
                }
                else {
                    return [...prev];
                }
            });
        }
    }, [maxNumber, selectedOptions]);
    useEffect(() => {
        if (selectedOptions) {
            onChange === null || onChange === void 0 ? void 0 : onChange(selectedOptions);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedOptions]);
    const handleRemoveOptions = (value) => {
        const modifiedArr = selectedOptions.filter((item) => item !== value);
        setSelectedOptions(modifiedArr);
    };
    return (React.createElement("div", { className: 'react_select_several' },
        React.createElement("div", { className: `rselect_multiple_tag_container ${tagContainerClass}` }, selectedOptions.map((item) => {
            return (React.createElement("div", { className: `rselect_tag ${selectTagClass}`, key: item, style: { backgroundColor: tagBackgroundColor } },
                React.createElement("p", { className: `rselect_tag_text ${selectTagTextClass}`, style: { color: tagTextColor } }, item),
                React.createElement("button", { className: `rselect_tag_remove_button ${selectTagIconClass}`, onClick: () => handleRemoveOptions(item) }, tagIcon !== null && tagIcon !== void 0 ? tagIcon : React.createElement(ClearButton, null))));
        })),
        React.createElement("select", { onChange: (e) => handleSelect(e.currentTarget.value), defaultValue: 'DEFAULT', name: name, disabled: disabled, required: required, id: id, autoComplete: autoComplete, autoFocus: autoFocus, className: `rselect_select ${selectClass}` },
            React.createElement("option", { value: 'DEFAULT', disabled: true }, placeholder !== null && placeholder !== void 0 ? placeholder : 'Select options'),
            children)));
}
const ClearButton = () => {
    return (React.createElement("svg", { width: '18', height: '18', xmlns: 'http://www.w3.org/2000/svg', version: '1.1' },
        React.createElement("g", { stroke: '#4a4949', strokeWidth: '2' },
            React.createElement("line", { x1: '4', y1: '4', x2: '14', y2: '14' }),
            React.createElement("line", { x1: '4', y1: '14', x2: '14', y2: '4' }))));
};

function TextCombo({ placeholder = 'Type and enter', name, required = false, disabled = false, id, autoComplete, autoFocus = false, maxNumber, onChange, tagIcon, type = 'text', tagBackgroundColor, tagTextColor, tagContainerClass, inputTagClass, inputTagTextClass, inputTagIconClass, inputClass, }) {
    const [selectedInput, setSelectedInput] = useState([]);
    const handleSelect = useCallback((event) => {
        if (maxNumber) {
            if (selectedInput.length >= maxNumber) {
                setSelectedInput(selectedInput);
            }
            else {
                if (event.key === 'Enter') {
                    const value = event.target.value;
                    setSelectedInput((prev) => {
                        const isOptionSelected = prev.find((item) => item === value);
                        if (!isOptionSelected) {
                            return [...prev, value];
                        }
                        else {
                            return [...prev];
                        }
                    });
                    event.currentTarget.value = '';
                }
            }
        }
        else {
            if (event.key === 'Enter') {
                const value = event.target.value;
                setSelectedInput((prev) => {
                    const isOptionSelected = prev.find((item) => item === value);
                    if (!isOptionSelected) {
                        return [...prev, value];
                    }
                    else {
                        return [...prev];
                    }
                });
                event.currentTarget.value = '';
            }
        }
    }, [maxNumber, selectedInput]);
    const handleRemoveInput = (value) => {
        const modifiedArr = selectedInput.filter((item) => item !== value);
        setSelectedInput(modifiedArr);
    };
    useEffect(() => {
        if (selectedInput) {
            onChange === null || onChange === void 0 ? void 0 : onChange(selectedInput);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedInput]);
    return (React__default.createElement("div", { className: 'react_select_several' },
        React__default.createElement("div", { className: `rselect_multiple_tag_container ${tagContainerClass}` }, selectedInput.map((item) => {
            return (React__default.createElement("div", { className: `rselect_tag ${inputTagClass}`, key: item, style: { backgroundColor: tagBackgroundColor } },
                React__default.createElement("p", { className: `rselect_tag_text ${inputTagTextClass}`, style: { color: tagTextColor } }, item),
                React__default.createElement("button", { className: `rselect_tag_remove_button ${inputTagIconClass}`, onClick: () => handleRemoveInput(item) }, tagIcon !== null && tagIcon !== void 0 ? tagIcon : React__default.createElement(ClearButton, null))));
        })),
        React__default.createElement("div", null,
            React__default.createElement("input", { className: `rselect_input ${inputClass}`, placeholder: placeholder, name: name, disabled: disabled, required: required, id: id, autoComplete: autoComplete, autoFocus: autoFocus, type: type, onKeyDown: (event) => handleSelect(event) }))));
}

export { TextCombo as InputMultiple, SelectCombo as SelectMultiple };
//# sourceMappingURL=index.es.js.map
