import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { messages } from './locales/en/messages';
import { Article } from './components/Article';

i18n.load('en', messages);
i18n.activate('en');

export const PROP = 'prop';

function App() {
  const [count, setCount] = useState(0);

  return (
    <I18nProvider i18n={i18n}>
      <div className="App">
        <Article />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React! + Lingui</p>
          <p>
            <button
              type="button"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </button>
          </p>
        </header>
        <footer>hello</footer>
      </div>
    </I18nProvider>
  );
}

export default App;
