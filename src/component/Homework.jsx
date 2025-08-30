import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Bu() {
    let navigate = useNavigate();
    let [home1, sethome1] = useState(true);
    let [home2, sethome2] = useState(true);

    const goToPage1 = () => {
        navigate("/one");
        sethome1(false);  
        sethome2(true);   
    };

    const goToPage2 = () => {
        navigate("/two");
        sethome1(true);   
        sethome2(false);
    };

    return (
        <div className="delete">
            {home1 ? <button onClick={goToPage1}>숙제1</button> : ""}
            {home2 ? <button onClick={goToPage2}>숙제2</button> : ""}
        </div>
    );
}

export default Bu;