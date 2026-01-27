
import './App.css'
import { SignedIn, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'

function App() {


  return (
    <>
      <h1>Welcome to the App</h1>
      <SignOut>
        <SignInButton mode='modal'>
        </SignInButton>
      </SignOut>
      
      <SignedIn>
        <SignOutButton/>
      </SignedIn>

      <UserButton/>

    </>
  )
}

export default App
