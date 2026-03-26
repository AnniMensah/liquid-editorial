const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: ['About', 'Careers', 'Contact']
    },
    {
      title: 'Legal',
      links: ['Terms', 'Privacy']
    },
    {
      title: 'Follow Us',
      links: ['Instagram', 'LinkedIn']
    }
  ];

  return (
    <footer className="bg-zinc-950 pt-24 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-screen-2xl mx-auto">
        <div className="md:col-span-1">
          <div className="text-2xl font-black text-white mb-6">
            The Liquid Editorial
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed">
            © 2024 The Liquid Editorial. High-end mixology redefined.
          </p>
        </div>
        {footerSections.map((section) => (
          <FooterSection key={section.title} {...section} />
        ))}
      </div>
    </footer>
  );
};

const FooterSection = ({ title, links }) => (
  <div>
    <h5 className="text-[0.75rem] tracking-widest uppercase font-bold text-white mb-6">
      {title}
    </h5>
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="text-zinc-500 hover:text-orange-400 transition-colors text-sm">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;