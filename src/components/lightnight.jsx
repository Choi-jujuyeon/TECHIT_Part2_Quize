import { useState } from "react";

//react-icons 설치하기
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";

const LightDark = () => {
    //밤모드로 바꾸는 상태변화 설정
    const [night, setNight] = useState(false);

    //밤모드로 바꾸는 토글 설정하기
    const toggleDark = () => {
        if (!night)
            return <MdLightMode style={{ color: "red", fontSize: "2em" }} />;
        setNight(!night);
    };

    const nightmode = () => {
        <MdLightMode style={{ color: "red", fontSize: "2em" }} />;
    };
    const lightmode = () => {
        <MdNightlight style={{ color: "yellow", fontSize: "2em" }} />;
    };

    const styleClass = night ? nightmode : lightmode;

    return (
        <div>
            <button onClick={toggleDark}>
                <MdLightMode />
            </button>
        </div>
    );
};
export default LightDark;
