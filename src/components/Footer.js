import { useState } from "react";
import { FAQ } from "../../Constants";

const Section = ({ title, description ,isVisible,setIsVisible}) => {
 // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="footer">
      <h1> {title} </h1>
      {isVisible ? (
        <button className="btn" onClick={() => setIsVisible(false)}>-</button>
      ) : (
        <button className="btn" onClick={() => setIsVisible(true)}>+</button>
      )}
     { isVisible && <p>{description}</p>}
    </div>
  );
};
const Footer = () => {
    const [visibleSection, setVisibleSection] = useState("");
  return (
    <div className="footer-sections">
      <h1 className="footer-tittle"> FAQ'S </h1>
      {/* {FAQ.map((question)
      =>{ return()})} */}
      {FAQ.map((question)=>{
        return(
            <Section key={question.id} id={question.id} title={question.title} description={question.description}
          isVisible={visibleSection === question.id }
          setIsVisible={(display) => {
            if(display) {
              setVisibleSection(question.id);
            } else {
              setVisibleSection(" ");
            }
          }
          } />
        )
      
      }
      )
      }
      
    </div>
  );
};

export default Footer;
