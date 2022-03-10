import { useState } from "react";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundariy from "../errorBoudariy/ErrorBoundariy";
import decoration from '../../resources/img/vision.png';


const MainPage = () => {

  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  }

  return (
    <>
      <ErrorBoundariy>
        <RandomChar />
      </ErrorBoundariy>
      <div className="char__content">
        <ErrorBoundariy>
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundariy>
        <ErrorBoundariy>
          <CharInfo charId={selectedChar} />
        </ErrorBoundariy>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  )
}

export default MainPage;