export default function Header(props) {
  const { user: {firstName, lastName} } = props.userStuff;
  return (
    <header>
      {`${firstName} ${lastName}`}
    </header>
  );
}

