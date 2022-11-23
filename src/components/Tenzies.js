import React from "react";
import Tenzy from "./Tenzy";
import Confetti from "react-confetti";

const Tenzies = (props) => {
    // Pre-States
    const random_positive_number = (max_value) => {
        return Math.ceil(Math.random() * max_value);
    };
    const default_tenzies = (length = 10, max_value = 6) => {
        const default_tenzies = [];
        for (let index = 0; index < length; index++) {
            default_tenzies.push({
                id: index,
                value: random_positive_number(max_value),
                freezed: false,
            });
        }
        return default_tenzies;
    };

    //States
    const [tenzies, set_tenzies] = React.useState(default_tenzies());
    const [solved, set_solved] = React.useState(false);

    // Effects
    React.useEffect(() => {
        set_solved(() => {
            const value_check_against = tenzies[0].value;
            for (let index = 0; index < tenzies.length; index++) {
                const tenzy = tenzies[index];
                if (tenzy.value !== value_check_against) return false;
            }
            return true;
        });
    }, [tenzies]);

    // Handles
    const roll = () => {
        set_tenzies((old_tenzies) => {
            const new_tenzies = [];
            for (let index = 0; index < old_tenzies.length; index++) {
                const tenzy = old_tenzies[index];
                if (!tenzy.freezed) {
                    new_tenzies.push({
                        ...tenzy,
                        value: random_positive_number(6),
                    });
                } else {
                    new_tenzies.push(tenzy);
                }
            }
            return new_tenzies;
        });
    };

    const reset = () => {
        set_tenzies(() => default_tenzies());
        set_solved(() => false);
    };

    const toggle_tenzy_freeze = (tenzy_id) => {
        set_tenzies((old_tenzies) => {
            const new_tenzies = [];
            for (let index = 0; index < old_tenzies.length; index++) {
                const tenzy = old_tenzies[index];
                if (tenzy.id === tenzy_id) {
                    new_tenzies.push({ ...tenzy, freezed: !tenzy.freezed });
                } else {
                    new_tenzies.push(tenzy);
                }
            }
            return new_tenzies;
        });
    };

    //Repeated Elements
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
            {solved && <Confetti />}
            <h2>Tenzies</h2>
            <p>
                Roll until all dice are the same, click each dice to freeze it
                at its current value between rolls
            </p>
            {solved && (
                <span className="tenzies-solved">Congrats, Solved!!!</span>
            )}
            <div className="tenzies-wrapper">{tenzies_elements}</div>
            {!solved && (
                <button
                    className="roll-button dark-bg"
                    id="roll_button"
                    onClick={roll}
                >
                    Roll
                </button>
            )}
            {solved && (
                <button
                    className="reset-button dark-bg"
                    id="roll_button"
                    onClick={reset}
                >
                    Reset
                </button>
            )}
        </div>
    );
};
export default Tenzies;
