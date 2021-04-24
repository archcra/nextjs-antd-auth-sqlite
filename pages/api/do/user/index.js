import prisma from '../../../../lib/prisma'

export default async function handle(req, res) {

  if (req.method === 'POST') {
    const username = req.body.user.username;
    handleReq(username, res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

async function handleReq(username, res) {
  const user = await prisma.user.findUnique({
    where: { username: username },
  })
  console.log(user)
  res.json(user)
}
