import axios from "axios";
import { UserCard } from "./components/UserCard";
import "./styles.css";

const user = {
  id: 1,
  name: "はち",
  email: "hachi@info.jp",
  address: "東京"
};

export default function App() {
  const onClickFetchUser = () => {
    axios.get("https://jsonplaceholder.typicode.com/users");
  };

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <UserCard user={user} />
    </div>
  );
}
