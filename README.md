# 📦 Custom Hooks Collection

Este repositorio contiene una colección de **custom hooks** en React que pueden ser reutilizados en diferentes proyectos. Los hooks incluidos son:

- `useCounter`: Un hook para manejar contadores.
- `useFetch`: Un hook para realizar peticiones a APIs con caché local y manejo de estado de carga/errores.
- `useForm`: (en desarrollo)

## 📄 Hooks Disponibles

### 1. `useCounter`

Hook para gestionar un contador con funciones para incrementar, decrementar y resetear el valor.

#### Uso:

```js
import { useCounter } from './useCounter';

const CounterComponent = () => {
  const { counter, increment, decrement, reset } = useCounter(5); // Valor inicial de 5

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => decrement()}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
```



## 2. `useFetch`

Hook para realizar peticiones HTTP con manejo de caché, estado de carga y errores.

### Uso:
```javascript
import { useFetch } from './useFetch';

const FetchComponent = () => {
  const { data, isLoading, hasError } = useFetch('https://api.example.com/data');

  if (isLoading) return <p>Loading...</p>;
  if (hasError) return <p>Error fetching data</p>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```
