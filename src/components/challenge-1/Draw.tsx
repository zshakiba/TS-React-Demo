// type Props = {
//   shape: "circle" | "rectangle" | "square";
//   width?: number;
//   height?: number;
//   radius?: number;
// };

type Cicrle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Square = {
  shape: "square";
  baseLength: number;
};

type Props = Cicrle | Square | Rectangle;

const Draw = (props: Props) => {
  return <div>{JSON.stringify(props)}</div>;
};

const Parent = () => {
  return <Draw shape="square" baseLength={20} />;
};

//? Draw => circle, recatangle, square.
// shape ="circle" => radius,
// shape ="rec" => width,...
