import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-slate-100 flex flex-col">
            <div className="mb-12"/>
            <footer className="border-t-8 border-gray-300 py-4 text-black">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-center font-bold">
                        <p>&copy; Grazie 1322</p>
                        <p>09260483178</p>
                        <p>grazie1322onlinestore@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://www.facebook.com/GrazieOnlineStore/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook className="text-xl" />
                        </a>
                        <a
                            href="https://www.instagram.com/grazie.merchandise/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="text-xl" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
