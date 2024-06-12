// import React from 'react';
import ReactDOM from 'react-dom/client';

import './app.scss';

import {React3DMenu} from './react-3d-menu';

// const gp = new TWEEN.Group();

const menus = [
    '>_<#@!',
    '(^(OO)^) ≡',
    '^_^;',
    '→_→',
    '(＝^ω^＝)',
    '…(⊙_⊙;)… ',
    'O__O" ',
    'O_o',
    '（⊙o⊙）',
    '（*>.<*）~'
].map(txt => <div style={{textAlign: 'center'}}>{txt}</div>);

function App() {
    return (
        <div className="app">
            <div className="col">
                <React3DMenu items={menus}>
                    <span>hello world</span>
                </React3DMenu>
            </div>
            <div className="col"></div>
            <div className="col"></div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);
