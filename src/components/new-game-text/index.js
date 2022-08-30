import { newGameNameAtomConfig } from "../../atoms/atoms";
import { useAtom } from "jotai";

const NewGameText = () => {
    const [textAtom] = useAtom(newGameNameAtomConfig);
    return (
      <p onClick={() => alert(textAtom)}>{textAtom}</p>
    );
}

export default NewGameText;