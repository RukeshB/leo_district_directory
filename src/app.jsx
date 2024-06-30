import FetchData from "./components/FetchData";
import logo from './assets/logos/internaltional_leo_logo.png'

export function App() {
  return (
    <div className="text-white overflow-hidden">
      <div className="absolute w-screen h-screen opacity-40 flex justify-center items-center">
        <img src={logo} className="w-2/4 h-auto"/>
      </div>
      <FetchData/>
    </div>
  );
}
