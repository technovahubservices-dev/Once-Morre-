import { Outlet } from 'react-router-dom'
import AccountSidebar from '../components/account/AccountSidebar.jsx'

export default function AccountLayout() {
  return (
    <div className="flex-grow flex w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 gap-gutter">
      {/* // AccountLayout wraps all account sub-pages with the persistent sidebar.
          // Using Outlet renders the matched child route (Orders, Addresses, Settings, or Dashboard). */}
      <AccountSidebar />
      <main className="flex-1 flex flex-col gap-12">
        <Outlet />
      </main>
    </div>
  )
}
