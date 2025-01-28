import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
import Title from '../components/Title';


const Contact = () => {
  window.scrollTo(0, 0);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <div className="to-current text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={' US'} />
      </div>

      <div className="flex flex-col justify-center sm:flex-row gap-10 my-10 mb-28">
        <img
          src={assets.contact}
          alt=""
          className="w-full sm:max-w-[480px]"
        />

        <div className="flex flex-col justify-center items-start gap-4">
          <p className="font-semibold text-altext-gray-600">Our Store</p>
          <p className="text-gray-500">
            Punjab College of Technical Education
            <br />
            Ludhiana, Punjab
          </p>

          <p className="text-gray-800">
            Tel: <span className="text-gray-500">+91 93163 39000</span>
          </p>
          <p className=" text-gray-800">
            Email: <span className="text-gray-500">gearup@pcte.edu</span>
          </p>

        </div>
      </div>
      
    </div>
  );
};

export default Contact;
