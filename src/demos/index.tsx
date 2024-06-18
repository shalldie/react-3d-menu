import { MenuDemo1, MenuDemo2, MenuDemo3 } from './demos';

export function App() {
    return (
        <>
            <h4 style={{ paddingLeft: 20 }}>
                <a target="_blank" href="https://github.com/shalldie/react-3d-menu">
                    Github - React's 3D menu component. React 3D 菜单组件。
                </a>
            </h4>
            <div className="app">
                <div className="col1">
                    <MenuDemo1 />
                </div>
                <div className="col2">
                    <MenuDemo2 />
                </div>
                <div className="col3">
                    <MenuDemo3 />
                </div>
            </div>
        </>
    );
}
