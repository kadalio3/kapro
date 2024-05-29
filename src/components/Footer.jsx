import React from "react";
import { FaFacebook, FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white pt-8 pb-16 lg:pt-8 lg:pb-24">
      <div className="mx-auto max-w-[1280px] px-24 sm2:px-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom Pertama */}
          <div>
            <h2 className="text-xl font-bold">Novel App</h2>
          </div>
          {/* Kolom Kedua */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold">About Us</h3>
              <h3 className="text-lg font-semibold">Contact Us</h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Anouncement</h3>
              <h3 className="text-lg font-semibold">Sitemap</h3>
            </div>
          </div>
          {/* Kolom Ketiga */}
          <div className="flex space-x-0 gap-2 lg:ml-auto">
            <a href="https://www.facebook.com" aria-label="Facebook">
              <FaFacebook size="24" />
            </a>
            <a href="https://www.twitter.com" aria-label="Twitter">
              <FaTwitter size="24" />
            </a>
            <a href="https://www.discord.com" aria-label="Discord">
              <FaDiscord size="24" />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <FaInstagram size="24" />
            </a>
          </div>
        </div>
        {/* Bagian Bawah */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-4">
          <div className="text-center md:text-left">
            <p>© NovelApp 2024</p>
          </div>
          <div className="flex space-x-4 text-center md:text-left justify-between">
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <span class="inline-block mx-2">·</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span class="inline-block mx-2">·</span>
            <a href="#" className="hover:underline">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
