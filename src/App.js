import React from 'react';
import Card from './Card';
import Sdata from './Sdata';




function App() {
    return (
    <>
      <h1 className="heading">List of top 5 Netflix Series in 2020</h1>
      { Sdata.map((cval) => {
  return(
    <Card
    key={cval.id}
    imgsrc={cval.imgsrc}
    title={cval.title}
    sname={cval.sname}
    link={cval.link}
   /> 
  ); 
})}

    </>
    )
}

export default App;
