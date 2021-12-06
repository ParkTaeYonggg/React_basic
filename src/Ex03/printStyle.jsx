import React, {useState} from "react";
import Style, {Container} from "./styledComponent";
import CustomInput from "./styledInput";
import Theme, {Input_container_grid, FlexTheme} from "./theme";

function TestStyledComponent () {
    const [value, setValue] = useState("");
    
    const [inputRefName, setInputRefName] = useState("");
    const [inputRefPw, setInputRefPw] = useState("");

    const handlerRef = e => {setInputRefName(e);}
    const handlerRefPw = e => {setInputRefPw(e);}

    const [pw, setPw] = useState("");
    const handlerValue = e => {setValue(e.target.value);}
    const handlerValuePw = e => {setPw(e.target.value);}

    return (
        <>  
            <Input_container_grid>
                    <CustomInput type="text"
                                name="name"
                                id="csName"
                                onChange={handlerValue}
                                value={value}
                                Ref={handlerRef}/>
                <CustomInput type="password"
                            name="pw"
                            id="csPw"
                            onChange={handlerValuePw}
                            value={pw}
                            Ref={handlerRefPw}/>
                <CustomInput type="text"
                            name="id"
                            id="csId"
                            onChange={handlerValue}
                            value={value}
                            Ref={handlerRef}/>
            </Input_container_grid>
            <FlexTheme>
                <Container color="skyblue" />
                <Container color="blue" />
                <Container color="#787878" />
                <Container color="green" />
                <Container color="red" />
            </FlexTheme>
        </>

    );
}

export default TestStyledComponent;