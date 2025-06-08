import FAQItem from "./FAQItem";
import Data from "./Data.js";
const FAQ = () => {
  return (
    <>
      <h1>frequently asked questions</h1>
      {Data.map((item, index) => (
        <FAQItem question={item.question} answer={item.answer} index={index} />
      ))}
    </>
  );
};
export default FAQ;
