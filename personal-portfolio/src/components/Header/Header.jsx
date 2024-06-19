import List from "../List/List";
import "./Header.css"
import kapalkaLogo from '/Users/zkapalka/Desktop/Portfolio/personal-portfolio/src/assets/kapalkaLogo.png';

const Header = () => {
  const listObjects = [
    {href: "#", name: "Home"},
    {href: "#about", name: "About"},
    {href: "#projects", name: "Projects"},
    {href: "#mentor", name: "Mentor"},
    {href: "#skill", name: "Skills"},
    {href: "#contact", name: "Contact"},
  ]
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#"><img src={kapalkaLogo}></img></a>
        </div>
        <ul>
          {
            listObjects.map((list, index) => <List key={index} name={list.name} href={list.href}/>
            )
          }
        
        </ul>
      </nav>
    </header>
  );
};

export default Header;
