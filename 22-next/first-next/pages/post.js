import { withRouter } from "next/router";

const Post = (props) => {
  return (
    <>
      <h1>You Are Looking at Post #{props.router.query.id}</h1>
    </>
  );
};

// Post.getInitialProps = async ({ query }) => {
//   return query;
// };

export default withRouter(Post);
