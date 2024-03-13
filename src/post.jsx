export default function Post({ post }) {
  const { id, userId, title } = post;
  console.log(post);
  return (
    <div style={{
        border:'2px solid',
        padding:'15px',
        margin:'15px',
        borderRadius:"15px"

    }}>
      <h2>id : {id}</h2>
      <h4>userId : {userId} </h4>
      <p>title : {title} </p>
    </div>
  );
}
