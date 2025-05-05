import "./App.css";
import HeaderNav from "./components/HeaderNav";
import Title from "./components/Title";
import Buttons from "./pages/Buttons";
import InputBox from "./pages/InputBox";

function App() {
  return (
    <>
      <div className="min-h-screen backdrop-blur-md bg-black/30 text-white flex flex-col">
        <HeaderNav />
        <div className="mt-20">
          <Title>
            Welcome to my very own React Themes <br />
            created with <span className="text-blue-300">Tailwind</span> CSS
          </Title>
        </div>
        <div className="flex justify-center mt-10">
          <Buttons />
        </div>
        <InputBox />
      </div>
    </>
  );
}

export default App;
