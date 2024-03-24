import MobileNav from './MobileNav'
import { signOut } from '@/auth'

const NavBar = ({}) => {
  return (
    <main>
      <MobileNav
        signOut={
          <form
            action={async () => {
              'use server'
              await signOut()
            }}
          >
            <button>
              <div>Sign Out</div>
            </button>
          </form>
        }
      />
    </main>
  )
}

export default NavBar
