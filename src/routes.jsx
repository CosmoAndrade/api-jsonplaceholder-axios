import { BrowserRouter , Routes , Route} from "react-router-dom";
import Header from "./components/Header";
import Posts from "./pages/Posts";
import Comments from './pages/Comments'
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";
import Todos from "./pages/Todos";
import Users from "./pages/Users";

const Rotas = () => {
    

    return (

        <BrowserRouter>

            <Header/>

            <Routes>


            <Route path="/" element={<Posts/>} />
            <Route path="/comments"  element={<Comments/>}/>
            <Route path="/albums"  element={<Albums/>} />
            <Route path="/photos" element={<Photos/>} />
            <Route path="/todos" element={<Todos/>} />
            <Route path="/users"  element={<Users/>} />
                


            </Routes>
        
        
        </BrowserRouter>
      );
}
 
export default Rotas;