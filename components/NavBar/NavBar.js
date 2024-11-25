import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import styles from "../../styles/Navbar.module.css";
import TextNav from "../Texts/TextNav";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { Container, IconButton, InputAdornment, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Navbar = () => {
  const router = useRouter();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isArrowUp, setIsArrowUp] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(80);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsWideScreen(window.innerWidth > 990);
    }

    const handleResize = () => {
      setIsWideScreen(
        typeof window !== "undefined" && window.innerWidth > 1080
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarHeight(60);
      } else {
        setNavbarHeight(80);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const closeMenu = () => {
    setClick(false);
    setIsDropdownOpen(false);
    setIsArrowUp(false);
  };

  const closeHomeMenu = () => {
    setClick(false);
    setIsDropdownOpen(false);
    setIsArrowUp(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsArrowUp(!isArrowUp);
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const handleCloseClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  useEffect(() => {
    const handleEscKeyPress = (event) => {
      if (event.key === 'Escape') {
        handleCloseClick();
      }
    };
    if (isSearchOpen) {
      document.addEventListener('keydown', handleEscKeyPress);
    }
    return () => {
      document.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [isSearchOpen, handleCloseClick]);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Redirect to the search page with the search term
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('')
    }

    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <div className={styles.header} style={{ height: `${navbarHeight}px`, transition: "height 0.3s ease", }}>
      <Container maxWidth='xl' sx={{ display: 'flex', justifyContent:'space-between', alignItems: 'center' }}>
        <Link href="/">
          <Image
            className={styles.logo}
            src={require("../../assets/newlogoNavBar.png")}
            alt=""
          />
        </Link>

        <ul
          className={
            click
              ? styles["nav-menu"] + " " + styles.active
              : styles["nav-menu"]
          }
        >
          <li className={router.pathname === "/" ? styles.menu : ""}>
            <Link href="/" onClick={closeHomeMenu}>
              <TextNav label="HOME" isActive={router.pathname === "/"} />
            </Link>
          </li>
          <div className={styles.dropdown}>
            <li
              style={{ display: "flex",alignItems:'center' }}
              className={styles.dropbtn}
              onClick={toggleDropdown}
            >
              <Link href="/product" style={{display: "flex"}}>
              <TextNav label="PRODUCTS" />
              <ArrowDropDownIcon style={{ marginLeft: '2px',fill:'black' }} />
              </Link>
            </li>
            {isWideScreen && (
              <div className={styles["dropdown-content"]}>
                <Link href="/product" onClick={closeMenu}>
                  ALL PRODUCTS
                </Link>
                <Link href={{ pathname: '/product', query: { title: 'QLED Mini'} }} onClick={closeMenu}>
                  QLED MINI
                </Link>
                <Link href={{ pathname: '/product', query: { title: 'QLED'} }} onClick={closeMenu}>
                  QLED
                </Link>
                <Link href={{ pathname: '/product', query: { title: 'UHD'} }} onClick={closeMenu}>
                  UHD
                </Link>
                <Link href={{ pathname: '/product', query: { title: 'FHD/HD'} }}  onClick={closeMenu}>
                  FHD/HD
                </Link>
              </div>
            )}
            {!isWideScreen && isDropdownOpen && (
              <ul style={{ paddingLeft: "10px" }}>
                <li
                  className={
                    router.pathname === "/product"
                      ? styles.menu
                      : styles.drop
                  }
                >
                  <Link href="/product" onClick={closeMenu}>
                    <TextNav label="ALL PRODUCTS" />
                  </Link>
                </li>
                <li
                  className={
                    router.pathname === "/product?title=QLED Mini" ? styles.menu : styles.drop
                  }
                >
                  <Link href={{ pathname: '/product', query: { title: 'QLED Mini'} }} onClick={closeMenu}>
                    <TextNav label="QLED MINI" />
                  </Link>
                </li>
                <li
                  className={
                    router.pathname === "/product?title=QLED"
                      ? styles.menu
                      : styles.drop
                  }
                >
                  <Link href={{ pathname: '/product', query: { title: 'QLED'} }} onClick={closeMenu}>
                    <TextNav label="QLED" />
                  </Link>
                </li>
                <li
                  className={
                    router.pathname === "/product?title=UHD" ? styles.menu : styles.drop
                  }
                >
                  <Link href={{ pathname: '/product', query: { title: 'UHD'} }} onClick={closeMenu}>
                    <TextNav label="UHD" />
                  </Link>
                </li>
                <li
                  className={
                    router.pathname === "/product?title=FHD/HD" ? styles.menu : styles.drop
                  }
                >
                  <Link href={{ pathname: '/product', query: { title: 'FHD/HD'} }} onClick={closeMenu}>
                    <TextNav label="FHD/HD" />
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {/* <li className={router.pathname === "/whereToBuy" ? styles.menu : ""}>
            <Link href="/whereToBuy" onClick={closeMenu}>
              <TextNav
                label="WHERE TO BUY"
                isActive={router.pathname === "/whereToBuy"}
              />
            </Link>
          </li> */}
          <li className={router.pathname === "/aboutUs" ? styles.menu : ""}>
            <Link href="/aboutUs" onClick={closeMenu}>
              <TextNav
                label="ABOUT US"
                isActive={router.pathname === "/aboutUs"}
              />
            </Link>
          </li>
          <li className={router.pathname === "/media" ? styles.menu : ""}>
            <Link href="/media" onClick={closeMenu}>
              <TextNav
                label="MEDIA"
                isActive={router.pathname === "/media"}
              />
            </Link>
          </li>
          <li className={router.pathname === "/WarrentyPolicy" ? styles.menu : ""}>
            <Link href="/WarrentyPolicy" onClick={closeMenu}>
              <TextNav
                label="WARRANTY"
                isActive={router.pathname === "/WarrentyPolicy"}
              />
            </Link>
          </li>

          <li className={router.pathname === "/faq" ? styles.menu : ""}>
            <Link href="/faq" onClick={closeMenu}>
              <TextNav label="FAQ" isActive={router.pathname === "/faq"} />
            </Link>
          </li>
          <li className={router.pathname === "/award" ? styles.menu : ""}>
            <Link href="/award" onClick={closeMenu}>
              <TextNav
                label="AWARDS"
                isActive={router.pathname === "/award"}
              />
            </Link>
          </li>
          <li className={router.pathname === "/news-events" ? styles.menu : ""}>
            <Link href="/news-events" onClick={closeMenu}>
              <TextNav
                label="NEWS & EVENT"
                isActive={router.pathname === "/news-events"}
              />
            </Link>
          </li>
          <li className={router.pathname === "/contactUs" ? styles.menu : ""}>
            <Link href="/contactUs" onClick={closeMenu}>
              <TextNav
                label="CONTACT US"
                isActive={router.pathname === "/contactUs"}
              />
            </Link>
          </li>
          <li className={styles.searchIcon}>
            <FaSearch fontSize={16} onClick={toggleSearch} />
          </li>
        </ul>

        <div className={styles.hamburger} >
          {click ? (
            <>
              <FaSearch fontSize={16} style={{ marginRight: 12, marginTop: 2 }} onClick={toggleSearch} />
              <FaTimes size={20} style={{ color: "black" }} onClick={handleClick} />
            </>
          ) : (
            <>
              <FaBars onClick={handleClick}
                size={25}
                style={{
                  color: "black",
                  position: "absolute",
                  right: 0,
                  marginRight: 25,
                  top: navbarHeight==80?24:20,
                  transition: "height 0.3s ease",
                }}
              />
              <FaSearch
                size={24}
                style={{
                  color: "black",
                  position: "absolute",
                  right: 70,
                  marginRight: 0,
                  top: navbarHeight==80?24:20,
                }} onClick={toggleSearch} /> </>
          )}
        </div>
        {isSearchOpen && <div className={styles.blurBackground} />}
        {isSearchOpen && (
          <div className={styles.searchContainer}>
            <form onSubmit={handleSearchSubmit}>
              <TextField
                id="standard-basic"
                label="Search Products"
                variant="standard"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit(e)} // Handle Enter key
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={handleCloseClick}
                        aria-label="close"
                        sx={{ backgroundColor: '#9c9a9a20', height: 35, width: 35, marginRight: '2px', marginBottom: '15px' }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  alignSelf: 'center',
                  width: '70%',
                  borderRadius: '8px',
                  fontSize: '16px',
                  '& .MuiInput-underline:before': {
                    borderBottom: '2px solid #ccc',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottom: '2px solid #000',
                  },
                  '& .MuiInput-underline:hover:before': {
                    borderBottom: '2px solid #000',
                  },
                }}
              />
              <p className={styles.searchBottomText}>Hit enter to search or ESC to close</p>
            </form>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
