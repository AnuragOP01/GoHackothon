// import logo from './logo.svg';
import './App.css';
import ReadMore from './component/ReadMore';

function App() {
  const text = "Join our project program to master the skills needed for successfull project completion "
  // const text1="project completion"
  return (
    <>
    <div className="App">
      <h1>Excel in your project</h1>
      <ReadMore text={text}  maxLength={50} />
    </div>
   
    

    </>
  );
}

export default App;
