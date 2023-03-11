import React from 'react';
import {FaBars, FaTimes} from "react-icons/fa";

function Navbar() {
    return (
      <header>
        <h3>Logo</h3>
        <nav>
          <a href="/#">She Secure</a>
          <a href="/#">Зөвлөгөө </a>
          <a href="/#">Сэтгэгдэл</a>
          <a href="/#">Хар жагсаалт</a>
          <button>
            <FaTimes />
          </button>
        </nav>
        <button>
          <FaBars />
        </button>
      </header>
    ); 
    } 
export default Navbar;