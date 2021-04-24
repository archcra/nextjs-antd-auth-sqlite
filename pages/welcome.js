import { useSession, signOut, getSession } from 'next-auth/client'

import { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function WelcomeFromServer () {
	const [session, loading] = useSession()
	const router = useRouter()

	useEffect(() => {
		if(!loading && !session?.accessToken) {
			router.push('/auth/login')
		}
	}, [loading, session])

	return (
		<div >
			<h1>Welcome Page</h1>
			<button onClick={() => signOut()}>Log Out</button>
		</div>
	)
}
  

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
    return {
      props: {
        session: await getSession(context)
      }
    }
  }
  