import React from "react";
import "./askedQuestions.css";
const AskedQuestions = () => {
  const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
      <div className="aq_box">
        <div className="aq_box_item" onClick={() => setOpen(!isOpen)}>
          <p>{title}</p>
        </div>
        <div className={`aq_box_item_content ${!isOpen ? "active" : ""}`}>
          <div className="aq_content">{children}</div>
        </div>
      </div>
    );
  };
  return (
    <div className="aq">
      <h1 className="aq_title">Frequently Asked Questions</h1>

      <div className="aq_box">
        <Accordion title="Why is the sky blue?">
          Sunlight reaches Earth's atmosphere and is scattered in all directions
          by all the gases and particles in the air. Blue light is scattered
          more than the other colors because it travels as shorter, smaller
          waves. This is why we see a blue sky most of the time.
        </Accordion>
        <Accordion title="What's It Like Inside Jupiter?">
          It's really hot inside Jupiter! No one knows exactly how hot, but
          scientists think it could be about 43,000°F (24,000°C) near Jupiter's
          center, or core.
        </Accordion>
        <Accordion title="What Is a Black Hole?">
          A black hole is an area of such immense gravity that nothing -- not
          even light -- can escape from it.
        </Accordion>
      </div>
    </div>
  );
};

export default AskedQuestions;
