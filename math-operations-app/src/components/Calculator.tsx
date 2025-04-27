import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Calculator = () => {
    const { t } = useTranslation();
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('add');
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        let res;

        switch (operation) {
            case 'add':
                res = number1 + number2;
                break;
            case 'subtract':
                res = number1 - number2;
                break;
            case 'multiply':
                res = number1 * number2;
                break;
            case 'divide':
                res = number2 !== 0 ? number1 / number2 : 'Error';
                break;
            default:
                res = null;
        }

        setResult(res);
    };

    return (
        <div>
            <h2>{t('calculator.title')}</h2>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder={t('calculator.firstNumber')}
            />
            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                <option value="add">{t('calculator.add')}</option>
                <option value="subtract">{t('calculator.subtract')}</option>
                <option value="multiply">{t('calculator.multiply')}</option>
                <option value="divide">{t('calculator.divide')}</option>
            </select>
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder={t('calculator.secondNumber')}
            />
            <button onClick={handleCalculate}>{t('calculator.calculate')}</button>
            {result !== null && <div>{t('calculator.result')}: {result}</div>}
        </div>
    );
};

export default Calculator;