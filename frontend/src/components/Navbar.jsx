import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigationItems, ctaButton } from '../constants/navigation';
import { colors } from '../constants/theme';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState(null);
  const [openMegaMenu, setOpenMegaMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled || !isHome ? colors.deepNavy : 'transparent',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div
              className="text-2xl font-bold"
              style={{ color: colors.accentPrimary }}
            >
              AI<span style={{ color: colors.textPrimary }}>Automate</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.type === 'mega-menu' && setOpenMegaMenu(item.label)
                }
                onMouseLeave={() => setOpenMegaMenu(null)}
              >
                {item.type === 'mega-menu' ? (
                  <>
                    <button
                      className="flex items-center space-x-1 text-base font-medium transition-colors duration-200"
                      style={{
                        color:
                          location.pathname.startsWith(item.path)
                            ? colors.accentPrimary
                            : colors.textSecondary,
                      }}
                      // Toggle on click so dropdown is accessible by mouse click
                      onClick={() =>
                        setOpenMegaMenu(openMegaMenu === item.label ? null : item.label)
                      }
                      // Keyboard accessibility: Enter/Space toggles, Escape closes
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setOpenMegaMenu(openMegaMenu === item.label ? null : item.label);
                        } else if (e.key === 'Escape') {
                          setOpenMegaMenu(null);
                        }
                      }}
                      aria-expanded={openMegaMenu === item.label}
                      aria-controls={`mega-${item.label.replace(/\s+/g, '-')}`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={16} />
                    </button>
                    {/* Mega Menu Dropdown */}
                    {openMegaMenu === item.label && (
                      <div
                        id={`mega-${item.label.replace(/\s+/g, '-')}`}
                        role="menu"
                        className="absolute top-full left-0 mt-1 w-[600px] rounded-2xl shadow-2xl p-6"
                        style={{
                          background: colors.bgSecondary,
                          border: `1px solid ${colors.borderSubtle}`,
                        }}
                        onMouseEnter={() => setOpenMegaMenu(item.label)}
                        onMouseLeave={() => setOpenMegaMenu(null)}
                      >
                        <div className="grid grid-cols-2 gap-6">
                          {item.subItems.map((category) => (
                            <div key={category.category}>
                              <h3
                                className="text-sm font-semibold mb-3"
                                style={{ color: colors.accentPrimary }}
                              >
                                {category.category}
                              </h3>
                              <div className="space-y-2">
                                {category.items.map((subItem) => (
                                  <Link
                                    key={subItem.path}
                                    to={subItem.path}
                                    className="block p-3 rounded-lg transition-all duration-200 hover:translate-x-1"
                                    style={{
                                      color: colors.textSecondary,
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.background = colors.bgTertiary;
                                      e.currentTarget.style.color = colors.textPrimary;
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.background = 'transparent';
                                      e.currentTarget.style.color = colors.textSecondary;
                                    }}
                                  >
                                    <div className="font-medium text-sm">
                                      {subItem.label}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="text-base font-medium transition-colors duration-200"
                    style={{
                      color:
                        location.pathname === item.path
                          ? colors.accentPrimary
                          : colors.textSecondary,
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to={ctaButton.path}>
              <Button variant="primary" size="md">
                {ctaButton.label}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: colors.textPrimary }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden"
          style={{ background: colors.deepNavy, borderTop: `1px solid ${colors.borderSubtle}` }}
        >
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.label}>
                {item.type === 'mega-menu' ? (
                  <div>
                    <button
                      className="w-full flex items-center justify-between py-3 text-base font-medium"
                      style={{ color: colors.textPrimary }}
                      onClick={() =>
                        setMobileOpenSubmenu(
                          mobileOpenSubmenu === item.label ? null : item.label
                        )
                      }
                      aria-expanded={mobileOpenSubmenu === item.label}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={16} />
                    </button>

                    {mobileOpenSubmenu === item.label && (
                      <div className="pl-4 space-y-3">
                        {item.subItems.map((category) => (
                          <div key={category.category}>
                            <div
                              className="text-sm font-semibold mt-2"
                              style={{ color: colors.accentPrimary }}
                            >
                              {category.category}
                            </div>
                            <div className="mt-1 space-y-1">
                              {category.items.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  className="block py-2 text-sm"
                                  style={{ color: colors.textPrimary }}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileOpenSubmenu(null);
                                  }}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block py-3 text-base font-medium"
                    style={{ color: colors.textPrimary }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link to={ctaButton.path} onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="primary" size="md" className="w-full">
                {ctaButton.label}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;