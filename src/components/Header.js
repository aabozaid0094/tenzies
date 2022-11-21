const Header = (props) => {
    return (
        <header className={props.dark_schema ? "darker-schema" : "lighter-schema"}>
            <label className="color-schema-switch toggle">
                <span className="toggle-label">Light</span>
                <input
                    className="toggle-checkbox"
                    type="checkbox"
                    id="color_schema_switch"
                    checked={props.dark_schema}
                    onChange={props.handle_schema}
                />
                <div className="toggle-switch"></div>
                <span className="toggle-label">Dark</span>
            </label>
        </header>
    );
};
export default Header;
