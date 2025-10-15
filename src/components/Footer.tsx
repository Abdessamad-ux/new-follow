const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
              Social Followers
            </h3>
            <p className="text-muted-foreground">
              Premium Instagram & TikTok growth services trusted by thousands of creators worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">We Accept</h4>
            <div className="flex flex-wrap gap-4">
              {/* PayPal */}
              <div className="w-16 h-10 bg-secondary rounded flex items-center justify-center">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 3.993-.028.14a.793.793 0 0 1-.782.66H8.096a.5.5 0 0 1-.493-.577l.166-1.054.537-3.407.021-.138a.795.795 0 0 1 .783-.667h.49c2.713 0 4.841-1.103 5.463-4.284.233-1.19.11-2.185-.44-2.886-.16-.205-.35-.39-.567-.553a4.39 4.39 0 0 0-.514-.308z" />
                  <path d="M9.182 4.96a.795.795 0 0 1 .783-.667h4.86c.577 0 1.116.067 1.607.204 1.556.434 2.638 1.582 2.913 3.324.102.648.068 1.282-.06 1.881-.011.054-.024.107-.037.16-.354 1.644-1.252 2.875-2.6 3.572-.44.227-.926.405-1.444.534.182-.52.3-1.082.346-1.684.05-.645-.01-1.248-.185-1.803-.514-1.63-1.87-2.67-3.788-2.908a9.04 9.04 0 0 0-.962-.063h-4.83a.795.795 0 0 0-.783.667l-1.616 10.26a.5.5 0 0 0 .493.577h2.791l.702-4.456z" />
                </svg>
              </div>
              {/* Visa */}
              <div className="w-16 h-10 bg-secondary rounded flex items-center justify-center font-bold text-primary text-sm">
                VISA
              </div>
              {/* Mastercard */}
              <div className="w-16 h-10 bg-secondary rounded flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-4 h-4 bg-red-500 rounded-full opacity-75"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full opacity-75 -ml-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Social Followers – All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
