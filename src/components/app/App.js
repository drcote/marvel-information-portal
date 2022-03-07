import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ComicsList from '../comicsList/ComicsList';
import decoration from '../../resources/img/vision.png';
import { useState } from "react";
import ErrorBoundariy from "../errorBoudariy/ErrorBoundariy";

const App = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <div className="app">
            <AppHeader />
            <main>
{/*                 <ErrorBoundariy>
                    <RandomChar />
                </ErrorBoundariy>
                {<div className="char__content">
                    <ErrorBoundariy>
                        <CharList onCharSelected={onCharSelected} />
                    </ErrorBoundariy>
                    <ErrorBoundariy>
                        <CharInfo charId={selectedChar} />
                    </ErrorBoundariy>
                </div>}
                <img className="bg-decoration" src={decoration} alt="vision" /> */}
                <ComicsList /> 
            </main>
        </div>
    )

}

export default App;