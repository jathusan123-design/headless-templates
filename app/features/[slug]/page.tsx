'use client';

import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';
import { useState } from 'react';

// Feature category details data
const categoryData: { [key: string]: any } = {
  'property-management': {
    id: '1',
    slug: 'property-management',
    title: 'Apartment Management',
    category: 'Core Module',
    shortDescription:
      'Comprehensive apartment management solution covering apartment operations, maintenance, payments, employee management, and financial tracking.',
    longDescription:
      'Our Apartment Management module is the foundation of efficient apartment operations. Manage all aspects of your apartments including apartment details, maintenance workflows, payment collections, employee assignments, and comprehensive financial tracking. This integrated system ensures seamless operations across all apartment management activities with real-time reporting and analytics.',
    cover: '/images/Aptera.jpg',
    features: [
      'Apartment Management - Complete property and unit tracking',
      'Maintenance Invoice Generation - Automated billing for maintenance services',
      'Payments Collections & Management - Multi-channel payment processing',
      'Maintenance Employee Management - Staff assignment and tracking',
      'Maintenance Expense & Income Management - Financial oversight',
      'Reports & Dashboard - Real-time analytics and insights',
    ],
    benefits: [
      'Centralized property operations',
      'Streamlined maintenance workflows',
      'Improved payment collection rates',
      'Better employee utilization',
      'Comprehensive financial visibility',
    ],
    gallery: [
      {
        src: '/images/ApteraHomePage.png',
      },
      {
        src: '/images/ApteraMaintenanceDashboard.jpg',
      },
      {
        src: '/images/ApteraApartmentsPage.jpg',
      },
      {
        src: '/images/ApteraInvoicesPage.jpg',
      },
      {
        src: '/images/ApteraFeeSchdulesPage.jpg',
      },
      {
        src: '/images/ApteraExpenses.jpg',
      },
      {
        src: '/images/ApteraApartmentReports.png',
      },
    ],
  },
  'sales-management': {
    id: '2',
    slug: 'sales-management',
    title: 'Sales Management',
    category: 'Sales Module',
    shortDescription:
      'End-to-end apartment sales management with payment plan tracking and comprehensive sales analytics.',
    longDescription:
      'Transform your property sales process with our dedicated Sales Management module. Track apartment sales from lead to closing, manage complex payment plans with automated tracking, and gain insights through detailed sales reports and dashboards. Perfect for developers and property companies managing multiple units and payment schedules.',
    cover: '/images/Aptera.jpg',
    features: [
      'Apartment Sales Management - Complete sales pipeline tracking',
      'Payment Plan Tracking for Sales - Automated installment monitoring',
      'Sales Reports & Dashboard - Real-time performance metrics',
    ],
    benefits: [
      'Streamlined sales process',
      'Automated payment tracking',
      'Reduced payment defaults',
      'Data-driven sales insights',
      'Improved customer management',
    ],
    gallery: [
      {
        src: '/images/salesmanagement111.jpg',
      },
      {
        src: '/images/salespage.jpg',
      },
      {
        src: '/images/salepage.jpg',
      },
      {
        src: '/images/insatllmentpage.jpg',
      },
      {
        src: '/images/salereports.jpg',
      },
    ],
  },
  'employee-management': {
    id: '3',
    slug: 'employee-management',
    title: 'Employee Management',
    category: 'HR Module',
    shortDescription:
      'Complete HR solution with attendance, leave, overtime, salary management, item tracking, and comprehensive employee analytics.',
    longDescription:
      'Revolutionize your human resource operations with our all-inclusive Employee Management module. Track employee information, monitor attendance with biometric integration, manage leave requests, calculate overtime, automate salary generation, track assigned items, and access detailed reports. Everything you need to manage your workforce efficiently in one integrated system.',
    cover: '/images/Aptera.jpg',
    features: [
      'Employee Management - Complete employee database and profiles',
      'Attendance Management - Biometric and digital time tracking',
      'Leave Management - Automated leave request workflow',
      'Overtime Management - Automatic calculation and approval',
      'Salary Management (Auto & Manual) - Flexible payroll processing',
      'Employee Assigned Item Management - Track company assets',
      'Employee Reports & Dashboard - Comprehensive HR analytics',
    ],
    benefits: [
      'Eliminate manual HR processes',
      'Accurate payroll calculations',
      'Improved attendance tracking',
      'Better leave management',
      'Asset accountability',
    ],
    gallery: [
      {
        src: '/images/employeeManagementDashboard.png',
      },
      {
        src: '/images/empmanagementemppage.png',
      },
      {
        src: '/images/attendacemangement.png',
      },
      {
        src: '/images/leavemanagemnt.png',
      },
      {
        src: '/images/overtimemanagement.png',
      },
      {
        src: '/images/salarymanagement.png',
      },
      {
        src: '/images/empitemmanagement.png',
      },
      {
        src: '/images/empmanamentreports.png',
      },
      {
        src: '/images/empmangementholidaysettings.png',
      },
    ],
  },
  'user-management': {
    id: '4',
    slug: 'user-management',
    title: 'User Management',
    category: 'Security Module',
    shortDescription:
      'Role-based access control with OPS, ADMIN, and GUEST user roles for secure system access.',
    longDescription:
      'Secure your system with our comprehensive User Management module. Define and manage user roles with granular permissions for Operations (OPS), Administration (ADMIN), and Guest users. Control access to different modules and features based on roles, ensuring data security and operational integrity across your organization.',
    cover: '/images/Aptera.jpg',
    features: [
      'User Management (OPS, ADMIN, GUEST roles) - Complete role-based access control',
    ],
    benefits: [
      'Enhanced system security',
      'Controlled data access',
      'Role-based permissions',
      'Audit trail capability',
      'Simplified user administration',
    ],
    gallery: [
      {
        src: '/images/userspage.jpg',
      },
      {
        src: '/images/userreports.jpg',
      },
    ],
  },
  'equipment-stock-management': {
    id: '5',
    slug: 'equipment-stock-management',
    title: 'Equipment & Stock Management',
    category: 'Inventory Module',
    shortDescription:
      'Comprehensive inventory control with stock tracking, financial management, and bank receipt processing.',
    longDescription:
      'Take control of your inventory and finances with our Equipment & Stock Management module. Track all equipment and stock items, manage income and expenses related to inventory, and process bank receipts for complete financial transparency. Ideal for property management companies handling maintenance supplies, equipment, and financial transactions.',
    cover: '/images/Aptera.jpg',
    features: [
      'Stock & Equipment Management - Complete inventory tracking',
      'Income & Expense Management - Financial transaction monitoring',
      'Bank Receipt & Financial Management - Banking integration and reconciliation',
    ],
    benefits: [
      'Prevent stock shortages',
      'Accurate financial tracking',
      'Streamlined bank reconciliation',
      'Better inventory control',
      'Reduced operational costs',
    ],
    gallery: [],
  },
};

