import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(getCounterValue);

    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{count}</h1>
            <Button
                data-testid="increment-btn"
                onClick={increment}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
