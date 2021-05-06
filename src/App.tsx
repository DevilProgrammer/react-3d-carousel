import React from 'react';
import Carousel from './components/react-3d-carousel'
import logo from './logo.svg';
import './App.css';

const images = [
  'https://du.hupucdn.com/Fh4djhxaxftEbiUL0xX-IywUNeVu?imageView2/0/format/webp',
  'https://du.hupucdn.com/FqRY2_6ScfAKs0AXqri7kNeWms5H?imageView2/0/format/webp',
  'https://du.hupucdn.com/FklgWycX9MS8RhxE2ph3SnhcR_iw?imageView2/0/format/webp',
  'https://du.hupucdn.com/FkxJuhPYYgKpD47ezne9Bu5I2chU?imageView2/0/format/webp',
  'https://du.hupucdn.com/FnsS_ISXyRv0VX0xnWZXneEDwKKr?imageView2/0/format/webp'
]

const list = [{
  url: 'https://du.hupucdn.com/Fh4djhxaxftEbiUL0xX-IywUNeVu?imageView2/0/format/webp',
  onClick: ()=>{ console.log('hello world')}
},
{
  url: 'https://du.hupucdn.com/Fh4djhxaxftEbiUL0xX-IywUNeVu?imageView2/0/format/webp',
  onClick: ()=>{ console.log('hello world')}
},
{
  url: 'https://du.hupucdn.com/Fh4djhxaxftEbiUL0xX-IywUNeVu?imageView2/0/format/webp',
  onClick: ()=>{ console.log('hello world')}
},
{
  url: 'https://du.hupucdn.com/Fh4djhxaxftEbiUL0xX-IywUNeVu?imageView2/0/format/webp',
  onClick: ()=>{ console.log('hello world')}
},
{
  url: 'https://du.hupucdn.com/Fh4djhxaxftEbiUL0xX-IywUNeVu?imageView2/0/format/webp',
  onClick: ()=>{ console.log('hello world')}
},
{
  url: 'https://du.hupucdn.com/Fh4djhxaxftEbiUL0xX-IywUNeVu?imageView2/0/format/webp',
  onClick: ()=>{ console.log('hello world')}
},
{
  url: 'https://du.hupucdn.com/Fh4djhxaxftEbiUL0xX-IywUNeVu?imageView2/0/format/webp',
  onClick: ()=>{}
}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <h3>React 3d Carousel</h3>
      </header>
      <div className='body'>
        <Carousel list={list} />
      </div>
    </div>
  );
}

export default App;