// Carousel Component
function ImageCarousel({ images }: { images: { src: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full">
      {/* Main Image Container */}
      <div className="relative w-full h-[400px] sm:h-[600px] overflow-hidden rounded-lg shadow-2xl bg-gray-100">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-full flex-shrink-0">
              <WixMediaImage
                media={image.src}
                width={1915}
                height={890}
                sizes="100vw"
                objectFit="cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                currentIndex === index
                  ? 'border-purple-site scale-105 shadow-lg'
                  : 'border-gray-300 hover:border-purple-site/50 opacity-60 hover:opacity-100'
              }`}
              aria-label={`Go to image ${index + 1}`}
            >
              <WixMediaImage
                media={image.src}
                width={80}
                height={64}
                sizes="80px"
                objectFit="cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Dot Indicators (alternative to thumbnails for mobile) */}
      {images.length > 1 && images.length <= 10 && (
        <div className="flex gap-2 mt-4 justify-center sm:hidden">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentIndex === index
                  ? 'bg-purple-site w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectDetail({ params }: any) {
  // Get the category from hardcoded data
  const category = categoryData[params.slug];

  // If category not found, handle it here
  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-8 py-20 text-center">
        <h1 className="text-4xl font-site mb-4">Module Not Found</h1>
        <p className="text-gray-600 mb-8">
          The requested module could not be found.
        </p>
        <a href="/features" className="btn-main">
          Back to Modules
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
          media={category.cover}
          alt={category.title}
          objectFit="cover"
          sizes="100vw"
          disableZoom={true}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
        <div className="text-center">
          <span className="inline-block bg-purple-site text-white px-4 py-2 text-sm font-semibold mb-4">
            {category.category}
          </span>
          <h1 className="py-4 font-site">{category.title}</h1>
          <p className="pt-6 max-w-3xl text-lg mx-auto font-semibold">
            {category.shortDescription}
          </p>
          <p className="py-6 max-w-3xl text-sm mx-auto leading-relaxed">
            {category.longDescription}
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-site text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 gap-4">
            {category.features.map((feature: string, index: number) => (
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
            {category.benefits.map((benefit: string, index: number) => (
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

        {/* Gallery Carousel */}
        {category.gallery && category.gallery.length > 0 && (
          <div className="mt-16 mb-16">
            <h2 className="text-3xl font-site text-center mb-8">
              Screenshots & Preview
            </h2>
            <ImageCarousel images={category.gallery} />
          </div>
        )}
      </div>
    </div>
  );
}
