import { WixMediaImage } from '@app/components/Image/WixMediaImage';

export default async function About() {
  return (
    <div className="relative">
      <div className="w-full h-[400px] relative">
        <WixMediaImage
          media="/images/Aptera.jpg"
          alt="about"
          sizes="100vw"
          objectFit="cover"
          disableZoom={true}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
        <h1 className="text-center py-8 font-site">About Our System</h1>
        <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
          Our Apartment Management System is a comprehensive software solution
          designed to streamline property management operations. We provide
          integrated tools for managing apartments, employees, maintenance,
          invoicing, payments, and sales—all in one powerful platform.
        </p>
        <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
          Built with efficiency and user experience in mind, our system helps
          property managers, landlords, and real estate professionals automate
          their daily operations, reduce paperwork, improve communication, and
          increase profitability.
        </p>
        <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
          We believe that property management should be simple, transparent, and
          efficient. Our mission is to empower property management teams with
          the technology they need to succeed in today&apos;s competitive real
          estate market.
        </p>
        <div className="justify-center flex flex-col sm:flex-row gap-6 mt-10 text-center">
          <a href="/contact" className="btn-main text-lg">
            Request a Demo
          </a>
          <a href="/features" className="btn-main text-lg">
            View Features
          </a>
        </div>
        <h2 className="text-center text-4xl my-10 sm:my-20 font-site">
          Key Features
        </h2>
        <div className="flex flex-col sm:flex-row gap-12 justify-between">
          <div className="text-center flex flex-col items-center gap-4">
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 200 200"
              height="150"
              width="150"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="presentation"
              aria-hidden="true"
            >
              <g>
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="#8751BD"
                  data-color="1"
                />

                <g transform="translate(50, 40)">
                  <rect
                    x="0"
                    y="20"
                    width="100"
                    height="100"
                    fill="#2859B5"
                    data-color="3"
                  />

                  <path
                    d="M -5 20 L 50 0 L 105 20 Z"
                    fill="#2859B5"
                    data-color="3"
                  />

                  <rect
                    x="10"
                    y="35"
                    width="15"
                    height="15"
                    fill="#FFFFFF"
                    rx="2"
                    data-color="2"
                  />
                  <rect
                    x="35"
                    y="35"
                    width="15"
                    height="15"
                    fill="#FFFFFF"
                    rx="2"
                    data-color="2"
                  />
                  <rect
                    x="60"
                    y="35"
                    width="15"
                    height="15"
                    fill="#FFFFFF"
                    rx="2"
                    data-color="2"
                  />
                  <rect
                    x="85"
                    y="35"
                    width="15"
                    height="15"
                    fill="#FFFFFF"
                    rx="2"
                    data-color="2"
                  />

                  <rect
                    x="10"
                    y="60"
                    width="15"
                    height="15"
                    fill="#FFFFFF"
                    rx="2"
                    data-color="2"
                  />
                  <rect
                    x="35"
                    y="60"
                    width="15"
                    height="15"
                    fill="#FFFFFF"
                    rx="2"
                    data-color="2"
                  />
                  <rect
                    x="60"
                    y="60"
                    width="15"
                    height="15"
                    fill="#FFFFFF"
                    rx="2"
                    data-color="2"
                  />
                  <rect
                    x="85"
                    y="60"
                    width="15"
                    height="15"
                    fill="#FFFFFF"
                    rx="2"
                    data-color="2"
                  />

                  <rect
                    x="10"
                    y="85"
                    width="15"
                    height="15"
                    fill="#FFFFFF"
                    rx="2"
                    data-color="2"
                  />
                  <rect
                    x="35"
                    y="85"
                    width="15"
                    height="15"
                    fill="#FFFFFF"
                    rx="2"
                    data-color="2"
                  />
                  <rect
                    x="60"
                    y="85"
                    width="15"
                    height="15"
                    fill="#FFFFFF"
                    rx="2"
                    data-color="2"
                  />
                  <rect
                    x="85"
                    y="85"
                    width="15"
                    height="15"
                    fill="#FFFFFF"
                    rx="2"
                    data-color="2"
                  />

                  <rect
                    x="42.5"
                    y="105"
                    width="15"
                    height="15"
                    fill="#FFFFFF"
                    rx="2"
                    data-color="2"
                  />

                  <circle
                    cx="54"
                    cy="112.5"
                    r="1.5"
                    fill="#8751BD"
                    data-color="1"
                  />

                  <g stroke="#2859B5" stroke-width="1" data-color="3">
                    <line x1="17.5" y1="35" x2="17.5" y2="50" />
                    <line x1="10" y1="42.5" x2="25" y2="42.5" />
                    <line x1="42.5" y1="35" x2="42.5" y2="50" />
                    <line x1="35" y1="42.5" x2="50" y2="42.5" />
                    <line x1="67.5" y1="35" x2="67.5" y2="50" />
                    <line x1="60" y1="42.5" x2="75" y2="42.5" />
                    <line x1="92.5" y1="35" x2="92.5" y2="50" />
                    <line x1="85" y1="42.5" x2="100" y2="42.5" />

                    <line x1="17.5" y1="60" x2="17.5" y2="75" />
                    <line x1="10" y1="67.5" x2="25" y2="67.5" />
                    <line x1="42.5" y1="60" x2="42.5" y2="75" />
                    <line x1="35" y1="67.5" x2="50" y2="67.5" />
                    <line x1="67.5" y1="60" x2="67.5" y2="75" />
                    <line x1="60" y1="67.5" x2="75" y2="67.5" />
                    <line x1="92.5" y1="60" x2="92.5" y2="75" />
                    <line x1="85" y1="67.5" x2="100" y2="67.5" />

                    <line x1="17.5" y1="85" x2="17.5" y2="100" />
                    <line x1="10" y1="92.5" x2="25" y2="92.5" />
                    <line x1="42.5" y1="85" x2="42.5" y2="100" />
                    <line x1="35" y1="92.5" x2="50" y2="92.5" />
                    <line x1="67.5" y1="85" x2="67.5" y2="100" />
                    <line x1="60" y1="92.5" x2="75" y2="92.5" />
                    <line x1="92.5" y1="85" x2="92.5" y2="100" />
                    <line x1="85" y1="92.5" x2="100" y2="92.5" />

                    <line x1="50" y1="105" x2="50" y2="120" />
                  </g>

                  <rect
                    x="0"
                    y="20"
                    width="100"
                    height="3"
                    fill="#FFFFFF"
                    opacity="0.3"
                    data-color="2"
                  />
                  <rect
                    x="0"
                    y="117"
                    width="100"
                    height="3"
                    fill="#FFFFFF"
                    opacity="0.3"
                    data-color="2"
                  />
                </g>
              </g>
            </svg>
            <span className="font-site">
              Comprehensive Apartment
              <br /> Management Suite
            </span>
          </div>
          <div className="text-center flex flex-col items-center gap-4">
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 200 200"
              height="150"
              width="150"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="presentation"
              aria-hidden="true"
            >
              <g>
                <ellipse
                  cx="100"
                  cy="110"
                  rx="85"
                  ry="75"
                  fill="#8751BD"
                  data-color="1"
                />

                <circle cx="70" cy="100" r="35" fill="#FFFFFF" data-color="2" />
                <circle
                  cx="70"
                  cy="100"
                  r="28"
                  fill="none"
                  stroke="#2859B5"
                  stroke-width="3"
                  data-color="3"
                />

                <text
                  x="70"
                  y="110"
                  font-size="32"
                  font-weight="bold"
                  fill="#2859B5"
                  text-anchor="middle"
                  font-family="Arial, sans-serif"
                  data-color="3"
                >
                  $
                </text>

                <circle cx="100" cy="85" r="30" fill="#FFFFFF" data-color="2" />
                <circle
                  cx="100"
                  cy="85"
                  r="24"
                  fill="none"
                  stroke="#2859B5"
                  stroke-width="3"
                  data-color="3"
                />

                <text
                  x="100"
                  y="94"
                  font-size="28"
                  font-weight="bold"
                  fill="#2859B5"
                  text-anchor="middle"
                  font-family="Arial, sans-serif"
                  data-color="3"
                >
                  $
                </text>

                <circle
                  cx="125"
                  cy="105"
                  r="25"
                  fill="#FFFFFF"
                  data-color="2"
                />
                <circle
                  cx="125"
                  cy="105"
                  r="20"
                  fill="none"
                  stroke="#2859B5"
                  stroke-width="2.5"
                  data-color="3"
                />

                <text
                  x="125"
                  y="112"
                  font-size="24"
                  font-weight="bold"
                  fill="#2859B5"
                  text-anchor="middle"
                  font-family="Arial, sans-serif"
                  data-color="3"
                >
                  $
                </text>

                <path
                  d="M 50 140 L 65 125 L 80 130 L 95 115 L 110 120 L 125 105 L 140 95"
                  fill="none"
                  stroke="#2859B5"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-color="3"
                />

                <circle cx="50" cy="140" r="4" fill="#2859B5" data-color="3" />
                <circle cx="65" cy="125" r="4" fill="#2859B5" data-color="3" />
                <circle cx="80" cy="130" r="4" fill="#2859B5" data-color="3" />
                <circle cx="95" cy="115" r="4" fill="#2859B5" data-color="3" />
                <circle cx="110" cy="120" r="4" fill="#2859B5" data-color="3" />
                <circle cx="125" cy="105" r="4" fill="#2859B5" data-color="3" />
                <circle cx="140" cy="95" r="4" fill="#2859B5" data-color="3" />

                <path
                  d="M 135 90 L 140 95 L 135 100"
                  fill="none"
                  stroke="#2859B5"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-color="3"
                />
              </g>
            </svg>
            <span className="font-site">
              Automated Financial <br /> Operations & Reporting
            </span>
          </div>
          <div className="text-center flex flex-col items-center gap-4">
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 200 200"
              height="150"
              width="150"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="presentation"
              aria-hidden="true"
            >
              <g>
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="#8751BD"
                  data-color="1"
                />

                <g transform="translate(100, 60)">
                  <circle cx="0" cy="0" r="18" fill="#FFFFFF" data-color="2" />
                  <path
                    d="M -22 35 Q -22 20 -12 15 Q 0 10 12 15 Q 22 20 22 35 L 22 45 L -22 45 Z"
                    fill="#FFFFFF"
                    data-color="2"
                  />
                </g>

                <g transform="translate(60, 90)">
                  <circle cx="0" cy="0" r="14" fill="#FFFFFF" data-color="2" />
                  <path
                    d="M -18 28 Q -18 16 -10 12 Q 0 8 10 12 Q 18 16 18 28 L 18 36 L -18 36 Z"
                    fill="#FFFFFF"
                    data-color="2"
                  />
                </g>

                <g transform="translate(140, 90)">
                  <circle cx="0" cy="0" r="14" fill="#FFFFFF" data-color="2" />
                  <path
                    d="M -18 28 Q -18 16 -10 12 Q 0 8 10 12 Q 18 16 18 28 L 18 36 L -18 36 Z"
                    fill="#FFFFFF"
                    data-color="2"
                  />
                </g>

                <g transform="translate(80, 130)">
                  <circle cx="0" cy="0" r="12" fill="#FFFFFF" data-color="2" />
                  <path
                    d="M -15 24 Q -15 14 -8 10 Q 0 6 8 10 Q 15 14 15 24 L 15 30 L -15 30 Z"
                    fill="#FFFFFF"
                    data-color="2"
                  />
                </g>

                <g transform="translate(120, 130)">
                  <circle cx="0" cy="0" r="12" fill="#FFFFFF" data-color="2" />
                  <path
                    d="M -15 24 Q -15 14 -8 10 Q 0 6 8 10 Q 15 14 15 24 L 15 30 L -15 30 Z"
                    fill="#FFFFFF"
                    data-color="2"
                  />
                </g>

                <path
                  d="M 60 100 L 100 70"
                  stroke="#2859B5"
                  stroke-width="2.5"
                  fill="none"
                  data-color="3"
                />
                <path
                  d="M 140 100 L 100 70"
                  stroke="#2859B5"
                  stroke-width="2.5"
                  fill="none"
                  data-color="3"
                />
                <path
                  d="M 80 140 L 100 110"
                  stroke="#2859B5"
                  stroke-width="2.5"
                  fill="none"
                  data-color="3"
                />
                <path
                  d="M 120 140 L 100 110"
                  stroke="#2859B5"
                  stroke-width="2.5"
                  fill="none"
                  data-color="3"
                />

                <rect
                  x="85"
                  y="35"
                  width="30"
                  height="4"
                  rx="2"
                  fill="#2859B5"
                  data-color="3"
                />
                <rect
                  x="91"
                  y="41"
                  width="18"
                  height="2"
                  rx="1"
                  fill="#2859B5"
                  data-color="3"
                />
              </g>
            </svg>
            <span className="font-site">
              Integrated Employee <br /> & HR Management
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
