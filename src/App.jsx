import { useState } from "react";
import Contain from "./Components/Contain";
import MyNav from "./Components/MyNav";

function App() {
  const [amount, setAmount] = useState(0);

  return (
    <div className="md:container md:max-w-6xl mx-auto">
      <div>
        <MyNav amount={amount} setAmount={setAmount} />
      </div>
      <div>
        <Contain amount={amount} setAmount={setAmount} />
      </div>
    </div>
  );
}

export default App;
