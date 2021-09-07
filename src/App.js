import './App.css';
import { Parallax } from 'react-parallax';



const imageParallax = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";


function App() {



  return ( 

      <div className="app">
   
          <Parallax bgImage={ imageParallax} strength={500}>
             <div className="maintop__middle">
               
              </div>
          </Parallax>
          <Parallax  strength={500}>
        <div style={{ height: 1500 }}>
        </div>
      </Parallax>
      
      </div>
    
  );
}

export default App;
