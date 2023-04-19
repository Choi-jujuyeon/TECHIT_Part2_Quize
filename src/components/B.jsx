import { useState } from "react";

const B = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <button
                className="bg-blue-100 border-blue-100 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
                onClick={increment}
            >
                +
            </button>
            <h2 className="mr-5">{count}</h2>
            <button
                className="bg-blue-100 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={decrement}
            >
                -
            </button>
        </div>
    );
};
export default B;
