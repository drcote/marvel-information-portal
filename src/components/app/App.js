import AppHeader from "../appHeader/AppHeader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage, ComicsPage } from "../pages";

const App = () => {

    return (
        <BrowserRouter>
            <div className="app">
                <AppHeader />
                <main>
                    <Switch>
                        <Route exact path="/comics">
                            <ComicsPage />
                        </Route>
                        <Route exact path="/">
                            <MainPage />
                        </Route>
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    )

}

export default App;