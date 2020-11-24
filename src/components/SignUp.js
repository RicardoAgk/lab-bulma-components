import React from "react";
import "bulma/css/bulma.css";
import FormField from './FormField';
import Coolbutton from './Coolbutton'

function SignUp() {
  return (
    <div class="container">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
        <FormField label="Password" type="password" placeholder="password" /> 
        <Coolbutton />
    </div>
  )
}

export default SignUp;
