// const heading = React.createElement('h1', { id: 'head-1' }, "Hello world from Sandipan Dey");
// const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log(heading);
// root.render(heading);

// <div id ='parent'>
//     <div id ='child'>
//         <h1 id ='heading-1'>Hello</h1>
//         <h1 id= 'heading-2'>Bye</h1>
//     </div>
// </div>


const greetings = React.createElement('div', { id : 'parent' },

    React.createElement('div', { id : 'child' },
    [
        React.createElement('h1', { id : 'heading-1' }, "Hello"),
        React.createElement('h1', { id : 'heading-2' }, "Bye")
    ])
);

let root =ReactDOM.createRoot(document.getElementById('root'));

root.render(greetings);
    