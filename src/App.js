import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {useState} from "react";


const App = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div className="container">
                <h1>Speech to Text Converter</h1>
                <br/>
                <p>A React hook that converts speech from the microphone to text and makes it available to your React
                    components.</p>

                <div className="mainContent" onClick={() =>  setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className="btn">

                    <button onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy'}
                    </button>
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>

                </div>

            </div>

        </>
    );
};

export default App;
