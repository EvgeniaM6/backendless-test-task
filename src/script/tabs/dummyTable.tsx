import React from 'react';

const DummyTable = () => {
  const tableBorderStyles = { border: '1px solid' };
  return (
    <table style={tableBorderStyles}>
      <tbody>
        <tr>
          <td style={tableBorderStyles}>Dummy</td>
          <td style={tableBorderStyles}>Table</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DummyTable;
