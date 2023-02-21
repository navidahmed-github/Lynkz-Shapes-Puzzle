import { useState } from 'react';
import logo from '../../logo.png';
import Circle from '../shapes/Circle';
import Rectangle from '../shapes/Rectangle';
import Square from '../shapes/Square';
import Octagon from '../shapes/Octagon';
import IsoscelesTriangle from '../shapes/IsoscelesTriangle';
import './Content.css';
import ScaleneEqualTriangle from '../shapes/ScaleneTriangle';
import Parallelogram from '../shapes/Parallelogram';
import Hexagon from '../shapes/Hexagon';
import Pentagon from '../shapes/Pentagon';
import Heptagon from '../shapes/Heptagon';
import Oval from '../shapes/Oval';

export default function Content() {
    const [input, setInput] = useState('')
    const [error, setError] = useState('')

    const defaultImage = <img src={logo} className="App-logo" alt="logo" />
    const [shape, setShape] = useState(defaultImage)

    function drawShape(shapeData) {

      switch (shapeData.shapeName) {
        case 'CIRCLE':
          if (shapeData.measurements.length < 1 || shapeData.measurements.length > 1)
            return setError('This shape requires one radius measurement')
          if (shapeData.measurements[0].measurementName !== 'RADIUS')
            return setError('This shape only takes a measurement type of radius')
          return setShape(<Circle radius={shapeData.measurements[0].measurementAmount}></Circle>)
        case 'SQUARE':
          if (shapeData.measurements.length < 1 || shapeData.measurements.length > 1)
            return setError('This shape requires one side length measurement')
          if (shapeData.measurements[0].measurementName !== 'SIDE_LENGTH')
            return setError('This shape only takes a measurement type of side length')
          return setShape(<Square size={shapeData.measurements[0].measurementAmount}></Square>)
        case 'RECTANGLE':
          if (shapeData.measurements.length < 2 || shapeData.measurements.length > 2)
            return setError('This shape requires one width and height measurement')
          if (shapeData.measurements[0].measurementName === 'WIDTH' && shapeData.measurements[1].measurementName === 'HEIGHT') {
            return setShape(<Rectangle width={shapeData.measurements[0].measurementAmount} height={shapeData.measurements[1].measurementAmount}></Rectangle>)
          }
          if (shapeData.measurements[0].measurementName === 'HEIGHT' && shapeData.measurements[1].measurementName === 'WIDTH') {
            return setShape(<Rectangle width={shapeData.measurements[1].measurementAmount} height={shapeData.measurements[0].measurementName}></Rectangle>)
          }
          return setError('This shape only takes a measurement type of width and height')
        case 'ISOSCELES_TRIANGLE':
          if (shapeData.measurements.length < 2 || shapeData.measurements.length > 2)
            return setError('This shape requires one width and height measurement')
          if (shapeData.measurements[0].measurementName === 'BASE' && shapeData.measurements[1].measurementName === 'HEIGHT') {
            return setShape(<IsoscelesTriangle base={shapeData.measurements[0].measurementAmount} height={shapeData.measurements[1].measurementAmount} />)
          }
          if (shapeData.measurements[0].measurementName === 'HEIGHT' && shapeData.measurements[1].measurementName === 'BASE') {
            return setShape(<IsoscelesTriangle base={shapeData.measurements[1].measurementAmount} height={shapeData.measurements[0].measurementAmount} />)
          }
          return setError('This shape only takes a measurement type of base and height')
        case 'SCALENE_TRIANGLE':
          if (shapeData.measurements.length < 3 || shapeData.measurements.length > 3)
            return setError('This shape requires three side length measurements')
          shapeData.measurements.forEach(measurements => {
            if (measurements.measurementName !== 'SIDE_LENGTH')
              return setError('This shape takes only side lengths')
          });
          if (shapeData.measurements[0].measurementAmount === shapeData.measurements[1].measurementAmount === shapeData.measurements[2].measurementAmount)
            return setError('A scalene triangle is only given when there are three sides of different length')
          return setShape(<ScaleneEqualTriangle a={shapeData.measurements[0].measurementAmount} b={shapeData.measurements[1].measurementAmount} c={shapeData.measurements[1].measurementAmount}></ScaleneEqualTriangle>)
        
        case 'EQUILATERAL_TRIANGLE':
          if (shapeData.measurements.length < 1 || shapeData.measurements.length > 1)
            return setError('This shape requires one side length measurements')
          if (shapeData.measurements[0].measurementName !== 'SIDE_LENGTH')
            return setError('This shape only takes a measurement type of side length')
          return setShape(<ScaleneEqualTriangle a={shapeData.measurements[0].measurementAmount} b={shapeData.measurements[0].measurementAmount} c={shapeData.measurements[0].measurementAmount}></ScaleneEqualTriangle>)

        case 'PARALLELOGRAM':
          if (shapeData.measurements.length < 2 || shapeData.measurements.length > 2)
            return setError('This shape requires one width and height measurement')
          if (shapeData.measurements[0].measurementName === 'WIDTH' && shapeData.measurements[1].measurementName === 'HEIGHT') {
            return setShape(<Parallelogram width={shapeData.measurements[0].measurementAmount} height={shapeData.measurements[1].measurementAmount}></Parallelogram>)
          }
          if (shapeData.measurements[0].measurementName === 'HEIGHT' && shapeData.measurements[1].measurementName === 'WIDTH') {
            return setShape(<Parallelogram width={shapeData.measurements[1].measurementAmount} height={shapeData.measurements[0].measurementAmount}></Parallelogram>)
          }
          return setError('This shape only takes a measurement type of width and height')

        case 'HEXAGON':
          if (shapeData.measurements.length < 1 || shapeData.measurements.length > 1)
          return setError('This shape requires one side length measurement')
          if (shapeData.measurements[0].measurementName !== 'SIDE_LENGTH')
            return setError('This shape only takes a measurement type of side length')
          return setShape(<Hexagon sideLength={shapeData.measurements[0].measurementAmount}></Hexagon>)
        case 'OCTAGON':
          if (shapeData.measurements.length < 1 || shapeData.measurements.length > 1)
          return setError('This shape requires one side length measurement')
          if (shapeData.measurements[0].measurementName !== 'SIDE_LENGTH')
            return setError('This shape only takes a measurement type of side length')
          return setShape(<Octagon sideLength={shapeData.measurements[0].measurementAmount}></Octagon>)
        case 'PENTAGON':
          if (shapeData.measurements.length < 1 || shapeData.measurements.length > 1)
          return setError('This shape requires one side length measurement')
          if (shapeData.measurements[0].measurementName !== 'SIDE_LENGTH')
            return setError('This shape only takes a measurement type of side length')
          return setShape(<Pentagon sideLength={shapeData.measurements[0].measurementAmount}></Pentagon>)  
        case 'HEPTAGON':
          if (shapeData.measurements.length < 1 || shapeData.measurements.length > 1)
          return setError('This shape requires one side length measurement')
          if (shapeData.measurements[0].measurementName !== 'SIDE_LENGTH')
            return setError('This shape only takes a measurement type of side length')
          return setShape(<Heptagon sideLength={shapeData.measurements[0].measurementAmount}></Heptagon>)
        case 'OVAL':
          if (shapeData.measurements.length < 2 || shapeData.measurements.length > 2)
            return setError('This shape requires a width and height measurement')
          if (shapeData.measurements[0].measurementName === 'WIDTH' && shapeData.measurements[1].measurementName === 'HEIGHT') {
            return setShape(<Oval width={shapeData.measurements[0].measurementAmount} height={shapeData.measurements[1].measurementAmount}></Oval>)
          }
          if (shapeData.measurements[0].measurementName === 'HEIGHT' && shapeData.measurements[1].measurementName === 'WIDTH') {
            return setShape(<Oval width={shapeData.measurements[1].measurementAmount} height={shapeData.measurements[0].measurementAmount}></Oval>)
          }
          return setError('This shape only takes a measurement type of width and height')

          default:
          break;
      }
    }

    async function getShapeData(input) {
      const response = await fetch(`https://localhost:7203/api/Shapes/${input}`)
      const result = await response.json()
      return result
    }

    const handleDrawSubmit = async (e) => {
      e.preventDefault();

      if (!input)
        return setError('The above cannot be blank')

      const result = await getShapeData(input.trim())
    
      if (result.statusCode === '500') {
        setError(result.data.message);
      } else {
        setError('')
        drawShape(result.data)
      }
    }

    return (
      <body className='Body'>
        <div>
          <div className='Shape'>
            { shape }
          </div>
        </div>
        <p>
          Please enter a shape with its respective measurements using the example sentence below:
        </p>
        <p className='Example'>
        Draw a(n) &lt;shape&gt; with a(n) &lt;measurement&gt; of &lt;amount&gt; 
        (and a(n) &lt;measurement&gt; of &lt;amount&gt;)
        </p>
        <p className='Example'>
          e.g.
          <strong>
            {' '}Draw an Isosceles Triangle with a base of 200 and a height of 100
          </strong>
        </p>
        <form onSubmit={(e) => handleDrawSubmit(e)}>
          <div>
            <input type={'text'} className="TextInput" onChange={(e) => setInput(e.target.value)} value={input}></input>
          </div>
          <div className='Error'>
            { error ?? {error}}
          </div>
          <div>
            <button type={'submit'} className={"SubmitButton"}>DRAW</button>
          </div>
        </form>
      </body>
    );
}