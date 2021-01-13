
export default function InputELabel(props) {
    const { forName, type = "text", label } = props;

    return (
        <>
            <label for={forName}>{label}:</label>
            <input type={type} name={forName}></input>
        </>
    )
}
