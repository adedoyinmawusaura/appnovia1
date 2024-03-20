import Image from "next/image";
import Link from 'next/link';
import './style.css';
import img from '../images/main-home-rev-5.jpg.jpg'
import logo from '../images/corsen-main-logo-x2.png.png'
// import '../styles/globals.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (

    <main className="header" style={{height:'700px',}}>
      <div className="container" style={{paddingTop:'20px', borderBottom:'1px solid #000', paddingInline:'20px'}}>
        <nav  style={{display:'flex', justifyContent:'space-between', marginInline:'0px'}}>
          <div style={{display:'flex', justifyContent:'space-between', marginInline:'0px'}}>
              <Image src={logo} alt='logo' style={{width:'auto', height:'20px'}}/>
              <ul
              style={{display: "flex", listStyle: "none",  gap: "30px"}}>
              <li>
                <Link style={{textDecoration: "none", color:'#000'}} href="/">HOME</Link>
              </li>
              <li>
                <Link style={{textDecoration: "none", color:'#000'}} href="/about">PAGES</Link>
              </li>
              <li>
                <Link style={{textDecoration: "none", color:'#000'}} href="/contact">SHOP</Link>
              </li>
              <li>
                <Link style={{textDecoration: "none", color:'#000'}} href="/">PORFOLIO</Link>
              </li>
              <li>
                <Link style={{textDecoration: "none", color:'#000'}} href="/">BLOG</Link>
              </li>
            </ul>
          </div>
          
          <div>
              <ul
              style={{display:'flex',gap:'20px' }}>
              <li>
                <Link style={{textDecoration: "none", color:'#000'}}  href="/">SEARCH</Link>
              </li>
              <i className="bi bi-search"></i>
              <li>
                <Link style={{textDecoration: "none", color:'#000'}} href="/about">CART</Link>
              </li>
              <i className="bi bi-cart"></i>
            </ul>
          </div>

        </nav>

        {/*  */}
        <div className="down-header container " style={{position: 'absolute', top: '400px', width: '100%'}}>
            <div className="mixed">
                <h1 className="mixed-text mb-2" style={{fontSize: '46px',}}> Mixed Textiles</h1>
                <p className="mixed-lorem mb-3" style={{fontSize: '14px',}}> Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit. Enim, explicabo.</p>
                <div className="shop-collection " style={{paddingBlock: '10px', width: '200px', justifyContent: 'center', 
                textAlign: 'center', border: '1px solid #000',}}>
                    <span style={{fontWeight: '500', fontSize:'14px'}}> SHOP COLLECTION</span> 
                </div>
            </div>
            <div style={{borderBottom: '1px solid #000', marginTop: '50px',}}></div>
        </div>

      </div>
    </main>
  );
}
