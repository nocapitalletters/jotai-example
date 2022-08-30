import { atom, useAtom } from 'jotai'
import { gamesAtomConfig, newGameNameAtomConfig } from '../../atoms/atoms';

const AddGameButton = () => {

    const [text] = useAtom(newGameNameAtomConfig);
    const [, setGamesAtom] = useAtom(gamesAtomConfig);
  
    const handleClick = () => {
      const newAtom = atom({ name: text, selected: false });
      setGamesAtom((prev) => [...prev, newAtom]);
    };
  
    return (
      <button onClick={() => handleClick()}>Add "{text}"</button>
    );
  }

  export default AddGameButton;