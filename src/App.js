import './App.css';
import Child from './components/Child';
import ClassComponent from './components/ClassComponent';
import Context from './components/Context';
import FunctionComponent from './components/FunctionComponent';
import HookExample from './components/HookExample';
import Part1 from './components/Part1';
import Scroll from './components/Scroll';
import Socket from './components/Socket';
import UseHookstoUpdate from './components/UseHookstoUpdate';

function App() {
  return (
    <div className='App'>
      <Part1 />
      <hr />
      <ClassComponent />
      <hr />
      <FunctionComponent />
      <hr />
      <UseHookstoUpdate />
      <hr />
      <HookExample />
      <Context />
      <hr />
      <Socket />
      <hr />
      <Scroll />
      <hr />
      <Child data={"Data sent from parent"} />
    </div>
  );
}

export default App;
