import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return <div onClick={() => navigate("/")}>Home</div>;
}
export default Home;
