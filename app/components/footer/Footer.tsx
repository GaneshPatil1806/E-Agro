import { MdFacebook } from "react-icons/md";
import Container from "../Container";
import FooterList from "./FooterList";
import Link from "next/link";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return ( 
        <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
            <Container>
                <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                    <FooterList>
                        <h3 className="text-base  font-bold mb-2">Crops Categories</h3>
                        <Link href='#'>Wheat</Link>
                        <Link href='#'>Cotton</Link>
                        <Link href='#'>Rice</Link>
                    </FooterList>

                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Customer Service</h3>
                        <Link href='#'>Contact Us</Link>
                        <Link href='#'>Shipping Policy</Link>
                        {/* <Link href='#'>Returns & Exchanges</Link> */}
                        <Link href='#'>FAQs</Link>
                    </FooterList>

                    <FooterList>
                        <div className="w-full md:w-1/3 mb-6 md:mb-0 font-bold">About Us</div>
                        <p className="">At E-Agro, we connect farmers directly with buyers, providing a seamless platform for selling high-quality crops. Our mission is to empower farmers by giving them better market access and fair prices, fostering a sustainable agricultural community. &copy;{new Date().getFullYear()} E~Agro. All rights are reserved.</p>
                    </FooterList>

                    <FooterList>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0 font-bold">Follow Us</div>
                    <div className="flex gap-2">
                        <Link href='#'><MdFacebook size={24}/></Link>
                        <Link href='#'><AiFillTwitterCircle size={24}/></Link>
                        <Link href='#'><AiFillInstagram size={24}/></Link>
                        <Link href='#'><AiFillYoutube size={24}/></Link>
                    </div>
                    </FooterList>
                </div>
            </Container>
        </footer>
     );
}
 
export default Footer;