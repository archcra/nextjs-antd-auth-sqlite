import  { useState } from 'react';

import {  Button, Alert } from 'antd';
import axios from 'axios'
var md5 = require("md5"); 


export default function TestDo({}) {
  const [showResult, setShowResult] = useState('')

    const  onCallDo = async (values) =>  {
        try {
            console.log('values: ' + values)
        const user = await axios.post(`/api/do/user`,
        {
          user: {
            username: values,
          }
        },
        {
          headers: {
            accept: '*/*',
            'Content-Type': 'application/json'
          }
        });

        console.log('Success:', values);

        if (user) {
          setShowResult(true);
            console.log(user.data);
            const passwordHash = user.data.passwordHash;

            console.log(passwordHash == md5("jerry")); //encryption of message

          } 
        } catch (e) {
          console.log('goes here ...');
          // Redirecting to the login page with error messsage in the URL
          console.log(e );
        }

    }
    
    const  onReset = async (values) =>  {
      setShowResult(false);
    }

    return (
<>
        <Button type="primary" onClick={() => onCallDo('tom')}> retrieve the user</Button>
        { showResult && 
        <Alert message="Success Tips" type="success" showIcon />
      }

      <Button type="primary" onClick={() => onReset()}> reset</Button>
</>
    )


}