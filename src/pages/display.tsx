import { Appcontext } from '../context/Appcontext'
import { useContext } from 'react'

export default function Display() {
    const context = useContext(Appcontext);

    if (!context) {
        return <div>Error: Context is null</div>;
    }

    const { theme } = context;

    return (
        <div>
            <p>Theme: {theme}</p>
        </div>
    );
}
