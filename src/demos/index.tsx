import { MenuDemo1, MenuDemo2, MenuDemo3 } from './demos';

export function App() {
    return (
        <>
            <h4>
                <a target="_blank" href="https://github.com/shalldie/react-3d-menu" style={{ paddingLeft: 20 }}>
                    Github - 3D menu component for React.
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
