import { WixMediaImage } from '@app/components/Image/WixMediaImage';

export default async function Page() {
  return (
    <div className="relative">
      <div className="w-full h-[400px] relative">
        <WixMediaImage
          media="https://static.wixstatic.com/media/0b340f_a5c250a81aed4d7fa68e005cff2132c8~mv2_d_3840_1960_s_2.jpg/v1/fill/w_3456,h_984,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/0b340f_a5c250a81aed4d7fa68e005cff2132c8~mv2_d_3840_1960_s_2.jpg"
          alt="contact"
          sizes="100vw"
          objectFit="cover"
          disableZoom={true}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
        <h1 className="text-center py-8 font-site">Contact Us</h1>
        <div className="max-w-4xl mx-auto">
          <h3 className="font-site text-lg my-3">Request a Demo</h3>
          <form className="border-2 border-blue-site p-8">
            <div className="flex flex-col sm:flex-row sm:gap-12">
              <div className="basis-1/2">
                <label className="text-xs" htmlFor="name">
                  First name *
                </label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  id="name"
                  required={true}
                />
                <label className="text-xs" htmlFor="email">
                  Email *
                </label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  id="email"
                  required={true}
                />
              </div>
              <div className="basis-1/2">
                <label className="text-xs" htmlFor="last">
                  Last name
                </label>
                <input className="input" type="text" name="last" id="last" />
                <label className="text-xs" htmlFor="phone">
                  Phone *
                </label>
                <input
                  className="input"
                  type="tel"
                  name="phone"
                  id="phone"
                  required={true}
                />
              </div>
            </div>
            <label className="text-xs" htmlFor="company">
              Company/Organization
            </label>
            <input className="input" type="text" name="company" id="company" />
            <label className="text-xs" htmlFor="properties">
              Number of Properties
            </label>
            <select className="input" name="properties" id="properties">
              <option value="">Select...</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-100">51-100</option>
              <option value="100+">100+</option>
            </select>
            <label className="text-xs" htmlFor="message">
              Message
            </label>
            <textarea
              className="input"
              name="message"
              id="message"
              rows={4}
            ></textarea>
            <button className="btn-main w-full mt-6 text-xl" type="submit">
              Request Demo
            </button>
          </form>
        </div>
        <div className="max-w-4xl mx-auto mt-10">
          <h3 className="font-site text-lg my-3">Sales Inquiry</h3>
          <form className="border-2 border-blue-site p-8">
            <div className="flex flex-col sm:flex-row sm:gap-12">
              <div className="basis-1/2">
                <label className="text-xs" htmlFor="sales-name">
                  Full Name *
                </label>
                <input
                  className="input"
                  type="text"
                  name="sales-name"
                  id="sales-name"
                  required={true}
                />
                <label className="text-xs" htmlFor="sales-email">
                  Email *
                </label>
                <input
                  className="input"
                  type="email"
                  name="sales-email"
                  id="sales-email"
                  required={true}
                />
              </div>
              <div className="basis-1/2">
                <label className="text-xs" htmlFor="sales-company">
                  Company
                </label>
                <input
                  className="input"
                  type="text"
                  name="sales-company"
                  id="sales-company"
                />
                <label className="text-xs" htmlFor="sales-phone">
                  Phone *
                </label>
                <input
                  className="input"
                  type="tel"
                  name="sales-phone"
                  id="sales-phone"
                  required={true}
                />
              </div>
            </div>
            <label className="text-xs" htmlFor="interest">
              Area of Interest
            </label>
            <select className="input" name="interest" id="interest">
              <option value="">Select...</option>
              <option value="apartment-management">Apartment Management</option>
              <option value="employee-management">Employee Management</option>
              <option value="maintenance-invoicing">
                Maintenance & Invoicing
              </option>
              <option value="sales-management">Sales Management</option>
              <option value="complete-solution">Complete Solution</option>
            </select>
            <label className="text-xs" htmlFor="sales-message">
              How can we help?
            </label>
            <textarea
              className="input"
              name="sales-message"
              id="sales-message"
              rows={4}
            ></textarea>
            <button className="btn-main w-full mt-6 text-xl" type="submit">
              Submit Inquiry
            </button>
          </form>
        </div>
        <div className="max-w-4xl mx-auto mt-10">
          <h3 className="font-site text-lg my-3">Technical Support</h3>
          <form className="border-2 border-blue-site p-8">
            <div className="flex flex-col sm:flex-row sm:gap-12">
              <div className="basis-1/2">
                <label className="text-xs" htmlFor="support-name">
                  Full Name *
                </label>
                <input
                  className="input"
                  type="text"
                  name="support-name"
                  id="support-name"
                  required={true}
                />
                <label className="text-xs" htmlFor="support-email">
                  Email *
                </label>
                <input
                  className="input"
                  type="email"
                  name="support-email"
                  id="support-email"
                  required={true}
                />
              </div>
              <div className="basis-1/2">
                <label className="text-xs" htmlFor="account-id">
                  Account ID
                </label>
                <input
                  className="input"
                  type="text"
                  name="account-id"
                  id="account-id"
                />
                <label className="text-xs" htmlFor="priority">
                  Priority Level
                </label>
                <select className="input" name="priority" id="priority">
                  <option value="">Select...</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
            </div>
            <label className="text-xs" htmlFor="subject">
              Subject *
            </label>
            <input
              className="input"
              type="text"
              name="subject"
              id="subject"
              required={true}
            />
            <label className="text-xs" htmlFor="support-message">
              Issue Description *
            </label>
            <textarea
              className="input"
              name="support-message"
              id="support-message"
              rows={5}
              required={true}
            ></textarea>
            <button className="btn-main w-full mt-6 text-xl" type="submit">
              Submit Support Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}