import React, { useState } from 'react';
import Draggable from 'react-draggable';
import {
    RiDivideLine,
    RiAddLine,
    RiSubtractLine,
    RiPercentLine,
    RiCloseLine,
} from 'react-icons/ri';
import { TbEqual } from 'react-icons/tb';
import { isNumber, handleNumbers, handleOperators } from './functions';

function Calculator() {
    const [output, setOutput] = useState({
        firstOperand: '0',
        operator: '0',
        secondOperand: '0',
        sum: 0,
        output: '0',
        lastOperator: '0',
        lastSecondOperand: '0',
        fontSize: '55px',
        clearButton: 'AC',
    });

    function setNewOutput(output) {
        const outputCopy = { ...output };
        if (outputCopy.output === 'NaN' || typeof outputCopy.sum !== 'number') {
            outputCopy.output = 'ERROR';
            setOutput(outputCopy);
        } else {
            setOutput(outputCopy);
        }
    }

    function handleClick(event) {
        const newInput = event.currentTarget.value;
        if (isNumber(newInput)) {
            const numbers = handleNumbers(output, newInput);
            setNewOutput(numbers);
        } else {
            const operators = handleOperators(output, newInput);
            setNewOutput(operators);
        }
    }

    return (
        <main>
            <section className="calc-container">
                <div className="calculator">
                    <div className="top-bar">
                        <div className="red"></div>
                        <div className="yellow"></div>
                        <div className="green"></div>
                    </div>
                    <output className="output" id="handle">
                        <span className="output-text" style={{ fontSize: output.fontSize }}>
                            {output.output}
                        </span>
                    </output>
                    {[
                        { className: "AC top", value: "AC", label: output.clearButton },
                        { className: "number-toggle top", value: "toggle", label: "+/-" },
                        { className: "percent top icon", value: "percent", icon: <RiPercentLine /> },
                        { className: "divide right icon", value: "divide", icon: <RiDivideLine /> },
                        { className: "multiply right icon", value: "multiply", icon: <RiCloseLine /> },
                        { className: "subtract right icon", value: "subtract", icon: <RiSubtractLine /> },
                        { className: "add right icon", value: "add", icon: <RiAddLine /> },
                        { className: "equals right icon", value: "equals", icon: <TbEqual /> },
                        { className: "nine", value: 9, label: "9" },
                        { className: "eight", value: 8, label: "8" },
                        { className: "seven", value: 7, label: "7" },
                        { className: "six", value: 6, label: "6" },
                        { className: "five", value: 5, label: "5" },
                        { className: "four", value: 4, label: "4" },
                        { className: "three", value: 3, label: "3" },
                        { className: "two", value: 2, label: "2" },
                        { className: "one", value: 1, label: "1" },
                        { className: "zero", value: 0, label: "0" },
                        { className: "decimal", value: "decimal", label: "." },
                    ].map(({ className, value, label, icon }) => (
                        <Draggable key={value} bounds="parent">
                            <button className={className} value={value} onClick={handleClick}>
                                {icon || label}
                            </button>
                        </Draggable>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Calculator;
