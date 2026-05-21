import { useState } from "react";
import LoginFreelancer from "./LoginFreelancer";
import LoginJobProvider from "./LoginJobProvider";

const ToggleLogin = () => {

    const [LoginActiveTab, setLogActive] = useState("Freelancer")

    return (
        <>
     
                


                {LoginActiveTab === "Freelancer"
                    ? <LoginFreelancer setLoginActiveTab={setLogActive} /> 
                    : <LoginJobProvider setLoginActiveTab={setLogActive} />
                }

                
          
        </>
    );
};

export default ToggleLogin;