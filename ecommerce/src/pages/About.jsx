import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
import Title from '../components/Title';


const About = () => {
  window.scrollTo(0, 0);
  return (
    
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={' US'} />
      </div>

      <div className="flex flex-col md:flex-row gap-16 my-10">
        <img
          src={assets.about}
          alt=""
          className="w-full md:max-w-[450px] "
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
          GearUp@PCTE is your one-stop shop for all your stationery needs right here at PCTE. We offer a wide range of high-quality products to help you excel in your academics and beyond.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            {' '}
            To provide students with easy access to a diverse selection of stationery essentials at competitive prices, ensuring they are well-equipped for their academic journey.
          </p>
          <b className="text-gray-800">What We Offer</b>
          <p>
          Notebooks & Journals: A variety of sizes and styles to suit your preferences.
Pens & Pencils: From classic ballpoints to vibrant gel pens and mechanical pencils.
Markers & Highlighters: To bring color and organization to your notes.
Stationery Supplies: Rulers, erasers, sharpeners, sticky notes, and more.
Art Supplies: Sketchbooks, crayons, colored pencils, and other creative tools.
          </p>
          
        </div>
      </div>

      <div className="py-4 text-2xl">
        <Title text1={'WHY'} text2={' CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row mb-20 text-sm gap-4">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We take pride in offering only the highest quality products that
            meet our stringent standards for durability, performance, and value.{' '}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Our user-friendly website make it easy to browse,
            compare, and purchase products on the go.{' '}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Services</b>
          <p className="text-gray-600">
            Our dedicated team of customer service representatives is available
            around the clock to assist you with any queries or concerns you may
            have.{' '}
          </p>
        </div>
      </div>


    </div>
  );
};

export default About;
