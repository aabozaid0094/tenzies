const Tenzy = (props) => {
    return (
        <div
            className={`tenzy${
                props.dark_schema ? " dark-schema" : " light-schema"
            }${props.freezed ? " freezed" : ""}`}
            onClick={()=>props.toggle_tenzy_freeze(props.id)}
            id={`tenzy_${props.id}`}
        >
            {props.value}
        </div>
    );
};
export default Tenzy;
