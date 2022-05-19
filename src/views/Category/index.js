import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Phishing from "../../assets/phishing.svg";
import { useParams } from "react-router-dom";
import Check from "../../assets/check.svg";
import { IoArrowDownSharp } from "react-icons/io5";
let malware;
let phishing;
let defacement;
const Category = () => {
  const { category } = useParams();
  const [more, setMore] = useState(false);
  const [morePhish, setMorePhish] = useState(false);
  const [moreDeface, setMoreDeface] = useState(false);
  useEffect(() => {
    malware = document.getElementById("malware");
    phishing = document.getElementById("phishing");
    defacement = document.getElementById("defacement");
  }, [more, morePhish, moreDeface]);
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className={`w-screen bg-DeepBlue pb-32`}>
        <div className="flex flex-col md:flex-row jusitify-between  px-10 md:px-24 pt-8 py-2 mb-48">
          <div className="flex-1 mt-10 ">
            <h1 className=" text-4xl mb-10 md:mb-5 md:text-5xl lg:text-6xl text-white font-bold leading-normal ">
              The URL is
              {category == "benign" ? (
                <span className=" flex ml-4 mt-5">
                  <span className="text-blue-500">a Safe URL</span>
                  <img className="ml-4 w-12" src={Check} alt="" />
                </span>
              ) : category == "phishing" ? (
                <span className="text-red-600 ml-4">a Phishing URL</span>
              ) : category == "malware" ? (
                <span className="text-red-600 ml-4">
                  prone to Malware attack
                </span>
              ) : (
                <span className="text-red-600 ml-4">a Defaced URL</span>
              )}
            </h1>
            {category == "benign" ? (
              <div className="py-12  w-full md:w-2/3 mt-8 text-xl text-white">
                The website looks free of phishing,malware and defacement.
                <br />
                <br />
                You can go ahead surfing through this webite.
              </div>
            ) : category == "phishing" ? (
              <div>
                <div className="py-12  w-full md:w-2/3 mt-8 text-xl text-white">
                  The website is highly prone to Phishing attacks.
                  <br />
                  <br />
                  Visiting this website might lead to irreparable repurcussions.
                </div>
                <button
                  className="bg-transparent flex text-white items-center"
                  onClick={() => {
                    setMorePhish(true);
                    console.log("more Phish");
                    setTimeout(
                      () => phishing.scrollIntoView({ behavior: "smooth" }),
                      1000
                    );
                  }}
                >
                  Want to Know More
                  <IoArrowDownSharp className="ml-2" />
                </button>
              </div>
            ) : category == "malware" ? (
              <div>
                <div className="py-12 text-red-400 w-full md:w-2/3 mt-8 text-xl text-white">
                  The website is highly prone to Malware attacks.
                  <br />
                  <br />
                  Visiting this website might affect your device.
                </div>
                <button
                  className="bg-transparent flex text-white items-center"
                  onClick={() => {
                    setMore(true);
                    setTimeout(
                      () => malware.scrollIntoView({ behavior: "smooth" }),
                      1000
                    );
                  }}
                >
                  Want to Know More
                  <IoArrowDownSharp className="ml-2" />
                </button>
              </div>
            ) : (
              <div>
                <div className="py-12 text-red-400 w-full md:w-2/3 mt-8 text-xl text-white">
                  The website is highly prone to Defacement Attacks.
                  <br />
                  <br />
                  Visiting this website might lead to serious consequences.
                </div>
                <button
                  className="bg-transparent flex text-white items-center"
                  onClick={() => {
                    setMoreDeface(true);
                    setTimeout(
                      () => defacement.scrollIntoView({ behavior: "smooth" }),
                      1000
                    );
                  }}
                >
                  Want to Know More
                  <IoArrowDownSharp className="ml-2" />
                </button>
              </div>
            )}
          </div>
          <img
            className="w-2/3 md:w-1/3 mx-auto mt-8"
            src={Phishing}
            alt="phishing"
          />
        </div>
        {
          <div
            className={`text-white px-10 md:px-0 grid place-items-center mt-0 pt-12 ${
              !more && "hidden"
            }`}
            id="malware"
          >
            <h1 className="text-white text-3xl text-center">Malware</h1>
            <div className="text-left text-lg md:w-1/2 mt-8 md:text-2xl text-gray-600">
              Malware exploits vulnerabilities and installs malicious software
              onto your website, which gives hackers access to your business and
              the data.
              <br />
              Malicious URL is a link created with the purpose of promoting
              scams, attacks, and frauds. By clicking on an infected URL, you
              can download ransomware, virus, trojan, or any other type of
              malware that will compromise your machine or even your network.
            </div>
            <p className="text-left md:w-1/2 mt-8 text-lg md:text-2xl text-gray-400">
              Users can stay alert and be safe by following these preventive
              measures:
            </p>
            <ul className="text-left md:w-1/2 mt-8 text-lg md:text-2xl text-gray-600">
              <li>• Installing anti-virus and anti-spyware software.</li>
              <li>• Using secure authentication methods.</li>
              <li>
                • Using administrator accounts only when absolutely necessary.
              </li>
              <li>• Keeping software updated.</li>
              <li>• Controlled access to systems.</li>
              <li>• Implementing email security and spam protection.</li>
              <li>• Monitoring any suspicious activity.</li>
            </ul>
          </div>
        }
        {
          <div
            className={`text-white px-10 md:px-0 grid place-items-center mt-0 pt-12 ${
              !morePhish && "hidden"
            }`}
            id="phishing"
          >
            <h1 className="text-white text-3xl text-center">Phishing</h1>
            <div className="text-left text-lg md:w-1/2 mt-8 md:text-2xl text-gray-600">
              Phishing is a type of cyber-attack where an attacker sends a
              fraudulent message designed to trick a person into revealing
              sensitive information to the attacker or to deploy malicious
              software on the victim's infrastructure like ransomware.
              <br />
              The assailants generally mask themselves as someone they’re not
              and try to get the victims to share sensitive information or make
              a bank transfer.
            </div>
            <p className="text-left md:w-1/2 mt-8 text-lg md:text-2xl text-gray-400">
              Users can stay alert and be safe by following these preventive
              measures:
            </p>
            <ul className="text-left md:w-1/2 mt-8 text-lg md:text-2xl text-gray-600">
              <li> • Thinking Twice Before Clicking.</li>
              <li>
                • Verifying A Site’s Security and ensuring that the site’s URL
                begins with https.
              </li>
              <li>• Never Giving Out Personal Information.</li>
              <li>• Keeping The Browser Up to Date.</li>
              <li>• Checking Online Accounts Regularly.</li>
              <li>• Using Firewalls</li>
            </ul>
          </div>
        }
        {
          <div
            className={`text-white px-10 md:px-0 grid place-items-center mt-0 pt-12 ${
              !moreDeface && "hidden"
            }`}
            id="defacement"
          >
            <h1 className="text-white text-3xl text-center">Defacement</h1>
            <div className="text-left text-lg md:w-1/2 mt-8 md:text-2xl text-gray-600">
              Website defacement is an attack on a website that changes the
              visual appearance of a website. Defacers break into a web server
              and replace the hosted website with one of their own.
              <br />
              The targets are mainly religious, government and big corporate
              websites with many viewers.
            </div>
            <p className="text-left md:w-1/2 mt-8 text-lg md:text-2xl text-gray-400">
              Users can stay alert and be safe by following these preventive
              measures:
            </p>
            <ul className="text-left md:w-1/2 mt-8 text-lg md:text-2xl text-gray-600">
              <li> • Be careful with files uploaded to your website</li>
              <li>• Limit access within your organization</li>
              <li>• Using HTTPS</li>
              <li>• Secure login information</li>
              <li>• Backup regularly and automatically</li>
              <li>• Regular audits for vulnerabilities</li>
              <li>• Use CAPTCHA to protect against bots</li>
              <li>• Reduce the number of plugins</li>
              <li>• Keep all software updated</li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

export default Category;
