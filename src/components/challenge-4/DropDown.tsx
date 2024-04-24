type Props<T> = T extends number | string
  ? {
      data: string[] | number[];
      labelProp?: never;
      valueProp?: never;
    }
  : {
      data: T[];
      labelProp: keyof T;
      valueProp: keyof T;
    };

function DropDown<T>(props: Props<T>) {
  return <div>dropDown</div>;
}

// const DropDown = <T,>(props: Props<T>) => {
//   return <div>dropdown</div>;
// };

const Parent = () => {
  return (
    <DropDown
      data={[
        { id: 1, name: "Saheb" },
        { id: 2, name: "Ali" },
      ]}
      labelProp="name"
      valueProp="id"
    />
  );
};
