import { Routes as Switch, Route } from 'react-router-dom';

import Game from "./components/game/Game";
import Phrase from "./components/game/Phrase";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" element={<Game />} />
            <Route path="/phrase" element={<Phrase />} />
        </Switch>
    );
};

export default Routes;
