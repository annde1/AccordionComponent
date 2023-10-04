import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}
function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((question, index) => (
        <AccordionItem
          key={index}
          num={index + 1}
          title={question.title}
          text={question.text}
        />
      ))}
    </div>
  );
}

const AccordionItem = ({ num, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => handleClick()}
    >
      <p className="number">{num}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen === false ? "-" : "x"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
};
