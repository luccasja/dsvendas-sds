import DataTable from "components/DataTable";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <div className="container">
        <DataTable />
      </div>
      <Footer />
      </>
    </div>
  );
}

export default App;