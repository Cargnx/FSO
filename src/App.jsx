const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, your are {props.age} years old
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/cargnx">cargnx</a>
    </div>
  );
};

const App = () => {
  const now = new Date();
  console.log(now);

  const name = "Angelo";
  const age = 26;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Lemi" age={20} />
      <Hello name={name} age={age} />
      <Hello name="Kirill" age={20} />
      <Footer />
    </div>
  );
};

export default App;
