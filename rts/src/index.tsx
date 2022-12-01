import ReactDOM from 'react-dom';
import Parent from './props/Parent';

const App = () => {
    return (<div>
        <h1><Parent /></h1>
    </div>)
}

ReactDOM.render(
    <App />
, document.querySelector('#root'));