import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <>
      {/* Graphic directly above footer */}
      <div className="w-full">
        <img
          src="/images/bg-footer.png"
          alt="Decorative footer background"
          className="block w-full select-none"
          draggable={false}
        />
      </div>

      {/* Footer */}
      <footer className="bg-[#015287] text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <img src="/images/logo-white.png" alt="SignCo USA" className="h-10 w-auto" />
              <p className="mt-4 text-sm/6 text-white/80">
                Quality signage and branding solutions tailored to your business.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wide">Products</h3>
              <Separator className="my-3 bg-white/20" />
              <ul className="space-y-2 text-sm/6 text-white/80">
                <li><a href="#" className="hover:text-white">Banners</a></li>
                <li><a href="#" className="hover:text-white">Vehicle Wraps</a></li>
                <li><a href="#" className="hover:text-white">Storefront</a></li>
                <li><a href="#" className="hover:text-white">Custom Decals</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wide">Company</h3>
              <Separator className="my-3 bg-white/20" />
              <ul className="space-y-2 text-sm/6 text-white/80">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wide">Support</h3>
              <Separator className="my-3 bg-white/20" />
              <ul className="space-y-2 text-sm/6 text-white/80">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white">Warranty</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-white/20" />

          <div className="flex flex-col items-start justify-between gap-4 text-xs/6 text-white/70 md:flex-row">
            <p>© {new Date().getFullYear()} SignCo USA. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;


