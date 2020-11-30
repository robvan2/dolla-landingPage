import React from 'react'
import { Button } from '../Button.element'
import {
    SignInContainer,
    SignInFormWrap,
    SignInHeader,
    SignInForm,
    SignInFormControl,
    SignInFormGroup,
    SignInBtnWrap,
    SignInFormLabel
} from './SignIn.Elements'

function index() {
    return (
        <>
            <SignInContainer>
                <SignInFormWrap>
                    <SignInHeader>
                        Sign in
                    </SignInHeader>
                    <SignInForm>
                        <SignInFormGroup>
                            <SignInFormLabel for='username'>
                                Username
                            </SignInFormLabel>
                            <SignInFormControl type='text' id='username' name="username" aria-autocomplete='none' />
                        </SignInFormGroup>
                        <SignInFormGroup>
                            <SignInFormLabel for="password">
                                Password
                            </SignInFormLabel>
                            <SignInFormControl id="password" name="password" type='password' />
                        </SignInFormGroup>
                    </SignInForm>
                    <SignInBtnWrap>
                        <Button fontBig={'true'} primary={'true'} dark={'true'}>Submit</Button>
                    </SignInBtnWrap>
                </SignInFormWrap>
            </SignInContainer>
        </>
    )
}

export default index
