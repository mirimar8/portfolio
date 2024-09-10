import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="pt-10 pb-10 text-white text-center bg-[#18191E] w-full">
      <ul className="flex flex-row justify-center">
        <li className="px-3 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110">
          <a href="https://www.linkedin.com/in/miri-markovitz/" target="blank">
          <Image className="rounded" src="/images/linkedin-icon.png" alt="LinkedIn" width={40} height={40} />
          </a>
        </li>
        <li className="px-3 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110">
          <a href="https://github.com/mirimar8">
          <Image className="rounded" src="/images/github-icon-footer.png" alt="Github" width={40} height={40} />
          </a>
        </li>
        <li className="px-3 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110">
          <a href="mailto:mirimarkovitzbl@gmail.com">
          <Image className="rounded" src="/images/email-icon.png" alt="Email" width={40} height={40} />
          </a>
        </li>
      </ul>
      <p className="text-sm pt-6">&copy; 2024 Miri Markovitz. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
