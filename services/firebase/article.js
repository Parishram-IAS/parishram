import { firestore } from "./firebase.config";

export const getArticleList = async (editorialId) => {
  const querySnapshot = await firestore.collection(`editorial/${editorialId}/article`).get();
  let article = [];
//   console.log("val", querySnapshot.val())
  querySnapshot.forEach((doc) => {

    console.log(`${doc.id} => ${doc.data()}`);
    console.table(doc.data())
    article.push(doc.data());
  });
  return article;
};
