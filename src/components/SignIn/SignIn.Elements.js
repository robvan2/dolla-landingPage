import styled from "styled-components";

export const SignInContainer = styled.div`
    height : 100vh;
    width : 100vw;
    display:flex;
    justify-content: center;
    align-items:center;
    background : linear-gradient( rgba(1,147,86,1) 0% , rgba(10,201,122,1) 100%);
`
export const SignInFormWrap = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    padding: 32px 8px;
    background-color:black;
    width: 360px;
    height:420px;
    border-radius:4px;
    box-shadow : 0 8px 15px rgba(0,0,0,0.2);
`
export const SignInHeader = styled.h1`
    text-align:center;
    color:white;
    font-size:48px;
    font-weight:700;
    margin-bottom: 10px;
`
export const SignInForm = styled.form`
    display:flex;
    flex-direction: column;
    justify-content:space-around;
    align-items:center;
    width:100%;
    height:100%;
`
export const SignInFormGroup = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin-bottom : 16px;
    width:90%;
`
export const SignInFormLabel = styled.label`
    color:white;
    font-size : 1.2rem;
    font-weight:400;
    margin-bottom : 10px;
    transform : translate(16px,0);
`
export const SignInFormControl = styled.input`
    height : 3rem;
    font-size: 1.3rem;
    display : flex;
    width : 100%;
    border-radius : 5px;
    transition : all 0.1s;
    outline : none;
    
    &:focus{
        border : 4px solid rgba(1, 191, 113,0.6);
    }
`
export const SignInBtnWrap = styled.div`
    display:flex;
    justify-content : flex-end;
    align-items:center;
`