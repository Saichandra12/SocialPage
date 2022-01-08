import Name from "./name";
import About from "./about";
import Research from "./research";
import Description from "./description";
import Count from "./count";
import Avatar from "./Avatar"


function App() {
    return (
    <div className="container" id="body">
        <Avatar />
        <div className="name-about">
            <Name />
            <About />
        </div>
        <Research />
        <Description />
        <Count />
    </div>);
  }
  
  export default App;
  