import { gamesAtomConfig } from "../../atoms/atoms";
import { deleteAtomFromArrayAtom } from "../../atoms/helper-functions";

const ListItem = ({ gameAtomConfig }) => {

    const {gameAtom, gamesAtom} = importAtoms([gameAtomConfig,'gameAtom'], [gamesAtomConfig,'gamesAtom']);

    const deleteGame = () => {
        deleteAtomFromArrayAtom(gameAtomConfig, gamesAtom, setGamesAtom);
    };

    const selectGame = () => {
        setGameAtom({
            name: gameAtom.name, 
            selected: !gameAtom.selected
        });
    };

    return (
        <li>
            <span onClick={() => selectGame()}>
                { gameAtom.name }
                { gameAtom.selected && <strong> selected</strong> }
            </span>
            <button onClick={() => deleteGame()}>Delete game</button>
        </li>
    );
};

export default ListItem;