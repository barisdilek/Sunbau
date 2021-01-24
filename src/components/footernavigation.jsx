import { Link } from "react-router-dom"; //, animateScroll as scroll

function Footernavigation ()
{
  return (
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-md-offset-12 footerMenu">
              <Link href="#impressum" className="page-scroll"   to="/impressum#impressum" duration={1000}>
                Impressum
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-md-offset-12 footerMenu">
              <Link href="#datenSchutz" className="page-scroll"   to="/datenSchutz#datenSchutz" duration={1000}>
                  DatenSchutz
              </Link>
            </div>
          </div> 
        </div>
      
          <div className="container ">
            <div className="row text-center">
              <div className="col-md-12 col-md-offset-0">
                <p>
                  &copy; 2021 Copyright. All rights reserved | Designed by <a href="https://www.facebook.com/sanatolyebodrum/">@sanatolyebodrum</a>
                </p>
              </div>
            </div>
          </div>
        </div>
  );
}


export default Footernavigation;