import axios from "axios";
import { useState } from "react";

const D = () => {
    const [message, setMessage] = useState("");
    const handleClick = async () => {
        try {
            const response = await axios.get("https://green-bush-5824.fly.dev");
            // const response = await axios.get("../data.json");
            setMessage(response.data.message);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <button
                className="flex flex-col  bg-purple-100 border-2 border-pink-100 border-solid-2 hover:bg-purple-700 text-black-300 font-bold py-4 px-4 rounded-full"
                onClick={handleClick}
            >
                요청
            </button>
            <div className="flex flex-col"> {message && <p>{message}</p>}</div>
        </div>
    );
};
export default D;
