import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import axios from 'axios'

const providers = [
  Providers.Credentials({
    name: 'Credentials',
    authorize: async (credentials) => {
      try {
        // use ENV VARIABLE to replace http://localhost:3000
        const user = await axios.post(`http://localhost:3000/api/services/security/auth`,
        {
          user: {
            password: credentials.password,
            username: credentials.email
          }
        },
        {
          headers: {
            accept: '*/*',
            'Content-Type': 'application/json'
          }
        })

        if (user) {
          return {status: 'success', data: user.data.user}
        } 
      } catch (e) {
        console.log(e)
        const errorMessage = e
        // Redirecting to the login page with error messsage in the URL
        throw new Error(errorMessage + '&email=' + credentials.email)
      }

    },
  })
]

const callbacks = {
  async jwt(token, user) {
    if (user) {
      token.accessToken = user.data.token
    }

    return token
  },

  async session(session, token) {
    session.accessToken = token.accessToken
    return session
  }
}

const options = {
  providers,
  callbacks,
  pages: {
    error: '/auth/login' // Changing the error redirect page to our custom login page
  }
}

export default (req, res) => NextAuth(req, res, options)