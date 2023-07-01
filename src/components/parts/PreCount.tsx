function PreCount({ time }: {time:string}) {
  return (
    <tbody className="precount" style={{ color: "white", fontSize: "3rem" }}>
      <tr>
        <td>{time}</td>
      </tr>
    </tbody>
  );
}

export default PreCount;
