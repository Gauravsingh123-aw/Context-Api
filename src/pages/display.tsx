import { Appcontext } from '../context/themeContext/Appcontext'
import { Appcontext2 } from '../context/valueContext/AppContext';
import { useContext } from 'react'

export default function Display() {
    const context = useContext(Appcontext);
    const context2=useContext(Appcontext2);

    if (!context ) {
        return <div>Error: Context is null</div>;
    }
    if( !context2){
        return <div>Error: Context is null</div>;
    }

    const { theme ,toggle} = context;
    const {value,setValue,square}=context2;
    return (
        <div>
            <p>Theme: {theme}</p>
            <button onClick={toggle}>Click</button>
            <div>value is : {value}</div>
            <input type='text' placeholder='enter your own value' onChange={(e)=>setValue(Number(e.target.value))}/>
            <div>the square of value from context is: {square()}</div>
        </div>
    );
}
