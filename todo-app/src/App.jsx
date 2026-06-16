import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import TodoPage from "./pages/TodoPage";
import ProtectedRoute from "./routes/ProtectedRoute";

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/todo" element={<ProtectedRoute><TodoPage /></ProtectedRoute>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;