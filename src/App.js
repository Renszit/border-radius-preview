import './App.css';
import { useEffect,useState } from 'react';

function App() {

  const [tl, setTl] = useState(0)
  const [Bl, setBl] = useState(0)
  const [Br, setBr] = useState(0)
  const [Tr, setTr] = useState(0)

  const updateBorderValues = (topleft, bottomleft, topright, bottomright) => {
    setTl(topleft)
    setBl(bottomleft)
    setTr(topright)
    setBr(bottomright)
  }

  useEffect(()=> {
    let AdjustableDiv = document.getElementsByClassName('AdjustableDiv')
    AdjustableDiv[0].style.borderRadius = `${tl}% ${Tr}% ${Br}% ${Bl}%`
  },[tl,Bl,Br,Tr])

  useEffect(() => {
    updateBorderValues(10, 20, 30, 40);
    return () => { 
      updateBorderValues(0, 0, 0, 0);
    }
  }, [])
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'topLeft':
        setTl(value)
        break;
      case 'bottomLeft':
        setBl(value)
        break;
      case 'topRight':
        setTr(value)
        break;
      case 'bottomRight':
        setBr(value)
        break;  
      default:
        break;
    }
  }

  const CopyCss = () => {
    let css = document.getElementsByClassName('AdjustableDiv')
    let border = css[0].style.borderRadius
    navigator.clipboard.writeText(`border-radius: ${border};`)
    alert('Copied to clipboard')
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className={"AdjustableDiv"}>
      </div>
      <div>
        <div>
          <p>top-left</p>
          <input type={'number'} value={tl} id={'topLeft'} onChange={handleChange}></input>
        </div>
        <div>
          <p>bottom-left</p>
          <input type={'number'} value={Bl} id={"bottomLeft"} onChange={handleChange}></input>
        </div>
        <div>
          <p>top-right</p>
          <input type={'number'} value={Tr} id={'topRight'} onChange={handleChange}></input>
        </div>
        <div>
          <p>bottom-right</p>
          <input type={'number'} value={Br} id={"bottomRight"} onChange={handleChange}></input>
        </div>
      </div>
      <button onClick={CopyCss}>copy css</button>
      </header>
    </div>
  );
}

export default App;
