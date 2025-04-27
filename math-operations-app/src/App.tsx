import React, { useState } from 'react';
import { Calculator } from './components/Calculator';
import { LanguageSelector } from './components/LanguageSelector';
import './styles.css';
import './i18n';

const App = () => {
    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    return (
        <div className="app">
            <LanguageSelector onLanguageChange={handleLanguageChange} />
            <h1>{language === 'en' ? 'Math Operations' : language === 'fr' ? 'Opérations Mathématiques' : language === 'de' ? 'Mathematische Operationen' : 'العمليات الرياضية'}</h1>
            <Calculator language={language} />
        </div>
    );
};

export default App;