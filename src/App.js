import "./App.css";
import Contacts from "./Contacts";
import useFetchContacts from "./useFetchContacts";

function App() {
  const { data, isLoading } = useFetchContacts();

  console.log(data);
  return (
    <div className="App">
      {isLoading ? <p>Loading...</p> : <Contacts contactList={data} />}
    </div>
  );
}

export default App;
