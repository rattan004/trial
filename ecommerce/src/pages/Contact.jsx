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
      <div>
        <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Frequently Asked Questions</p>
        </div>
        <p className='text-semibold mt-3'>
        Q: How do I place an order?
        </p>
        <p className='text-gray-600 mt-3'>A: Browse our products, add desired items to your cart, proceed to checkout, enter your payment details, and confirm your order.</p>
        <div className='border'></div>
        <p className='text-semibold mt-3'>
        Q: What payment methods do you accept?
        </p>
        <p className='text-gray-600 mt-3'>A: Currently we only accept Stripe and Cash, more options will be added with time.</p>
        <div className='border'></div>
        <p className='text-semibold mt-3'>
        Q: What types of stationery products do you offer?
        </p>
        <p className='text-gray-600 mt-3'>A: We offer a wide range of stationery products, including writing supplies, notebooks, practicals, assignment sheets, stick files and vrious other products.</p>
        <div className='border'></div>
        <p className='text-semibold mt-3'>
        Q: What is your return policy?
        </p>
        <p className='text-gray-600 mt-3'>We accept returns within 7 days of delivery for unused and unopened products in their original packaging.</p>
        <div className='border'></div>
        <p className='text-semibold mt-3'>
        Q: Are the product images accurate?
        </p>
        <p className='text-gray-600 mt-3'>A: We strive to provide accurate product images, but slight variations in color or appearance may occur due to photography and monitor settings.</p>
        <div className='border'></div>
      </div>
      
    </div>
  );
};

export default Contact;
