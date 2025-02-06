import React from 'react';
import { Button } from '../../../components/ui/button';

export default function Footer() {
  return (
    <footer className="  py-8">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {/* Column 1: About Section */}
          <div className=" ">
            <h3 className="text-xl font-bold mb-4 pointer-events-none">Information</h3>
            <ul className="space-y-2 ">
              <li>
                <a href="#" className="text-sm hover:text-red-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-red-500">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-red-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-red-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 pointer-events-none">Policies</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-red-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-red-500">
                  Cancellation & Modification
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-red-500">
                  Replacement & Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-red-500">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-red-500">
                  Payment Method
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-red-500">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-red-500">
                  Intellectual Property Claim
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 pointer-events-none">Help</h3>
            <div className=" space-x-2">
              <a href="#" className="  hover:text-red-500">
                <p>Help content</p>
              </a>
              <a href="#" className="  hover:text-red-500">
                <p>Contact Us</p>
              </a>
              <a href="#" className="  hover:text-red-500">
                <p>Size Guide</p>
              </a>
              <a href="#" className="  hover:text-red-500">
                <p>Valentine Cutoff Date</p>
              </a>
            </div>
          </div>

          {/* Column 4: Contact Information */}

          <div>
            <img
              src="https://trendingcustom.com/cdn/shop/t/57/assets/logo.svg?v=75357380592425913601684321072"
              alt="trending"
              className="mb-5"
            />
            <div className="text-[15px] ">
              <h6 className="text-xl font-bold pointer-events-none"> Get in touch?</h6>
              {/*  */}
              <strong>Email24/7:</strong>
              <a href="#" className="hover:text-red-500">
                Foli@example.com
              </a>
              {/*  */}
              <p className="mt-2 mb-2">
                <strong>Live chat:</strong>Online from 9.30 AM to 5 PM (PST), Mon-Sun
              </p>
              {/*  */}
              <p className="mb-2">
                <strong>US Warehouse:</strong>584 Castro Street #3053, San Francisco, CA 94114
              </p>
              {/*  */}
              <p className="mb-2">
                <strong>Canada:</strong>422 Richards St, Vancouver, BC V6B 2Z4
              </p>
              {/*  */}
              <p className="mb-2">
                <strong>Singapore:</strong> 66 Rangoon Road, #02-66, R66 Apartments, Singapore 218356
              </p>
            </div>
            <div className="container flex mt-4 ">
              <div className="">
                <ul className="flex ">
                  <li className="mr-3">
                    <a href="#">
                      <img
                        src="//trendingcustom.com/cdn/shop/t/57/assets/facebook.svg?v=40076760842241353711684321067"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="mr-4">
                    <a href="#">
                      <img
                        src="//trendingcustom.com/cdn/shop/t/57/assets/youtube.svg?v=6638661724601410251684321061"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="mr-4">
                    <a href="#">
                      <img
                        src="//trendingcustom.com/cdn/shop/t/57/assets/pinterest.svg?v=32414446195036210561684321062"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="mr-4">
                    <a href="#">
                      <img
                        src="//trendingcustom.com/cdn/shop/t/57/assets/google.svg?v=42231041703542086261684321061"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="mt-6 border-t border-gray-700 pt-4" />
      <div className=" container">
        <div className="flex justify-end gap-4 pr-[60px]">
          <img
            src="https://trendingcustom.com/cdn/shop/t/57/assets/mcafee.svg?v=60147985054043600351684321072"
            alt=""
          />
          <img
            src="https://trendingcustom.com/cdn/shop/t/57/assets/applepay.svg?v=28520863370749705221684321065"
            alt=""
          />
          <img
            src="https://trendingcustom.com/cdn/shop/t/57/assets/paypal.svg?v=144439452253569997431684321056"
            alt=""
          />
          <img src="https://trendingcustom.com/cdn/shop/t/57/assets/visa.svg?v=13516842236769147801684321059" alt="" />
          <img
            src="https://trendingcustom.com/cdn/shop/t/57/assets/mastercard.svg?v=127634395552011532221684321069"
            alt=""
          />
          <img
            src="https://trendingcustom.com/cdn/shop/t/57/assets/americanexpress.svg?v=154218857946696951621684321064"
            alt=""
          />
        </div>
        <div className="h-8  w-[100%] flex flex-auto gap-8 pl-[80px]">
          <img
            src=" https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=6215c2ff-22c6-4a51-ac3d-f4ff89588f3c"
            alt=""
          />
          {/*  */}
          <span>
            <div>
              <Button className="border border-green-500 mx-[30px]">
                <a href="/">Review us on </a>
                <img src="" alt="" />
                <strong>Trustpilot</strong>
              </Button>
            </div>
            <p className="text-[16px] font-bold mt-[10px]">Trusted by more than 2M+ customers</p>
          </span>
          {/*  */}
          <p className="text-sm text-gray-500 text-center">
            © 2025{' '}
            <a href="/" title="TrendingCustom">
              TrendingCustom™️
            </a>
            <a href="">Powered by Shopify</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
