import React from "react";
import "./App.css";
import Header from "./components/Header";
import Tenzies from "./components/Tenzies";

function App() {
    const [dark_schema, set_dark_schema] = React.useState(true);

    const handle_schema = (event) => {
        const dark_schema_checked = event.target.checked;
        set_dark_schema(() => {
            return dark_schema_checked ? true : false;
        });
    };
    return (
        <div className="App">
            <Header dark_schema={dark_schema} handle_schema={handle_schema} />
            <Tenzies dark_schema={dark_schema} />
        </div>
    );
}

export default App;
