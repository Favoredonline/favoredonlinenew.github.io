import IMAGE from '../assets/lady.jpg';
const About = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div className="text-center">
        <p className="text-gray-100 font-bold text-3xl lg:text-4xl xl:text-5xl">About Favored Online</p>
   <p className="text-gray-100 col-span-4 mt-8">
  <strong>Favored Online Inc.</strong>, founded in July 2018 and originally registered as Favored Online Skills Acquisition Network in March 2020.
</p>
<p className="text-gray-100 col-span-4 mt-4">
  It serves as the parent holding company for two initiatives:<strong className="text-[#D2AE2F]">TechTalents City</strong> and <strong className="text-[#EB48D5]">She Model Tech.</strong>
</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-5 lg:gap-10 text-white my-12 lg:my-24 lg:mx-20 leading-7">
        <div>
          <p className="text-3xl text-[#D2AE2F] font-semibold mb-5">Our Mission</p>
          <p>Our mission is to continuously develop solutions and technologies that advance education, empowering innovators and professionals to learn, grow, and create transformative technologies for a better world.</p>
        </div>
        <div>
          <p className="text-3xl text-[#EB48D5] font-semibold mb-5">Our Vision</p>
          <p>Our vision is to develop educational technologies that empower innovators and professionals to unlock their full potential.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 lg:mx-20">
        <div className="md:w-1/2 lg:w-1/3 shrink-0">
          <img src={IMAGE} className="w-full h-auto max-h-[400px] md:max-h-[500px] object-cover object-center rounded-2xl" />
        </div>
        <div className=" text-white flex flex-col justify-center leading-7 md:leading-10">
          <h2 className="text-3xl font-bold mb-5">Meet Our Founder</h2>
        <p className="mb-4">
  Hello, I'm <a href="https://www.linkedin.com/in/opeyemi-adeniran/" target="_blank" rel="noopener noreferrer" className="font-semibold underline">Opeyemi T. Adeniran</a>, an AI Research Engineer and the founder of:<br/> <strong className="text-[#D2AE2F]">TechTalents City</strong>, <strong className="text-[#EB48D5]">She Model Tech</strong>, and <a href="https://www.morgantechfest.com/" target="_blank" rel="noopener noreferrer" className="font-semibold underline">Morgan TechFest</a>.
</p>
        </div>
      </div>
    </div>
  );
}

export default About;
