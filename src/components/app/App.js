import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';
import { Component } from "react";
import ErrorBoundariy from "../errorBoudariy/ErrorBoundariy";

class App extends Component {
    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <main>
                    <ErrorBoundariy>
                        <RandomChar />
                    </ErrorBoundariy>
                    <div className="char__content">
                        <ErrorBoundariy>
                            <CharList onCharSelected={this.onCharSelected} />
                        </ErrorBoundariy>
                        <ErrorBoundariy>
                            <CharInfo charId={this.state.selectedChar} />
                        </ErrorBoundariy>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision" />
                </main>
            </div>
        )
    }
}

export default App;