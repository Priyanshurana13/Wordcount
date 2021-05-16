import {useState , useEffect} from 'react'
import axios from 'axios'
export default function Count(props) {
  const [text , setText] = useState('')
  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/invictustech/test/main/README.md')
    .then(res => {
      setText(res.data)
    }).catch(err => console.log('err' ,err))
  }, [])

  function freq(string) {
    var word = string.replace(/[.,-;]/g, '').toUpperCase().split(/\s/);
    var words = word.filter(function (el) {
        return el !== '';
      });
    var mapp = {};
    words.forEach(function(xyz) {
        if (!mapp[xyz]) {
            mapp[xyz] = 0;
        }
        mapp[xyz] += 1;
    });

    return mapp;
}

const array = [{}]
array.push(freq(text));
const resArray = [{}]
for(const keys of Object.entries(array[1])) {

  const mappings = {
    word:'',
    count:0
  }
  mappings.word = keys[0]
  mappings.count = keys[1];
  resArray.push(mappings);
}
function compare( a, b ) {
    if ( a.count > b.count ){
      return -1;
    }
    if ( a.count < b.count ){
      return 1;
    }
    return 0;
}
  
resArray.sort( compare );
var abc = [{}]
var num = parseInt(props.number) + 1
if(num<=0){
    return(
        <p>Err : Enter Positive Value.</p>
    )
}
else if(Number.isNaN(num)){
  return(
      <p>Enter Value.</p>
  )
}
abc = resArray.slice(1,num);
const Tableval = ({word , count}) => {
   return (
     <tr>
       <td>{word}</td>
       <td>{count}</td>
      </tr>
   )
} 


return (
    <div className="App">
      <table>
        <tbody>
        <tr id="header">
        <th>Words</th>
        <th>Frequency</th>
      </tr>
      {abc.map((keys , index) => (<Tableval word={keys.word} key={index.toString()} count={keys.count} />))}
        </tbody>
      </table>
    </div>
  );
}