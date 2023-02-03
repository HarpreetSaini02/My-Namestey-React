import { useState } from "react";
const Section = ({ tittle, description,isVisible, setIsVisible}) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="section">
      <h3 className="tittle"> {tittle}</h3>
      {isVisible ? (
        <button onClick={() => setIsVisible(false)}>Hide</button>
      ) : (
        <button onClick={() => setIsVisible(true)}>Show</button>
      )}
      {isVisible && <p> {description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <h1> InstaMart </h1>
      <Section
        tittle={"AboutInstaMart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like"
        }
        isVisible = {visibleSection === "about"}
        setIsVisible= {()=>setVisibleSection(visibleSection === "about"? "" : "about")}
      />
      <Section
        tittle={"TeamInstaMart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like"
        }
        isVisible = {visibleSection === "team"}
        setIsVisible= {()=>setVisibleSection(visibleSection === "team"? "" : "team")}
      />
      <Section
        tittle={"CareerInstaMart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like"
        }
        isVisible = {visibleSection === "career"}
        setIsVisible={() => setVisibleSection(visibleSection === "career" ? "" : "career")}
      />
    </div>
  );
};

export default Instamart;
