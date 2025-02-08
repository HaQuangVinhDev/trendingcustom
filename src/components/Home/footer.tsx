import React, { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Link } from 'lucide-react';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              {['Home', 'Shop', 'Blog', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-red-500 flex items-center">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Policies</h3>
            <ul className="space-y-2">
              {[
                'Privacy Policy',
                'Cancellation & Modification',
                'Replacement & Refund Policy',
                'Shipping Policy',
                'Payment Method',
                'Terms of Service',
                'Intellectual Property Claim',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-red-500 flex items-center">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              {['Help content', 'Contact Us', 'Size Guide', 'Valentine Cutoff Date'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-red-500 flex items-center">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <img
              src="https://trendingcustom.com/cdn/shop/t/57/assets/logo.svg?v=75357380592425913601684321072"
              alt="Trending Custom"
              className="mb-5 w-36"
            />
            <div className="text-sm space-y-2">
              <h6 className="text-lg font-bold pointer-events-none">Get in touch?</h6>
              <p>
                <strong>Email 24/7:</strong>{' '}
                <a href="mailto:Foli@example.com" className="hover:text-red-500">
                  Foli@example.com
                </a>
              </p>
              <p>
                <strong>Live chat:</strong> Online from 9.30 AM to 5 PM (PST), Mon-Sun
              </p>
              <p>
                <strong>US Warehouse:</strong> 584 Castro Street #3053, San Francisco, CA 94114
              </p>
              <p>
                <strong>Canada:</strong> 422 Richards St, Vancouver, BC V6B 2Z4
              </p>
              <p>
                <strong>Singapore:</strong> 66 Rangoon Road, #02-66, R66 Apartments, Singapore 218356
              </p>
            </div>
            <div className="mt-4">
              <ul className="flex flex-wrap space-x-4">
                {['facebook', 'youtube', 'pinterest', 'google'].map((social) => (
                  <li key={social}>
                    <a href="#">
                      <img
                        src={`//trendingcustom.com/cdn/shop/t/57/assets/${social}.svg?v=40076760842241353711684321067`}
                        alt={social}
                        className="w-6 h-6 object-contain"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-300 pt-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-wrap ml-8 space-x-6 items-center">
              <img
                src="https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=6215c2ff-22c6-4a51-ac3d-f4ff89588f3c"
                alt="DMCA"
                className="h-6"
              />
              <div>
                <Button variant="outline" className="border-green-500">
                  <a href="/">Review us on Trustpilot</a>
                </Button>
                <p className="text-sm font-bold mt-2">Trusted by more than 2M+ customers</p>
              </div>
            </div>
            <div className="flex flex-wrap space-x-4 mb-4 md:mb-0">
              {['mcafee', 'applepay', 'paypal', 'visa', 'mastercard', 'americanexpress'].map((payment) => (
                <img
                  key={payment}
                  src={`https://trendingcustom.com/cdn/shop/t/57/assets/${payment}.svg?v=60147985054043600351684321072`}
                  alt={payment}
                  className="h-6 object-contain"
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center mt-4">
            © {new Date().getFullYear()}{' '}
            <a href="/" className="hover:text-red-500">
              TrendingCustom™️
            </a>{' '}
            | <a href="https://www.shopify.com">Powered by Shopify</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
