const Header = (props) => {
    return (
        <header className={props.dark_schema ? "dark-schema" : "light-schema"}>
            <label class="color-schema-switch toggle">
                <span class="toggle-label">Light</span>
                <input
                    className="toggle-checkbox"
                    type="checkbox"
                    id="color_schema_switch"
                    checked={props.dark_schema}
                    onChange={props.handle_schema}
                />
                <div class="toggle-switch"></div>
                <span class="toggle-label">Dark</span>
            </label>
        </header>
    );
};
export default Header;
