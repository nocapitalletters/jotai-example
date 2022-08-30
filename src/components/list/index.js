import ListItem from "../list-item";
import { gamesAtomConfig } from '../../atoms/atoms';
import { useAtom } from 'jotai'

const GamesList = () => {

    const [allGamesAtom] = useAtom(gamesAtomConfig);

    return (
        <ul>
            {allGamesAtom.map((gameAtomConfig) => (
                <ListItem gameAtomConfig={gameAtomConfig} key={gameAtomConfig}/>
            ))}
        </ul>
    );
};

export default GamesList;