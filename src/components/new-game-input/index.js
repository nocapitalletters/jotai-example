import { useAtom } from "jotai"
import { newGameNameAtomConfig } from "../../atoms/atoms"

const NewGameInput = () => {
    const [text, setText] = useAtom(newGameNameAtomConfig);
    return <input value={text} onChange={(e) => setText(e.target.value)} />
}

export default NewGameInput;