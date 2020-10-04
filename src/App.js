import React, { useState } from 'react';
import './App.css';

import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import Box from '@material-ui/core/Box';
import { red } from '@material-ui/core/colors';

function App() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  const onN1Change = event => setN1(parseInt(event.target.value))

  const onN2Change = event => setN2(parseInt(event.target.value))

  const onN3Change = event => setN3(parseInt(event.target.value))

  const calculateMean = () => (n1+n2+n3)/3

  const calculateMedian = () => [n1, n2, n3].sort()[1]

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Box m={1} border={1} borderColor={red}>
            <h1>Calculate Mean and Median</h1>
          </Box>
        </Container>
      </header>

      <Box display={"flex"} justifyContent={"center"}>
        <Box m={1}>
          <Input type="number" id="number1" label="#1" value={n1} onChange={onN1Change} />
        </Box>
        <Box m={1}>
          <Input type="number" id="number2" label="#2" value={n2} onChange={onN2Change} />
        </Box>
        <Box m={1}>
          <Input type="number" id="number3" label="#3" value={n3} onChange={onN3Change} />
        </Box>
      </Box>

      <Box display={"flex"} justifyContent={"center"}>
        <h1>Mean: {calculateMean()}</h1> 
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <h1>Median: {calculateMedian()}</h1> 
      </Box>
    </div>
  );
}

export default App;
