import './footer.css';
import testIds from '@app/utils/test-ids';

const Footer = () => (
  <footer
    className="m-h-56 leading-7 sm:p-14 font-site"
    data-testid={testIds.LAYOUT.FOOTER}
  >
    <div className="flex flex-col sm:flex-row">
      <div className="basis-2/3 bg-blue-site text-white p-14 sm:pl-44">
        <h2 className="text-2xl sm:text-3xl font-bold">CONTACT US</h2>
        <div className="flex flex-col sm:flex-row text-sm font-helvetica">
          <div className="basis-1/3 border-b border-white pb-4">
            <p className="mt-10">
              Have questions about our apartment management system? We&apos;re
              here to help with demos, support, and inquiries.
            </p>
          </div>
          <div className="basis-1/3"></div>
          <div className="basis-1/2 border-b border-white pb-4">
            <p className="mt-10">Phone: 0715327391</p>
            <p className="mt-4">Support: 24/7 Available</p>
          </div>
        </div>
        <h3 className="text-4xl mt-10">aptera@gmail.com</h3>
      </div>

      <div className="basis-1/3 bg-gray-200 p-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">STAY UPDATED</h2>
        <p className="mt-6">Subscribe for system updates and new features</p>
        <input
          type="email"
          className="my-6 w-3/4 block mx-auto bg-transparent border-0 border-b border-blue-site text-blue-site"
          placeholder="Email Address"
        />
        <a href="" className="text-purple-site py-6 font-site">
          Subscribe Now
        </a>
      </div>
    </div>

    <div className="mx-auto text-center sm:text-xs mt-6">
      <img
        src="/images/Aptera.png"
        alt="Aptera Logo"
        className="mx-auto h-16 w-auto object-contain"
      />
      <p className="font-default mb-10">© 2026 APTERA. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
