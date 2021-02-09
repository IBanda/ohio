import Accordion, { Tab, TabContent } from './Accordion';
import faqs from '../data/faqs';

export default function FAQ() {
  return (
    <section className="container my-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border-t  border-gray-400">
          <Accordion>
            {faqs.slice(0, 3).map((faq, index) => (
              <Tab key={faq.question} title={faq.question} index={index}>
                <TabContent>{faq.answer}</TabContent>
              </Tab>
            ))}
          </Accordion>
        </div>
        <div className="border-t border-gray-400">
          <Accordion>
            {faqs.slice(3).map((faq, index) => (
              <Tab key={faq.question} title={faq.question} index={index}>
                <TabContent>{faq.answer}</TabContent>
              </Tab>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
