import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import List from './components/List';

function App() {
  let players = [
    {
      name : 'ronaldo',
      post : "https://upload.wikimedia.org/wikipedia/commons/2/23/Cristiano_Ronaldo_WC2022_-_01.jpg",
      nationality : "portugal"
    },
    {
      name : 'messi',
      post : "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
      nationality : "argentina"
    },
    {
      name : 'foden',
      post : "https://cdn.vox-cdn.com/thumbor/glWbVFciZaw3FaF0GGpaNvbHH3I=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24243206/1245211378.jpg",
      nationality : "england"
    },
    {
      name : 'vini',
      post : "https://cdn.vox-cdn.com/thumbor/fKlR5SodVlU9djUwGkzkXeRnoTI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24265794/1245388013.jpg",
      nationality : "brazil"
    }
   
  ]
  
  return (
    <div className="App">
      <List players ={players}/>
  
  
    </div>
  );
}

export default App;
