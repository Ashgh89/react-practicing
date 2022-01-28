// Higher Order Component
// 1. hoc is a function
// input: Component ... => Output: NewComponent

// Why we use it? to share functionality between components

// const Wrapper = (props) => {
//   return <div className={props.class}>{props.children}</div>;
// };

// * As we say hoc will take a component (WrappedComponent)
const Wrapper = (WrappedComponent, className) => {
  // * And it returns a new Component
  return (props) => {
    // What does this {...props} means? That means if we add any props to index.js to the App.js
    // we must give it here the ...props to get that. FOr example if in index.js i give <App name="Ash"/>
    // and i give in App.js console.log(props), i will find nothing and i can't access that, so
    // but if i give ...props here, i can access my props in App.js, so if i say console.log(props)
    // i'll get {name: "Ash"}
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Wrapper;
