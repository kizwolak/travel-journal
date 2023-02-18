import './App.css';
import Navbar from './components/Navbar';
import Place from './components/Place';
import data from './data';

export default function App() {
  const places = data.map(place => {
    return <Place place = {place} />
  })
  return (
    <div>
      <Navbar />
      <div className='places'>
        {places}
      </div>
    </div>
  )
}

