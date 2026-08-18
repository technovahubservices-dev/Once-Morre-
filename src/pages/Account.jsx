import { Link } from 'react-router-dom'
import AccountSidebar from '../components/account/AccountSidebar.jsx'
import LoyaltyCard from '../components/account/LoyaltyCard.jsx'
import PersonalInfo from '../components/account/PersonalInfo.jsx'
import WishlistPreview from '../components/account/WishlistPreview.jsx'
import RecentOrders from '../components/account/RecentOrders.jsx'
import { useAuth } from '../context/AuthContext.jsx'

export default function Account() {
  const { user } = useAuth()
  const firstName = user?.name?.split(' ')[0] || 'there'

  return (
    <>
      <header className="mb-4">
        <h1 className="font-display-lg text-display-lg text-deep-emerald">Welcome Back, {firstName}.</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
          Manage your personal details, view orders, and track your loyalty status.
        </p>
      </header>

      <LoyaltyCard />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PersonalInfo />
        <WishlistPreview />
      </div>

      <RecentOrders />
    </>
  )
}
