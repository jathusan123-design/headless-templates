import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';

// Sample project details - replace this with your actual data source
const projectsData: { [key: string]: any } = {
  'automated-maintenance-tracking': {
    id: '1',
    slug: 'automated-maintenance-tracking',
    title: 'Automated Maintenance Tracking',
    category: 'Maintenance Management',
    shortDescription:
      'Streamline maintenance requests with automated workflows, real-time notifications, and comprehensive tracking from submission to completion.',
    longDescription:
      'Our automated maintenance tracking system revolutionizes how you manage property maintenance. Tenants can submit requests through mobile apps or web portals, which are automatically routed to the appropriate maintenance staff. Real-time notifications keep everyone informed, while detailed tracking ensures nothing falls through the cracks. The system includes preventive maintenance scheduling, vendor management, cost tracking, and complete maintenance history for each property.',
    cover:
      'https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_1920,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg',
    features: [
      'Online maintenance request submission',
      'Automated work order assignment',
      'Real-time status tracking',
      'Mobile app for maintenance staff',
      'Vendor management system',
      'Preventive maintenance scheduling',
      'Cost tracking and reporting',
      'Photo documentation',
      'Priority-based routing',
      'Complete maintenance history',
    ],
    benefits: [
      'Reduce response time by 60%',
      'Improve tenant satisfaction',
      'Track all maintenance costs',
      'Prevent emergency repairs',
      'Streamline vendor communications',
    ],
    gallery: [
      {
        src: 'https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_500,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg',
      },
      {
        src: 'https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_500,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg',
      },
      {
        src: 'https://static.wixstatic.com/media/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_500,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg',
      },
    ],
  },
  'employee-attendance-system': {
    id: '2',
    slug: 'employee-attendance-system',
    title: 'Employee Attendance System',
    category: 'Employee Management',
    shortDescription:
      'Advanced biometric and digital attendance tracking with automated timesheet generation, leave management, and payroll integration.',
    longDescription:
      'Transform your HR operations with our comprehensive employee attendance system. Support multiple check-in methods including biometric scanners, mobile apps, and web-based clock-in. Automated timesheet generation eliminates manual data entry while integrated leave management streamlines approval workflows. The system seamlessly connects with payroll processing, ensuring accurate salary calculations based on actual attendance, overtime, and leave records.',
    cover:
      'https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_1920,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg',
    features: [
      'Biometric attendance tracking',
      'Mobile check-in/check-out',
      'Automated timesheet generation',
      'Leave management system',
      'Shift scheduling',
      'Overtime calculation',
      'Payroll integration',
      'Real-time attendance dashboard',
      'GPS location tracking',
      'Multi-property support',
    ],
    benefits: [
      'Eliminate time theft',
      'Automate payroll processing',
      'Reduce HR administrative work',
      'Improve scheduling efficiency',
      'Track employee productivity',
    ],
    gallery: [
      {
        src: 'https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_500,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg',
      },
      {
        src: 'https://static.wixstatic.com/media/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_500,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg',
      },
      {
        src: 'https://static.wixstatic.com/media/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg/v1/fill/w_500,h_400,al_tr,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg',
      },
    ],
  },
  'smart-invoicing-payments': {
    id: '3',
    slug: 'smart-invoicing-payments',
    title: 'Smart Invoicing & Payments',
    category: 'Financial Management',
    shortDescription:
      'Automated invoice generation, multi-payment gateway integration, and real-time payment tracking with detailed financial reporting.',
    longDescription:
      'Simplify your financial operations with our intelligent invoicing and payment system. Automatically generate invoices for rent, maintenance fees, and other charges. Accept payments through multiple channels including credit cards, bank transfers, and digital wallets. Real-time payment tracking provides instant visibility into outstanding balances and payment history. Comprehensive financial reports help you make informed business decisions.',
    cover:
      'https://static.wixstatic.com/media/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_1920,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg',
    features: [
      'Automated invoice generation',
      'Recurring billing setup',
      'Multiple payment gateways',
      'Online payment portal',
      'Late fee automation',
      'Payment reminders',
      'Receipt generation',
      'Financial reporting',
      'Tax calculation',
      'Refund processing',
    ],
    benefits: [
      'Reduce payment delays by 40%',
      'Minimize manual billing errors',
      'Improve cash flow management',
      'Automate payment reminders',
      'Generate comprehensive reports',
    ],
    gallery: [
      {
        src: 'https://static.wixstatic.com/media/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_500,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg',
      },
      {
        src: 'https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_500,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg',
      },
      {
        src: 'https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_500,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg',
      },
    ],
  },
  'tenant-portal-app': {
    id: '4',
    slug: 'tenant-portal-app',
    title: 'Tenant Portal & Mobile App',
    category: 'Tenant Services',
    shortDescription:
      'Give tenants 24/7 access to rent payments, maintenance requests, documents, and announcements through web and mobile platforms.',
    longDescription:
      'Empower your tenants with self-service capabilities through our intuitive portal and mobile app. Tenants can pay rent online, submit maintenance requests, access lease documents, receive announcements, and communicate with property management—all from their smartphone or computer. The platform improves tenant satisfaction while reducing administrative burden on your team.',
    cover:
      'https://static.wixstatic.com/media/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg/v1/fill/w_1920,h_492,al_tr,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg',
    features: [
      'Online rent payment',
      'Maintenance request submission',
      'Document access',
      'Lease renewal online',
      'Community announcements',
      'Amenity booking',
      'Visitor management',
      'Package tracking',
      'Two-way messaging',
      'iOS and Android apps',
    ],
    benefits: [
      'Increase tenant satisfaction',
      'Reduce office walk-ins',
      'Improve communication',
      'Enable 24/7 service access',
      'Streamline operations',
    ],
    gallery: [
      {
        src: 'https://static.wixstatic.com/media/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg/v1/fill/w_500,h_400,al_tr,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg',
      },
      {
        src: 'https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_500,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg',
      },
      {
        src: 'https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_500,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg',
      },
    ],
  },
  'property-sales-crm': {
    id: '5',
    slug: 'property-sales-crm',
    title: 'Property Sales CRM',
    category: 'Sales Management',
    shortDescription:
      'Complete CRM solution for managing property listings, leads, client communications, and sales pipeline with automated follow-ups.',
    longDescription:
      'Boost your sales performance with our specialized property sales CRM. Manage all your listings in one place, track leads from first contact to closing, automate follow-up communications, and analyze your sales pipeline. The system includes document management, commission tracking, and integrations with popular listing portals. Sales teams can access everything they need from mobile devices while managers get real-time visibility into performance metrics.',
    cover:
      'https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_1920,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg',
    features: [
      'Property listing management',
      'Lead capture and tracking',
      'Automated follow-ups',
      'Sales pipeline visualization',
      'Client database',
      'Document management',
      'Commission calculator',
      'Email marketing integration',
      'Appointment scheduling',
      'Performance analytics',
    ],
    benefits: [
      'Increase conversion rates',
      'Never miss a follow-up',
      'Track sales performance',
      'Manage listings efficiently',
      'Automate routine tasks',
    ],
    gallery: [
      {
        src: 'https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_500,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg',
      },
      {
        src: 'https://static.wixstatic.com/media/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_500,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg',
      },
      {
        src: 'https://static.wixstatic.com/media/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg/v1/fill/w_500,h_400,al_tr,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg',
      },
    ],
  },
  'analytics-reporting-dashboard': {
    id: '6',
    slug: 'analytics-reporting-dashboard',
    title: 'Analytics & Reporting Dashboard',
    category: 'Analytics',
    shortDescription:
      'Comprehensive analytics dashboard with customizable reports, KPI tracking, and predictive insights for data-driven decision making.',
    longDescription:
      'Make informed decisions with our powerful analytics and reporting platform. Track key performance indicators in real-time, generate customizable reports, and gain insights from predictive analytics. The dashboard visualizes occupancy rates, revenue trends, maintenance costs, employee performance, and more. Export data in multiple formats and schedule automated report delivery to stakeholders.',
    cover:
      'https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_1920,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg',
    features: [
      'Real-time KPI dashboard',
      'Customizable reports',
      'Financial analytics',
      'Occupancy tracking',
      'Maintenance metrics',
      'Sales performance',
      'Employee productivity',
      'Predictive insights',
      'Data export options',
      'Automated report scheduling',
    ],
    benefits: [
      'Make data-driven decisions',
      'Identify trends early',
      'Optimize operations',
      'Track business performance',
      'Forecast future needs',
    ],
    gallery: [
      {
        src: 'https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_500,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg',
      },
      {
        src: 'https://static.wixstatic.com/media/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_500,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg',
      },
      {
        src: 'https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_500,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg',
      },
    ],
  },
};

