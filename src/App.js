// App.js
import React from 'react';
import Table from './Table';

const App = () => {
  const columns = [
    { label: 'Name', key: 'name' },
    { label: 'Age', key: 'age' },
    { label: 'Email', key: 'email' }
  ];

  const data = [
    { name: 'John Doe', age: 28, email: 'john@example.com' },
    { name: 'Jane Doe', age: 22, email: 'jane@example.com' },
    { name: 'Alex Smith', age: 35, email: 'alex@example.com' },
    { name: 'Emily Johnson', age: 30, email: 'emily@example.com' },
    { name: 'Chris Lee', age: 24, email: 'chris@example.com' },
    { name: 'Sara Wilson', age: 26, email: 'sara@example.com' },
    { name: 'Mark Brown', age: 40, email: 'mark@example.com' },
    { name: 'Linda White', age: 32, email: 'linda@example.com' }
  ];

  return (
    <div className="App">
      <h1>Table with Pagination and Search (Atomic Design)</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default App;
