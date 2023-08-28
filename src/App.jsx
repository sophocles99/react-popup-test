import "./App.css";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Modal isOpen={true} hasCloseBtn={true}>
        <h1>Hello Modal</h1>
      </Modal>
    </>
  );
}

export default App;