export default async function ProjectDetail({ params }: any) {
  // Get the project from hardcoded data
  const project = projectsData[params.slug];

  // If project not found, you can handle it here
  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-8 py-20 text-center">
        <h1 className="text-4xl font-site mb-4">Feature Not Found</h1>
        <p className="text-gray-600 mb-8">
          The requested feature could not be found.
        </p>
        <a href="/projects" className="btn-main">
          Back to Features
        </a>
      </div>
    );
  }

  return (
    <div
      className="relative"
      data-testid={testIds.PROJECT_DETAILS_PAGE.CONTAINER}
    >
      <div className="w-full h-[400px] relative">
        <WixMediaImage
          media={project.cover}
          alt={project.title}
          objectFit="cover"
          sizes="100vw"
          disableZoom={true}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
        <div className="text-center">
          <span className="inline-block bg-purple-site text-white px-4 py-2 text-sm font-semibold mb-4">
            {project.category}
          </span>
          <h1 className="py-4 font-site">{project.title}</h1>
          <p className="pt-6 max-w-3xl text-lg mx-auto font-semibold">
            {project.shortDescription}
          </p>
          <p className="py-6 max-w-3xl text-sm mx-auto leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-site text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature: string, index: number) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 border-l-4 border-blue-site bg-gray-50"
              >
                <svg
                  className="w-5 h-5 text-purple-site mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-site text-center mb-8">Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.benefits.map((benefit: string, index: number) => (
              <div
                key={index}
                className="flex items-center gap-3 p-6 bg-blue-site text-white rounded"
              >
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-semibold">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="/contact" className="btn-main text-xl">
            Request a Demo
          </a>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-site text-center mb-8">
              Screenshots & Preview
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 grid-flow-row">
              {project.gallery.map((image: any, i: number) => (
                <div key={i} className="p-4 relative">
                  <WixMediaImage media={image.src} width={500} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
