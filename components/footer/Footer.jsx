import "./footer.css";
import { footerLinks } from "/constant/data.js";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={`footer my-[20px]`}>
      <div className="container flex  gap-4 justify-between flex-wrap border-solid border-b-2 py-4 border-gray-100">
        {footerLinks.map((link, index) => {
          return (
            <div key={index}>
              <span className="font-bold mb-3 block"> {link.name}</span>
              <div className="flex gap-2 flex-col items-start">
                {link.footlinks.map((footlink, index) => {
                  return (
                    <span
                      key={index}
                      className="text-gray-600 hover:text-gray-950 cursor-pointer"
                    >
                      {footlink}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="flex flex-col gap-3 mail">
          <span className="font-bold mb-3 block">NewStteler</span>
          <div>
            <input type="text" placeholder="Email Adress" required />
            <Image src="/right-arrow.png" alt="arro" width={20} height={20} />
          </div>
          <Image src="/stars.png" width={100} height={20} alt="jod" />
          <p>subscribe is Free </p>
        </div>
      </div>
      <div className="container copy flex items-center gap-3 py-8 xl:justify-between justify-center xl:flex-row flex-col">
        <span className="text-gray-600 hover:text-gray-950 cursor-pointer">
          © 2024 Next Js Project "
          <span className="font-bold text-[#fd6934]">Walid Hamdy</span> 🤍"
        </span>
        <div className="social flex items-center gap-4">
          <Image
            src="/facebook.png"
            alt="facebock-icon"
            width={30}
            height={30}
          />
          <Image
            src="/instagram.png"
            alt="facebock-icon"
            width={30}
            height={30}
          />
          <Image
            src="/linkedin.png"
            alt="facebock-icon"
            width={30}
            height={30}
          />
          <Image
            src="/youtube.png"
            alt="facebock-icon"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
