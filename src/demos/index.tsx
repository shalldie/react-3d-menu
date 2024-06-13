import {MenuDemo1, MenuDemo2, MenuDemo3} from './demos';

export function App() {
    return (
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
    );
}
