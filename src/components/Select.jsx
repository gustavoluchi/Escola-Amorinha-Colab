export default function Select(props) {
const { forName, label, options } = props;
// const options = [
//     {value:"volvo", label:"Volvo"},
//     {value:"saab", label:"Saab"},
//     {value:"mercedes", label:"Mercedes"},
//     {value:"audi", label:"Audi"}
// ]
    return (
        <div>
            <label for={forName}>{label}:</label>

        <select name={forName} id={forName}>
            {options.map((option, index) =>(
              <option key={index} value={option.value}>{option.label}</option>  
            ))}
           
        </select>
        </div>
    )
}