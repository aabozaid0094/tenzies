import React from "react";
import Tenzy from "./Tenzy";

const Tenzies = (props) => {
    const random_positive_number = (max_value) => {
        return Math.ceil(Math.random() * max_value);
    };
    const default_tenzies = (length = 10, max_value = 6) => {
        const default_tenzies = Array(length);
        for (let index = 0; index < length; index++) {
            default_tenzies.push({
                id: index,
                value: random_positive_number(max_value),
                freezed: false,
            });
        }
        return default_tenzies;
    };
    const [tenzies, set_tenzies] = React.useState(default_tenzies());

    const roll = () => {
        set_tenzies((old_tenzies) => {
            const new_tenzies = Array(old_tenzies.length);
            old_tenzies.forEach((tenzy) => {
                if (!tenzy.freezed) {
                    new_tenzies.push({ ...tenzy, value: random_positive_number(6) });
                } else {
                    new_tenzies.push(tenzy);
                }
            });
            return new_tenzies;
        });
    };

    const reset = () => { set_tenzies(()=>default_tenzies()) }

    const toggle_tenzy_freeze = (tenzy_id) => {
        set_tenzies((old_tenzies) => {
            const new_tenzies = Array(old_tenzies.length);
            old_tenzies.forEach((tenzy) => {
                if (tenzy.id === tenzy_id) {
                    new_tenzies.push({...tenzy, freezed:!tenzy.freezed});
                }else{
                    new_tenzies.push(tenzy);
                }
            });
            return new_tenzies;
        });
    };

    const tenzies_elements = tenzies.map((tenzy) => (
        <Tenzy
            key={tenzy.id}
            id={tenzy.id}
            value={tenzy.value}
            freezed={tenzy.freezed}
            dark_schema={props.dark_schema}
            toggle_tenzy_freeze={toggle_tenzy_freeze}
        />
    ));

    return (
        <div
            className={`tenzies${
                props.dark_schema ? " dark-schema" : " light-schema"
            }`}
        >
            <h2>Tenzies</h2>
            <p>
                Roll until all dice are the same, click each dice to freeze it
                at its current value between rolls
            </p>
            <div className="tenzies-wrapper">{tenzies_elements}</div>
            <button
                className="roll-button dark-bg"
                id="roll_button"
                onClick={roll}
            >
                Roll
            </button>
            <button
                className="reset-button dark-bg"
                id="roll_button"
                onClick={reset}
            >
                Reset
            </button>
        </div>
    );
};
export default Tenzies;
