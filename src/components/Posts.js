import Post from "./Post";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return (
      <>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <h2 className="d-inline-block text-primary ms-2">Loading...</h2>
      </>
    );
  }

  return (
    <div className="container row gap-3">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
