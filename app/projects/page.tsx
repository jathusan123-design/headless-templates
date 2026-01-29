import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';

// Sample project data - replace this with your actual data source
const projects = [
  {
    id: '1',
    slug: 'automated-maintenance-tracking',
    title: 'Automated Maintenance Tracking',
    shortDescription:
      'Streamline maintenance requests with automated workflows, real-time notifications, and comprehensive tracking from submission to completion.',
    cover:
      'https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_434,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg',
    category: 'Maintenance Management',
  },
  {
    id: '2',
    slug: 'employee-attendance-system',
    title: 'Employee Attendance System',
    shortDescription:
      'Advanced biometric and digital attendance tracking with automated timesheet generation, leave management, and payroll integration.',
    cover:
      'https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_615,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg',
    category: 'Employee Management',
  },
  {
    id: '3',
    slug: 'smart-invoicing-payments',
    title: 'Smart Invoicing & Payments',
    shortDescription:
      'Automated invoice generation, multi-payment gateway integration, and real-time payment tracking with detailed financial reporting.',
    cover:
      'https://static.wixstatic.com/media/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_682,h_568,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg',
    category: 'Financial Management',
  },
  {
    id: '4',
    slug: 'tenant-portal-app',
    title: 'Tenant Portal & Mobile App',
    shortDescription:
      'Give tenants 24/7 access to rent payments, maintenance requests, documents, and announcements through web and mobile platforms.',
    cover:
      'https://static.wixstatic.com/media/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg/v1/fill/w_486,h_568,al_tr,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg',
    category: 'Tenant Services',
  },
  {
    id: '5',
    slug: 'property-sales-crm',
    title: 'Property Sales CRM',
    shortDescription:
      'Complete CRM solution for managing property listings, leads, client communications, and sales pipeline with automated follow-ups.',
    cover:
      'https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_434,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg',
    category: 'Sales Management',
  },
  {
    id: '6',
    slug: 'analytics-reporting-dashboard',
    title: 'Analytics & Reporting Dashboard',
    shortDescription:
      'Comprehensive analytics dashboard with customizable reports, KPI tracking, and predictive insights for data-driven decision making.',
    cover:
      'https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_615,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg',
    category: 'Analytics',
  },
];

export default async function Projects() {
  return (
    <div className="relative">
      <div className="w-full h-[400px] relative">
        <WixMediaImage
          media="/images/backround.png"
          alt="features"
          sizes="100vw"
          objectFit="cover"
          disableZoom={true}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
        <h1
          className="text-center py-8 font-site"
          data-testid={testIds.PROJECTS_PAGE.HEADER}
        >
          Our Features & Modules
        </h1>
        <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
          Discover the powerful features and modules that make our apartment
          management system the complete solution for modern property
          management. Each module is designed to streamline your operations and
          improve efficiency.
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 grid-flow-row mt-10"
          data-testid={testIds.PROJECTS_PAGE.PROJECT_LIST}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-4 relative"
              data-testid={testIds.PROJECTS_PAGE.PROJECT_ITEM_CONTAINER}
            >
              <div className="sm:w-[370px] h-[320px] relative">
                <WixMediaImage
                  media={project.cover}
                  alt={project.title}
                  objectFit="cover"
                />
              </div>
              <div className="bg-white sm:mt-[-50px] border-t-4 relative mx-6 px-2 pt-3 border-blue-site text-center">
                <span className="text-xs text-purple-site font-semibold block mb-2">
                  {project.category}
                </span>
                <h2 className="mb-6 font-site">{project.title}</h2>
                <p className="text-sm mb-6">{project.shortDescription}</p>
                <a
                  data-testid={testIds.PROJECTS_PAGE.PROJECT_ITEM_CTA}
                  href={`/projects/${project.slug}`}
                  className="text-purple-site py-6 font-site"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
