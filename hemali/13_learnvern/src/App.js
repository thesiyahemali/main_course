import logo from './logo.svg';
import './App.css';
import Subscription from './components/01_Subscription';

function App() {
  let subscriptios = [
    {
     id:'1',
     date:new Date('2024','3','21'),
     title:'Monthly Subscription',
     amount:'125.60'
  },
  {
    id:'2',
    date:new Date('2023','3','23'),
    title:'Annual Subscription',
    amount:'1125.60'
 },
 {
  id:'3',
  date:new Date('2023','3','23'),
  title:'Quarterly Subscription',
  amount:'425.60'
}
];
  return (
    <div>
      {/* <Subscription/>daynamic data  */}
      
        <Subscription passdate={subscriptios[0].date.toLocaleString()} passtitle={subscriptios[0].title} passamount={subscriptios[0].amount}/>

        <Subscription passdate={subscriptios[1].date.toLocaleString()} passtitle={subscriptios[1].title} passamount={subscriptios[1].amount}/>

        <Subscription passdate={subscriptios[2].date.toLocaleString()} passtitle={subscriptios[2].title} passamount={subscriptios[2].amount}/>
    
    </div>
  );
}

export default App;
