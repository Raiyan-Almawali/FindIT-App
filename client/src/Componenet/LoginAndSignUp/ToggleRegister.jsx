import { useState } from "react";
import SignUpPerson from "./SignUpPerson";
import SignUpCompany from "./SignUpCompany";


const ToggleRegister = () => {
    const [activeTab, setActiveTab] = useState("individual");
 

    return (
        <>
     
                

                {activeTab === "individual" 
                    ? <SignUpPerson setActiveTab={setActiveTab} /> 
                    : <SignUpCompany setActiveTab={setActiveTab} />}


                
          
        </>
    );
};

export default ToggleRegister;