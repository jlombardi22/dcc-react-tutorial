const DisplayEntries = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Entry Number</th>
          <th>Weight</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {props.parentEntries.map((entry, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{entry.weight}</td>
              <td>{entry.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayEntries;
