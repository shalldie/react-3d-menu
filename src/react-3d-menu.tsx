import React, {MouseEventHandler, useCallback, useRef, useState} from 'react';

import styles from './react-3d-menu.module.scss';
import {Animate, MIN_POS} from './Animate';
import classNames from 'classnames';

interface IMenuItemProps {
    items: React.ReactNode[];
    posList: number[];
    index: number;
}

const MenuItem: React.FC<IMenuItemProps> = props => {
    return (
        <div
            className={classNames('menu-item', styles['menu-item'])}
            style={{transform: `rotate3d(1,0,0,${props.posList[props.index]}deg)`}}
        >
            <div
                className={classNames('menu-item-title', {
                    hidden: props.posList[props.index] === MIN_POS,
                    shadow: props.posList[props.index] < MIN_POS / 3 // 60
                })}
            >
                {props.items[props.index]}
            </div>
            {props.items[props.index + 1] && <MenuItem {...props} index={props.index + 1} />}
        </div>
    );
};

export interface IReact3DMenuProps extends React.PropsWithChildren {
    items: React.ReactNode[];
    className?: string;
    style?: React.CSSProperties;
}

function useAnimate(len = 0) {
    const ani = useRef<Animate>();
    const [offsetY, setOffsetY] = useState(0);
    const [posList, setPosListRaw] = useState(Array.from({length: len}).map(() => -180));

    function setPosList(newPosList: number[]) {
        // console.log(`invoke newpostlist: ${JSON.stringify(newPosList)}`);
        setPosListRaw(newPosList);
    }

    const mouseMove: MouseEventHandler = useCallback(ex => {
        const offset = (ex.nativeEvent.offsetX - 146 / 2) * 0.5;
        setOffsetY(offset);
    }, []);

    const resetAnimate = useCallback(() => {
        ani.current?.stop();
        ani.current = new Animate({
            posList: posList,
            onUpdate: setPosList
        });
    }, [posList]);

    const mouseEnter = useCallback(
        () => {
            resetAnimate();
            ani.current?.expand();
        }, // eslint-disable-next-line
        [posList]
    );

    const mouseLeave = useCallback(
        () => {
            resetAnimate();
            ani.current?.collapse();
        }, // eslint-disable-next-line
        [posList]
    );

    return {
        offsetY,
        posList,
        mouseMove,
        mouseEnter,
        mouseLeave
    };
}

export const React3DMenu: React.FC<IReact3DMenuProps> = props => {
    const ani = useAnimate(props.items.length);

    return (
        <div
            className={classNames('react-3d-menu', styles['react-3d-menu'], props.className)}
            style={props.style}
            onMouseEnter={ani.mouseEnter}
            onMouseLeave={ani.mouseLeave}
        >
            <div
                className="menu-wrap"
                style={{transform: `rotate3d(0,1,0,${ani.offsetY}deg)`}}
                onMouseMove={ani.mouseMove}
            >
                <div className="menu-title">{props.children}</div>
                {props.items?.length && <MenuItem items={props.items} index={0} posList={ani.posList} />}
            </div>
        </div>
    );
};
