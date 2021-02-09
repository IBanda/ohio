interface Faq {
  question: string;
  answer?: string;
}
let faqs: Faq[] = [
  {
    question: 'How does the 14-day trial work? ',
  },
  {
    question: 'What happens after the trial ends?',
  },
  {
    question: 'What discounts are available?',
  },
  {
    question: 'How do I pay for your service?',
  },
  {
    question: 'How long are your subscriptions? Can I change plans?',
  },
  {
    question: 'How can I cancel my subscription?',
  },
];

faqs = faqs.map((faq) => ({
  ...faq,
  answer:
    'When our team provides design and digital marketing. Applied arts can include industrial design, graphic design, fashion design. The app provides design and digital marketing.',
}));

export default faqs;
