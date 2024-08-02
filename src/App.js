import Header from './Component/Header';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header name="Spriha" age="22" address="Patna" course="Btech" />
      <Header name="Kajal" age="22" address="Mumbai" course="Btech" />
      <Header name="Palak" age="21" address="Delhi" course="Btech" />
      <Header name="Ashish" age="22" address="Kanpur" course="Btech" />
      <Header name="Aaryan" age="21" address="Lucknow" course="Btech" />
    </div>

  );
}

export default App;
