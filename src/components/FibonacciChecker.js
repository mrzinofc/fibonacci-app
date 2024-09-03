import React, { useState } from "react";
import './FibonacciChecker.css';

function FibonacciChecker() {
  const [inputNumber, setInputNumber] = useState("");
  const [fibonacciSequence, setFibonacciSequence] = useState([0, 1]); // Armazena a sequência gerada até agora
  const [result, setResult] = useState(""); // Armazena a mensagem de resultado

  // Função para calcular a sequência de Fibonacci até o número informado
  const generateFibonacci = (num) => {
    let sequence = [...fibonacciSequence]; // Copia a sequência existente

    // Gera a sequência até o número desejado
    while (sequence[sequence.length - 1] < num) {
      const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(next);
    }

    setFibonacciSequence(sequence);
  };

  // Função para verificar se o número está na sequência de Fibonacci
  const isFibonacci = (num) => {
    return fibonacciSequence.includes(num);
  };

  // Função para lidar com o submit do número
  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(inputNumber);

    if (isNaN(num) || num < 0) {
      setResult("Por favor, insira um número válido.");
      return;
    }

    // Gera a sequência até o número informado
    generateFibonacci(num);

    // Verifica se o número informado pertence à sequência de Fibonacci
    if (isFibonacci(num)) {
      setResult(`Sim, o número ${num} pertence à sequência de Fibonacci.`);
    } else {
      setResult(`Não, o número ${num} não pertence à sequência de Fibonacci.`);
    }

    setInputNumber(""); // Reseta o input
  };

  return (
    <div className="container">
      <h1>Verificar a Sequência de Fibonacci</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
          placeholder="Digite um número"
        />
        <button type="submit">Calcular</button>
      </form>

      {/* Exibe o resultado da verificação */}
      {result && <p>{result}</p>}

      {/* Exibe a sequência completa até agora */}
      <div>
        <h2>Sequência de Fibonacci gerada:</h2>
        <p>{fibonacciSequence.join(", ")}</p>
      </div>
    </div>
  );
}

export default FibonacciChecker;
