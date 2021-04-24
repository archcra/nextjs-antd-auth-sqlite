export default function handler(req, res) {
  console.log('Now, we add dummy login test code, assume user tom is OK, other failed.')

  const result = {user:{username: 'tom', password: 'encrypt', token:'random-token'}};
  console.log(req)

  const username = req.body.user.username;
  const password = req.body.user.password;

  if (username == 'tom' && password == 'jerry'){
    console.log("OK")
    res.status(200).json(result)}
  else{
    console.log("NOT OK")
    res.status(200).json({usr:{}})
  }
}
