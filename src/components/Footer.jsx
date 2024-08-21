
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full text-center py-2 bg-[#1a1a1a] text-white text-sm">
      &copy; {currentYear} All rights reserved
    </footer>
  );
};

export default Footer;
