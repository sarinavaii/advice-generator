import { GlobalStyle } from "./style/GlobalStyle";
import { Button, Advice } from "./components";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [advice, setAdvice] = useState({
        id: 0,
        text: "",
    });

    const [fetched, setfetched] = useState(false);

    const fetchData = () => {
        axios.get("https://api.adviceslip.com/advice").then((res) => {
            setfetched(true);
            setAdvice({
                id: res.data.slip.id,
                text: res.data.slip.advice,
            });
        });
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="wrapper">
            <GlobalStyle />
            {fetched && (
                <>
                    <Advice advice={advice.text} id={advice.id} />
                    <Button onclick={fetchData} />
                </>
            )}
        </div>
    );
}

export default App;
