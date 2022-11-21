const Tenzy = (props)=>{
    return(
        <div className={`tenzy${props.dark_schema?" dark-schema":" light-schema"}${props.freezed?" freezed":""}`}>
            {props.value}
        </div>
    );
};
export default Tenzy;