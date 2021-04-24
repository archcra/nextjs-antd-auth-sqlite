
import {  Button } from 'antd';
import axios from 'axios'


export default function TestApi({}) {
    const  onCallApi = async (values) =>  {
        try {
        const user = await axios.post(`/api/services/security/auth`,
        {
          user: {
            password: 0,
            email: 0
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
            console.log(user.data);
            console.log(user.data.user);
            console.log('user.data.user');

            return {status: 'success', data: user.data.user};
          } 
        } catch (e) {
          console.log('goes here ...');
          const errorMessage = e.response.data.message;
          // Redirecting to the login page with error messsage in the URL
          console.log(errorMessage );
        }

    }
    

    return (

        <Button type="primary" onClick={() => onCallApi(0)}>Primary Button</Button>

    )


}