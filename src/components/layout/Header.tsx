import { useLocation } from "@reach/router";
import React from "react";

const linkList: {
  [key: string]: string;
} = {
  Home: "/",
  About: "/about",
  Blog: "/blog",
  Projects: "/projects",
};

const HeaderLink: React.FC<{
  to: string;
  active: boolean;
  children: React.ReactNode;
}> = ({ to, active, children }) => {
  return (
    <li className="headerLink">
      <a
        href={to}
        className={active ? "activeHeaderLink" : ""}
        style={{ color: "inherit" }}
      >
        {children}
      </a>
    </li>
  );
};

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="header">
      {/* {console.log("Current Path:", currentPath)} */}
      <nav>
        <ul style={{}}>
          {Object.keys(linkList).map((key) => (
            <HeaderLink
              key={key}
              active={
                key != "Home"
                  ? currentPath.includes(linkList[key])
                  : currentPath === linkList[key]
              }
              to={linkList[key]}
            >
              {key.toLocaleLowerCase()}
            </HeaderLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
