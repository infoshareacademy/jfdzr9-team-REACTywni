import { CounterContent, CounterField } from "./Counter.styled";
import SingleCounterWidget from "./../SingleCounterWidget/SingleCounterWidget.components";

const Counter = () => {
  return (
    <CounterField>
      <CounterContent>
        <h2>Find a Designer w liczbach</h2>
        <p>Liczby nie kłamią! Prezentujemy kluczowe dane dotyczące projektów, zadań i działań użytkowników.</p>
      </CounterContent>
      <SingleCounterWidget />
    </CounterField>
  );
};
export default Counter;
