/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';
import { getCounterValue } from '../model/selectors/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
  className?: string;
}

export const Counter = (props: CounterProps) => {
  const { className } = props;
  const counterValue = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(counterActions.increment());
  };
  const onDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">
        {counterValue}
      </h1>
      <Button data-testid="increment-btn" onClick={onIncrement}>
        increment
      </Button>
      <Button data-testid="decrement-btn" onClick={onDecrement}>
        decrement
      </Button>
    </div>
  );
};
