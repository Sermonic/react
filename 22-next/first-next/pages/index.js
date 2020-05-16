const Page = ({ users }) => {
  return (
    <div>
      <h1>Index Page!</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

Page.getInitialProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await res.json();
  return { users: json };
};

export default Page;
