import UseFetchApi from "./components/useFetchApi";
import { ChangeText } from "./components/simpleState";
import UseStateCounter from "./components/useStateCounter";
import UseEffectSimple from "./components/useEffectSimple";
import TextBlinker from "./components/textBlinker";
import FromControlledSubmission from "./components/formControlledSubmission/formControlledSubmission";
import FormNormalSubmission from "./components/formNormalSubmission/formNormalSubmission";
import { UseRefSimple } from "./components/useRefSimple";
function App() {
    return (
        <div className="App">
            <UseFetchApi />
            <ChangeText />
            <UseStateCounter />
            <UseEffectSimple />
            <TextBlinker />
            <FromControlledSubmission />
            <FormNormalSubmission />
            <UseRefSimple />
        </div>
    );
}
export default App;
