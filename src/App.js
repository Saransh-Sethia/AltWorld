
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route, UNSAFE_ErrorResponseImpl } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Dashboard />}></Route>
  <Route path="/:id/details" element={<UserDetails />}/>
</Routes>
    </div>
  );
}

export default App;
