import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-css-flag"
  })
  return (
    <div className="App">
      <div className="FLAG belgium"></div>
      <div className="FLAG spain"></div>
      <div className="FLAG czech">
        <div className="triangle"></div>
      </div>
      <div className="FLAG denmark"></div>
      <div className="FLAG cuba">
        <div className="triangle">
          <div className="star-wrap">
            <div className="star"></div>
          </div>
        </div>
      </div>
      <div className="FLAG china">
        <div className="star1">
          <div className="inner-star"></div>
        </div>
        <div className="star2">
          <div className="inner-star"></div>
        </div>
        <div className="star3">
          <div className="inner-star"></div>
        </div>
        <div className="star4">
          <div className="inner-star"></div>
        </div>
        <div className="star5">
          <div className="inner-star"></div>
        </div>
      </div>
      <div></div>
      <div className="FLAG greenland"></div>
      <div className="FLAG congo">
        <div className="star">
          <div className="inner-star"></div>
        </div>
      </div>
      <div className="FLAG qatar">
        <div className="triangle1"></div>
        <div className="triangle2"></div>
        <div className="triangle3"></div>
        <div className="triangle4"></div>
        <div className="triangle5"></div>
        <div className="triangle6"></div>
        <div className="triangle7"></div>
        <div className="triangle8"></div>
      </div>
      <div className="FLAG jamaica">
        <div className="triangleL"></div>
        <div className="triangleR"></div>
      </div>
      <div className="FLAG VC">
        <div className="caro1">
          <div className="caro"></div>
        </div>
        <div className="caro2">
          <div className="caro"></div>
        </div>
        <div className="caro3">
          <div className="caro"></div>
        </div>
      </div>
      <div className="FLAG scotland"></div>
      <div className="FLAG pakistan">
        <div className="star"></div>
      </div>
      <div className="FLAG christies"></div>
      <div className="FLAG korea">
        {/* <span>&#9783;<br></br>&#9776;</span> */}
        <span>&#9776; </span><span>&#9781;</span>
        {/* <span>&#9778;<br></br>&#9781;</span> */}
        <span>&#9783;</span><span>&#9778;</span>
        <div className="umyang"></div>
      </div>
      <div className="FLAG taiwan">
        <div className="sun">
          <div className="tr tr1"></div>
          <div className="tr tr2"></div>
          <div className="tr tr3"></div>
          <div className="tr tr4"></div>
          <div className="tr tr5"></div>
          <div className="tr tr6"></div>
          <div className="tr tr7"></div>
          <div className="tr tr8"></div>
          <div className="tr tr9"></div>
          <div className="tr tr10"></div>
          <div className="tr tr11"></div>
          <div className="tr tr12"></div>
          <div className="circle"></div>
        </div>
      </div>

      <div className="FLAG ab">
        <div className="triangle-bl"></div>
        <div className="triangle-br"></div>

        <div className="sun">
          <div className="tr tr1"></div>
          <div className="tr tr2"></div>
          <div className="tr tr3"></div>
          <div className="tr tr4"></div>
          <div className="tr tr5"></div>
          <div className="tr tr6"></div>
          <div className="tr tr7"></div>
          <div className="tr tr8"></div>
          <div className="tr tr9"></div>
          <div className="circle"></div>
        </div>
      </div>

      <div className="FLAG canada">
        <div className="maple">
          <div className="leaf1"></div>
          <div className="right">
            <div className="side-leaf"></div>
          </div>
          <div className="left">
            <div className="side-leaf"></div>
          </div>
        </div>
        <div className="stem"></div>
      </div>
      <div className="FLAG south-africa">
        <div className="corner"></div>
      </div>
      <div className="FLAG swiss"></div>

      <div className="FLAG india">
        <div className="inner-circle">
          <div className="diamond diamond1"></div>
          <div className="diamond diamond2"></div>
          <div className="diamond diamond3"></div>
          <div className="diamond diamond4"></div>
          <div className="diamond diamond5"></div>
          <div className="diamond diamond6"></div>
          <div className="diamond diamond7"></div>
          <div className="diamond diamond8"></div>
          <div className="diamond diamond9"></div>
          <div className="diamond diamond10"></div>
          <div className="diamond diamond11"></div>
          <div className="diamond diamond12"></div>
          <div className="diamond diamond13"></div>
          <div className="diamond diamond14"></div>
          <div className="diamond diamond15"></div>
          <div className="diamond diamond16"></div>

          <div className="dot dot1"></div>
          <div className="dot dot2"></div>
          <div className="dot dot3"></div>
          <div className="dot dot4"></div>
          <div className="dot dot5"></div>
          <div className="dot dot6"></div>
          <div className="dot dot7"></div>
          <div className="dot dot8"></div>
          <div className="dot dot9"></div>
          <div className="dot dot10"></div>
          <div className="dot dot11"></div>
          <div className="dot dot12"></div>
          <div className="dot dot13"></div>
          <div className="dot dot14"></div>
          <div className="dot dot15"></div>
          <div className="dot dot16"></div>
        </div>
      </div>
    </div>
  )
}

export default App;
