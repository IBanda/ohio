import { useReducer } from 'react';
import instructions from '../data/instuctions';
import SkillMeasure from './SkillMeasure';
import { compiler } from 'markdown-to-jsx';
type Tab = {
  key: string;
  label: string;
};
const tabs: Tab[] = [
  {
    key: 'one',
    label: 'How to Get Started',
  },
  {
    key: 'two',
    label: 'Organise a Workflow',
  },
];

export default function Tabs() {
  const [tab, setTab] = useReducer(TabsReducer, instructions['one']);
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-6 gap-12  ">
      <div className="xl:flex xl:col-span-3 ">
        <div className="col-span-1  flex justify-center mr-8">
          <ul className="w-64 sm:w-72 xl:w-full mb-4 xl-mb-0 flex overflow-x-auto xl:overflow-x-visible  xl:block">
            {tabs.map((section) => (
              <li className="w-full" key={section.key}>
                <button
                  className={`xl:w-full  text-left whitespace-nowrap mr-4 xl:mr-0 xl:px-5 hover:text-primary font-semibold text-base  py-3 focus:outline-none ${
                    tab.key === section.key
                      ? 'border-primary border-b-2 xl:border-b-0 xl:border-r-2'
                      : ''
                  }`}
                  onClick={() => setTab({ tab: section.key })}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 col-start-2  ">
          <div className="bg-white rounded-2xl mb-4  p-10">
            <img
              className="w-64 mx-auto mb-8"
              src={tab.image}
              alt="tab_image"
            ></img>
            <div>
              <SkillMeasure level={tab.skill.level} name={tab.skill.name} />
              <p className="mt-4 mb-7 font-normal">{tab.skill.description}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl px-10 py-6 ">
            Generate a new
            <a href="/">
              <strong> API key</strong>
            </a>
          </div>
        </div>
      </div>
      <div className="xl:col-span-3 pr-4">
        <h3 className="text-2xl capitalize font-semibold mb-4">
          {tab.content.title}
        </h3>
        <div className="xl:pr-12 border-t border-gray-300 pt-8">
          {tab.content.items.map((item) => (
            <div key={item.title}>
              <div className="w-14 h-14 mb-4 rounded-full border flex items-center justify-center border-gray-300">
                <img className="w-6 " src={item.icon} alt="icon" />
              </div>
              <h4 className="font-semibold text-xl mb-4">{item.title}</h4>
              <div className="mb-4">{compiler(item.description)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type ACTIONTYPE = { tab: string };

function TabsReducer(state: typeof instructions['one'], action: ACTIONTYPE) {
  switch (action.tab) {
    case 'one':
      return instructions['one'];
    case 'two':
      return instructions['two'];
    default:
      throw new Error('Handle all cases');
  }
}
