import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-soft-cream dark:bg-primary w-full py-20 px-margin-mobile md:px-margin-desktop border-t border-outline-variant dark:border-primary-container">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-4 mb-10 md:mb-0">
          <Link className="text-headline-lg font-headline-lg text-deep-emerald dark:text-primary-fixed mb-4 inline-block opacity-80 hover:opacity-100 transition-opacity" to="/">
            ONCE MORRE
          </Link>
          <p className="text-on-surface-variant font-body-md text-sm mb-6 max-w-xs">
            Pure dairy goodness delivered from our farms to your home. Fresh, natural, and crafted with care since generations.
          </p>
          <div className="flex space-x-4">
            <a aria-label="Facebook" className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd" />
              </svg>
            </a>
            <a aria-label="Instagram" className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047 1.024-.06 1.379-.06 3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fillRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div className="col-span-1 md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 font-body-md text-body-md">
          <div>
            <h4 className="font-headline-md text-base text-primary mb-4">Quick Links</h4>
            <ul className="flex flex-col space-y-3">
              <li><Link className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" to="/store-locator">Store Finder</Link></li>
              <li><Link className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" to="/search">Track Order</Link></li>
              <li><a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Delivery</a></li>
              <li><a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline-md text-base text-primary mb-4">Support</h4>
            <ul className="flex flex-col space-y-3">
              <li><Link className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" to="/support">Support</Link></li>
              <li><Link className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" to="/contact-us">Contact Us</Link></li>
              <li><Link className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" to="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 mt-6 md:mt-0">
            <h4 className="font-headline-md text-base text-primary mb-4">Stay Connected</h4>
            <Link className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-sm block mb-4" to="/">
              Newsletter
            </Link>
            <div className="flex">
              <input
                className="flex-grow border-b border-outline-variant bg-transparent px-0 py-2 focus:outline-none focus:border-primary font-body-md text-sm placeholder-on-surface-variant/50"
                placeholder="Your email address"
                type="email"
              />
              <button className="text-primary font-medium text-sm ml-2">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-12 mt-16 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center font-body-md text-xs text-on-surface-variant dark:text-outline-variant">
          <p>© 2024 ONCE MORRE. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link className="hover:text-primary transition-colors" to="/privacy-policy">Privacy Policy</Link>
            <Link className="hover:text-primary transition-colors" to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
