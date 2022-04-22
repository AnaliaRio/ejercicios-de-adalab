# React Starter Kit

Si analizas el código del fichero src/components/App.js verás que la constante de estado counter se modifica desde dos funciones manejadoras:

- handleCounterInput que se ejecuta cuando la usuaria cambia el input.
- handleResetCounter que se ejecuta cuando la usuaria pulsa en el botón de resetear.

Cuando el valor del contador se cambia desde el input, el contador y el input sí están sincronizados. Cuando la usuaria pulsa en el botón de resetear, el valor del contador se pone en 0, pero el valor del input no cambia. Esta es la incoherencia.

Y tiene sentido, ya que al pulsar el reset nadie avisa al input de que el valor del contador ahora es 0.
