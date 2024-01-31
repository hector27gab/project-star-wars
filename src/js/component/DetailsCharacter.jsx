import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const DetailsCharacter = () => {
  const { store, actions } = useContext(Context);
  const [currentCharacter, setCurrentCharacter] = useState();
  const { useId } = useParams();

  useEffect(() => {
    const character = actions.detailsCharacter(useId);
    setCurrentCharacter(character);
  }, [store.infoCharacters, useId]);
  return (
    <>
      {currentCharacter && (
        <div className="card w-50 mx-auto bg-black rounded text-light">
          <div className="row">
            <div className="col-4">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${currentCharacter.result.uid}.jpg`}
                className="detailsC-image rounded"
              />
            </div>
            <div className="col-4">
              <div className="mt-4">
                <h3>{currentCharacter.result.properties.name}</h3>
              </div>
              <div className="d-flex mx-3 mt-5">
                <i class="fa-solid fa-cake-candles fs-4"></i>
                <p className="fw-bold mx-2">Birth Year:</p>
                <p>{currentCharacter.result.properties.birth_year}</p>
              </div>
              <div className="d-flex mx-3">
                <i className="fa-solid fa-person-half-dress fs-4"></i>
                <p className="fw-bold mx-2">Gender:</p>
                <p>{currentCharacter.result.properties.gender}</p>
              </div>
              <div className="d-flex mx-3">
                <i class="fa-solid fa-brush fs-4"></i>
                <p className="fw-bold mx-2">Skin Color:</p>
                <p>{currentCharacter.result.properties.skin_color}</p>
              </div>
            </div>
            <div className="col-4">
              <div className="mt-4 text-black">
                <h3>{currentCharacter.result.properties.name}</h3>
              </div>
              <div className="d-flex mx-3 mt-5">
                <i class="fa-solid fa-bullseye fs-4"></i>
                <p className="fw-bold mx-2">Eye Color:</p>
                <p>{currentCharacter.result.properties.eye_color}</p>
              </div>
              <div className="d-flex mx-3">
                <i class="fa-solid fa-ruler-vertical fs-4"></i>
                <p className="fw-bold mx-2">Height:</p>
                <p>{currentCharacter.result.properties.height} cm</p>
              </div>
              <div className="d-flex mx-3">
                <i class="fa-solid fa-weight-hanging fs-4"></i>
                <p className="fw-bold mx-2">Mass:</p>
                <p>{currentCharacter.result.properties.mass} Kg</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsCharacter;
