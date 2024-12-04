import { useEffect, useState } from "react";
import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";
import { connect } from "socket.io-client";

const connectionServer = () => connect("http://localhost:8080");

function App() {
  const [onLine, setOnLine] = useState(false);
  const [socket] = useState(connectionServer());
  const [bands, setBands] = useState([]);

  const voteBand = (id: string) => {
    console.log("nemesis");
    socket.emit("vote-band", id);
  };

  const deleteBand = (id: string) => {
    socket.emit("delete-band", id);
  };

  const changeName = (id: string, newName: string) => {
    if (newName.trim() === "") return;
    socket.emit("change-name", { id, newName: newName.trim() });
  };

  const addBand = (name: string) => {
    socket.emit("add-band", { name });
  };

  useEffect(() => {
    setOnLine(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => {
      setOnLine(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnLine(false);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("current-bands", (bands) => {
      setBands(bands);
    });
  }, [socket]);

  return (
    <div className="container ">
      <div className="alert">
        <p>
          Service status:
          {onLine ? (
            <strong className="text-success">online</strong>
          ) : (
            <strong className="text-danger">off-line</strong>
          )}
        </p>
      </div>

      <h1>BandNames</h1>
      <hr />

      <div className="row">
        <div className="col-8">
          <BandList
            data={bands}
            voteBand={voteBand}
            deleteBand={deleteBand}
            changeName={changeName}
          />
        </div>
        <div className="col-4">
          <BandAdd addBand={addBand} />
        </div>
      </div>
    </div>
  );
}

export default App;
