export const createPost = post => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("posts")
      .add({
        ...post,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        // displayName: profile.displayName,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "ADD_POST", post: post });
      })
      .catch(err => {
        dispatch({ type: "ADD_POST_ERROR", err });
      });
  };
};
