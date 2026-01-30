import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';

// Feature modules organized by category
const featureCategories = [
  {
    id: '1',
    name: 'Apartment Management',
    slug: 'property-management',
    cover: '/images/apartmentmanagement1.jpg',
    featureCount: 6,
    features: [
      'Apartment Management',
      'Maintenance Invoice Generation',
      'Payments Collections & Management',
      'Maintenance Employee Management',
      'Maintenance Expense & Income Management',
      'Reports & Dashboard',
    ],
  },
  {
    id: '2',
    name: 'Sales Management',
    slug: 'sales-management',
    cover: '/images/salesmanagement.jpg',
    featureCount: 3,
    features: [
      'Apartment Sales Management',
      'Payment Plan Tracking for Sales',
      'Sales Reports & Dashboard',
    ],
  },
  {
    id: '3',
    name: 'Employee Management',
    slug: 'employee-management',
    cover: '/images/employee-management-718x600.jpg',
    featureCount: 7,
    features: [
      'Employee Management',
      'Attendance Management',
      'Leave Management',
      'Overtime Management',
      'Salary Management (Auto & Manual Generation)',
      'Employee Assigned Item Management',
      'Employee Reports & Dashboard',
    ],
  },
  {
    id: '4',
    name: 'User Management',
    slug: 'user-management',
    cover: '/images/usermanagement.jpg',
    featureCount: 1,
    features: ['User Management (OPS, ADMIN, GUEST roles)'],
  },
  {
    id: '5',
    name: 'Equipment & Stock Management',
    slug: 'equipment-stock-management',
    cover: '/images/stockmanagement.jpg',
    featureCount: 3,
    features: [
      'Stock & Equipment Management',
      'Income & Expense Management',
      'Bank Receipt & Financial Management',
    ],
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
          {featureCategories.map((category) => (
            <div
              key={category.id}
              className="p-4 relative"
              data-testid={testIds.PROJECTS_PAGE.PROJECT_ITEM_CONTAINER}
            >
              <div className="sm:w-[370px] h-[320px] relative">
                <WixMediaImage
                  media={category.cover}
                  alt={category.name}
                  objectFit="cover"
                />
              </div>
              <div className="bg-white sm:mt-[-50px] border-t-4 relative mx-6 px-2 pt-3 border-blue-site">
                <h2 className="mb-4 font-site text-center">{category.name}</h2>
                <ul className="text-sm mb-6 space-y-2 text-left">
                  {category.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-site mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center pb-4">
                  <a
                    data-testid={testIds.PROJECTS_PAGE.PROJECT_ITEM_CTA}
                    href={`/features/${category.slug}`}
                    className="text-purple-site py-6 font-site"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
