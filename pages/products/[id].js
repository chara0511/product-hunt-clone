import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { formatDistanceToNow } from 'date-fns';
import FirebaseContext from '../../context/firebase/FirebaseContext';
import Layout from '../../components/layout/Layout';
import Error404 from '../../components/layout/404';
import {
  StyledProductId,
  StyledContent,
  StyledHeaderContent,
  StyledTitle,
  StyledBodyContent,
  StyledImage,
  StyledWrapper,
  StyledInput,
  StyledDescription,
  StyledComments,
  StyledBtnVotes,
  StyledURLs,
  StyledOwner,
  StyledOwnerProfile,
} from '../../styles/StyledProductId';
import { StyledLink } from '../../styles';
import { ArrowRight, Gps } from '../../components/icons';

const Product = () => {
  const { firebase, user } = useContext(FirebaseContext);

  const [product, setProduct] = useState({});
  const [comment, setComment] = useState({});
  const [state, setState] = useState(true);
  const [error, setError] = useState(false);

  const router = useRouter();

  const {
    query: { id },
  } = router;

  const getProduct = async (productId) => {
    const query = await firebase.db.collection('products').doc(productId).get();

    if (query.exists) {
      setProduct(query.data());
      setState(false);
    } else {
      setError(true);
      setState(false);
    }
  };

  useEffect(() => {
    if (id && state) {
      getProduct(id);
    }
  }, [id, state]);

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

    if (voted.includes(user.uid)) {
      return null;
    }

    firebase.db
      .collection('products')
      .doc(id)
      .update({ votes: votes + 1, voted: [...voted, user.uid] });

    setProduct({ ...product, votes: votes + 1 });

    return setState(true);
  };

  const handleChangeComment = ({ target }) => {
    setComment({ ...comment, [target.name]: target.value });
  };

  const isOwner = (userId) => owner.uid === userId && true;

  const handleSubmitComment = (e) => {
    e.preventDefault();

    if (!user) {
      return router.push('/login');
    }

    comment.uid = user.uid;
    comment.displayName = user.displayName;
    comment.photoURL = user.photoURL;
    comment.posted = Date.now();

    const newComment = [...comments, comment];

    firebase.db.collection('products').doc(id).update({ comments: newComment });

    setProduct({ ...product, comments: newComment });

    return setState(true);
  };

  const deleteProduct = () => owner?.uid === user?.uid && true;

  const errorDeleteProduct = (msge) => <p>{msge}</p>;

  const handleDeleteProduct = async () => {
    if (!user) {
      return router.push('/login');
    }

    if (owner.uid !== user.uid) {
      return router.push('/');
    }

    try {
      await firebase.db.collection('products').doc(id).delete();
    } catch (err) {
      errorDeleteProduct(err.message);
    }

    return router.push('/');
  };

  return (
    <Layout head={`${name} - ${description}`} title="">
      {!Object.keys(product).length || error ? (
        <Error404 />
      ) : (
        <StyledProductId>
          <StyledContent>
            <StyledHeaderContent>
              <img src={owner.photoURL} alt={owner.photoURL} />
              <StyledTitle>
                <h1>{name}</h1>

                <p>{company}</p>
              </StyledTitle>
            </StyledHeaderContent>

            <StyledBodyContent>
              <StyledWrapper>
                <StyledImage>
                  <img src={urlImage} alt={`${name}`} />
                  <StyledDescription>{description}</StyledDescription>
                  <p>
                    Featured
                    {` `}
                    {formatDistanceToNow(created)}
                    ago.
                  </p>
                </StyledImage>
              </StyledWrapper>

              <aside>
                {!user ? (
                  <StyledLink href="/login" forwardedAs="/login" chocolate>
                    &#9650;
                    <span>{`upvote link ${votes}`}</span>
                  </StyledLink>
                ) : (
                  <StyledBtnVotes type="button" onClick={handleVote}>
                    <span>
                      &#9650;
                      {` upvote link ${votes}`}
                    </span>
                  </StyledBtnVotes>
                )}

                <hr />

                <div>
                  <a target="_blank" rel="noreferrer" href={url}>
                    <StyledURLs>
                      <Gps />
                      <div>
                        <span>Website</span>
                        <span>{url}</span>
                      </div>
                      <ArrowRight />
                    </StyledURLs>
                  </a>
                </div>

                <hr />

                <StyledOwner>
                  <h3>hunter</h3>
                  <StyledOwnerProfile>
                    <img src={owner.photoURL} alt={`${owner.displayName} logo`} />
                    <div>
                      <h4>{owner.displayName}</h4>
                      <p>{company}</p>
                    </div>
                  </StyledOwnerProfile>
                  <h3>makers</h3>
                  <p>no makers</p>
                </StyledOwner>
              </aside>
            </StyledBodyContent>

            <StyledWrapper>
              {user && (
                <form onSubmit={handleSubmitComment}>
                  <h3>Comment</h3>

                  <StyledInput
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
                <StyledComments>
                  <h3>Comments</h3>

                  {comments.map((comm) => (
                    <li key={comm.posted}>
                      <div>
                        <img src={comm.photoURL} alt={comm.photoURL} />
                        <p>{comm.displayName}</p>
                      </div>
                      <p>{comm.comment}</p>

                      {isOwner(comm.uid) && <p>Owner</p>}
                    </li>
                  ))}
                </StyledComments>
              )}

              {deleteProduct() && (
                <button type="button" onClick={handleDeleteProduct}>
                  Delete Product
                </button>
              )}
            </StyledWrapper>
          </StyledContent>
        </StyledProductId>
      )}
    </Layout>
  );
};

export default Product;
