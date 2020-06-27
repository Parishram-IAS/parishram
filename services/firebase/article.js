import { firestore } from "./firebase.config";

/**
 * List all the articles of a particular editorial from database.
 * @param {string} editorialId name of the editorial.
 * @param {number} num2 The second number.
 * @returns {array} article returns all the article of particular editorial.
 */
export const getArticleList = async (editorialId) => {
  try{
    const querySnapshot = await firestore.collection(`editorial/${editorialId}/article`).get();
    const articleList = [];
    querySnapshot.forEach((doc) => {
      articleList.push({ ...doc.data(), id: doc.id });
    });
    return articleList;
  }catch(err){
    return []
  }

};


export const getIndividualArticle = async (editorialId, slug) => {
  try{
    const doc = await firestore.doc(`editorial/${editorialId}/article/${slug}`).get();
    if (doc.exists) {
      return doc.data()
    } else {
      return null
    }
  }
  catch(err){
    return null
  }
};
