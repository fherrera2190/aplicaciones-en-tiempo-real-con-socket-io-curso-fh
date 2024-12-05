import { useContext } from "react";
import { BandAdd, BandList } from "../components";
import SocketContext from "../context/SocketContex";
import { BandChart } from "../components/BandChart";

export const HomePage = () => {
  const { onLine } = useContext(SocketContext);

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
      <div className="row" >
        <div className="col" >
          <BandChart />
        </div>
      </div>

      <div className="row">
        <div className="col-8">
          <BandList />
        </div>
        <div className="col-4">
          <BandAdd />
        </div>
      </div>
    </div>
  );
};
