import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const DetailsPlanet = () => {
  const { store, actions } = useContext(Context);
  const [currentPlanet, setCurrentPlanet] = useState();
  const { useId } = useParams();

  useEffect(() => {
    const planet = actions.detailsPlanet(useId);
    setCurrentPlanet(planet);
  }, [store.infoPlanets, useId]);
  return (
    <>
      {currentPlanet && (
        <div className="card w-50 mx-auto bg-black rounded text-light">
          <div>
            <div className="d-flex justify-content-center">
              <h3 className="my-4">{currentPlanet.result.properties.name}</h3>
            </div>
            <div className="d-flex justify-content-center">
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${currentPlanet.result.uid}.jpg`}
                className="detailsP-image rounded mt-4 mx-3"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <div className="d-flex mx-3">
              <i class="fa-solid fa-ruler-vertical fs-4"></i>
              <p className="fw-bold mx-2">Diameter:</p>
              <p>{currentPlanet.result.properties.diameter}</p>
            </div>
            <div className="d-flex mx-3">
              <i class="fa-solid fa-temperature-half fs-4"></i>
              <p className="fw-bold mx-2">Climate:</p>
              <p>{currentPlanet.result.properties.climate}</p>
            </div>
            <div className="d-flex mx-3">
              <i class="fa-solid fa-arrow-up-from-ground-water"></i>
              <p className="fw-bold mx-2">Surface Water:</p>
              <p>{currentPlanet.result.properties.surface_water}</p>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <div className="d-flex mx-3">
              <i class="fa-solid fa-plus fs-4"></i>
              <p className="fw-bold mx-2">Created:</p>
              <p>{currentPlanet.result.properties.created}</p>
            </div>
            <div className="d-flex mx-3">
              <i class="fa-solid fa-seedling"></i>
              <p className="fw-bold mx-2">Terrain:</p>
              <p>{currentPlanet.result.properties.terrain}</p>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <div className="d-flex mx-3">
              <i class="fa-brands fa-grav fs-4"></i>
              <p className="fw-bold mx-2">Gravity:</p>
              <p>{currentPlanet.result.properties.gravity}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsPlanet;
