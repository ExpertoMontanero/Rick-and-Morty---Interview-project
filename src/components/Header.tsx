import "../styles/header.css";

function Header() {
  return (
    <header>
      <p className="header-label">LOREM IPSUM</p>
      <svg
        width="100%"
        height="190"
        viewBox="0 0 1920 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M1920 0H0V200H1920V0Z" fill="white" />
        <path d="M1920 0H0V95H1920V0Z" fill="#DAED49" />
        <path d="M1920 0H981V95H1920V0Z" fill="#00BDD4" />
        <path d="M981 0H1039.1L980 95V0Z" fill="#DAED49" />
      </svg>
    </header>
  );
}

export default Header;
