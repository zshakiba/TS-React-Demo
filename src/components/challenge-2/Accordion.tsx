// type Props = {
//   collapsed?: boolean;
//   expanded?: boolean;
// };

type CollapseType = {
  collapsed?: true;
  expanded?: never;
};

type ExpandedType = {
  collapsed?: never;
  expanded?: true;
};

type Props = CollapseType | ExpandedType;

const Accordion = (props: Props) => {
  return <div>Accordion</div>;
};

const Parent = () => {
  return <Accordion expanded />;
};

//? collapsed
//? expanded

//1.  <Accordion />; ✅
//2.  <Accordion  collapsed/>; or <Accordion  expanded/>; ✅
//3.  <Accordion  collapsed expanded/>; => NOT ! ❌
