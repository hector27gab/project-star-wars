import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const DetailsShip = () => {
  const { store, actions } = useContext(Context);
  const [currentShip, setCurrentShip] = useState();
  const { useId } = useParams();

  useEffect(() => {
    const ship = actions.detailsShip(useId);
    setCurrentShip(ship);
  }, [store.infoShips, useId]);
  return (
    <>
      {currentShip && (
        <div className="card w-50 mx-auto bg-black rounded text-light">
          <div>
            <div className="d-flex justify-content-center">
              <h3 className="my-4">{currentShip.result.properties.name}</h3>
            </div>
            <div className="d-flex justify-content-center">
              <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${currentShip.result.uid}.jpg`}
                className="detailsS-image rounded my-5 mx-2"
              />
            </div>
            <div className="d-flex justify-content-center mt-4">
              <div className="d-flex mx-3">
                <i class="fa-solid fa-truck"></i>
                <p className="fw-bold mx-2">Cargo Capacity:</p>
                <p>{currentShip.result.properties.cargo_capacity} Kg</p>
              </div>
              <div className="d-flex mx-3">
                <i class="fa-solid fa-car"></i>
                <p className="fw-bold mx-2">Vehicle Class:</p>
                <p>{currentShip.result.properties.vehicle_class}</p>
              </div>
              <div className="d-flex mx-3">
                <i class="fa-solid fa-utensils"></i>
                <p className="fw-bold mx-2">Consumables:</p>
                <p>{currentShip.result.properties.consumables}</p>
              </div>
            </div>
            <div className="d-flex justify-content-center my-4">
              <div className="d-flex mx-3">
                <i class="fa-solid fa-person"></i>
                <p className="fw-bold mx-2">Crew:</p>
                <p>{currentShip.result.properties.crew}</p>
              </div>
              <div className="d-flex mx-3">
                <i class="fa-solid fa-people-group"></i>
                <p className="fw-bold mx-2">Passengers:</p>
                <p>{currentShip.result.properties.passengers}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsShip;
