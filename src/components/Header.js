const Header = (props) => {
    return (
        <header className={props.dark_schema ? "dark-schema" : "light-schema"}>
            <div className="p-2 color-schema-switch">
                <label htmlFor="color_schema_switch">Light</label>
                <input
                    type="checkbox"
                    id="color_schema_switch"
                    checked={props.dark_schema}
                    onChange={props.handle_schema}
                />
                <label htmlFor="color_schema_switch">Dark</label>
            </div>
        </header>
    );
};
export default Header;
