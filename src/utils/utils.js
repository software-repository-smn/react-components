import { useState } from "react";

export const getClassName = (defaultClass = '', ifExistClassList, conditionClassList) => {
    let className = defaultClass;
    if (Array.isArray(ifExistClassList)) {
        ifExistClassList.forEach(ifExistClass => {
            if (ifExistClass) {
                className += ` ${ifExistClass}`;
            }
        });
    } else if (ifExistClassList) {
        className += ` ${ifExistClassList}`;
    }
    if (Array.isArray(conditionClassList)) {
        conditionClassList.forEach(conditionClass => {
            if (conditionClass.condition) {
                className += ` ${conditionClass.className}`;
            }
        });
    } else if (conditionClassList && conditionClassList.condition) {
        className += ` ${conditionClassList.className}`;
    }
    return className.trim();
};

export const useInputHandler = (initialState = '') => {
    const [state, setState] = useState(initialState);
    const inputHandler = event => setState(event.target.value);

    return [state, inputHandler];
};