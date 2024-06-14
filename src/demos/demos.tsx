import './demos.scss';

import { React3DMenu } from '../react-3d-menu';
import { SVG_ICONS } from './svg';

export const MenuDemo1: React.FC = () => {
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
    ].map(txt => <div className="menu-item">{txt}</div>);

    return (
        <React3DMenu items={menus} className="menu-demo-1">
            <div className="head">Pink Style</div>
        </React3DMenu>
    );
};

export const MenuDemo2: React.FC = () => {
    const words = ['Projects', 'Images', 'Settings', 'New'];
    const menus = [...words, ...words].map((txt, index) => {
        const IconSVG = SVG_ICONS[index];
        return (
            <div className="menu-item">
                <IconSVG />
                {txt}
            </div>
        );
    });

    const IconSVG = SVG_ICONS[0];

    return (
        <React3DMenu items={menus} className="menu-demo-2">
            <div className="head">
                <IconSVG />
                <span>Hover Here</span>
            </div>
        </React3DMenu>
    );
};

export const MenuDemo3: React.FC = () => {
    const menus = SVG_ICONS.slice(0, 6).map(Com => <Com />);
    const DEF_ICON = menus[1];

    return (
        <React3DMenu items={menus} className="menu-demo-3">
            {DEF_ICON}
        </React3DMenu>
    );
};
