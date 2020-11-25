import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { formatDistanceToNow } from 'date-fns';
import FirebaseContext from '../../context/firebase/FirebaseContext';
import Layout from '../../components/layout/Layout';
import Error404 from '../../components/layout/404';

const Product = () => {
  const { firebase, user } = useContext(FirebaseContext);

  const [product, setProduct] = useState({});
  const [comment, setComment] = useState({});
  const [error, setError] = useState(false);

  const router = useRouter();

  const {
    query: { id },
  } = router;

  const getProduct = async (productId) => {
    const query = await firebase.db.collection('products').doc(productId).get();

    if (query.exists) {
      setProduct(query.data());
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [id, product]);

  const {
    comments,
    company,
    created,
    description,
    name,
    owner,
    url,
    urlImage,
    votes,
    voted,
  } = product;

  const handleVote = () => {
    if (!user) {
      return router.push('/login');
    }

    const newVotes = votes + 1;

    if (voted.includes(owner.uid)) {
      return null;
    }

    const userVoted = [...voted, owner.uid];

    firebase.db.collection('products').doc(id).update({ votes: newVotes, voted: userVoted });

    return setProduct({ ...product, votes: newVotes });
  };

  const handleChangeComment = ({ target }) => {
    setComment({ ...comment, [target.name]: target.value });
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();

    if (!user) {
      return router.push('/login');
    }

    comment.uid = user.uid;
    comment.displayName = user.displayName;

    const newComment = [...comments, comment];

    firebase.db.collection('products').doc(id).update({ comments: newComment });

    return setProduct({ ...product, comments: newComment });
  };

  return (
    <Layout>
      {!Object.keys(product).length || error ? (
        <Error404 />
      ) : (
        <div>
          <h1>{name}</h1>
          <div>
            <div>
              <p>
                Posted by
                {owner.displayName}
                {`, `}
                {company}
                {` - `}
                {formatDistanceToNow(created)}
                ago.
              </p>

              <img src={urlImage} alt={`${name}`} />

              <p>{description}</p>

              {user && (
                <form onSubmit={handleSubmitComment}>
                  <h3>Comment</h3>

                  <input
                    type="text"
                    name="comment"
                    placeholder="Write a comment"
                    onChange={handleChangeComment}
                  />
                  <input type="submit" value="Done" />
                </form>
              )}

              {comments.length === 0 ? (
                <p>No comments</p>
              ) : (
                <ul>
                  <h3>Comments</h3>

                  {comments.map((comm) => (
                    <li key={comm.uid}>
                      <p>{comm.comment}</p>
                      <p>{comm.displayName}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <aside>
              <a target="_blank" rel="noreferrer" href={url}>
                Visit url
              </a>

              <p>
                {votes}
                Votes
              </p>

              {user && (
                <button type="button" onClick={handleVote}>
                  Vote
                </button>
              )}
            </aside>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Product;
