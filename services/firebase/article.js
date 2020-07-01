import { firestore } from "./firebase.config";

/**
 * List all the articles of a particular editorial from database.
 * @param {string} editorialId name of the editorial.
 * @param {number} num2 The second number.
 * @returns {array} article returns all the article of particular editorial.
 */
export const getArticleList = async (editorialId) => {
  try {
    const querySnapshot = await firestore.collection(`editorial/${editorialId}/article`).orderBy("news_time", "desc").get();
    const articleList = [];
    querySnapshot.forEach((doc) => {
      articleList.push({ ...doc.data(), id: doc.id });
    });
    return articleList;
  } catch (err) {
    return []
  }

};
export const getIndividualArticle = async (editorialId, slug) => {
  try {
    const doc = await firestore.doc(`editorial/${editorialId}/article/${slug}`).get();
    if (doc.exists) {
      return { ...doc.data(), id: doc.id }
    } else {
      return {}
    }
  }
  catch (err) {
    return null
  }
};

export const addNewArticle = async (editorialId, newArticle) => {
  try {
    const docRef = await firestore.collection(`editorial/${editorialId}/article`).add(newArticle);
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

export const allEditorialArticle = async () => {
  try {
    const articleList = [];
    const editorialCollectionSnapShot = await firestore.collection('editorial').get();
    const articleQueries = []
    editorialCollectionSnapShot.forEach(async (editorialDocument) => {
      articleQueries.push(firestore.collection(`editorial/${editorialDocument.id}/article`).get())
    });
    const articleResponse = await Promise.all(articleQueries)

    for (let index = 0; index < articleResponse.length; index++) {
      const articleCollectionSnapShot = articleResponse[index];
      articleCollectionSnapShot.forEach(function (articleDocument) {
        articleList.push({ ...articleDocument.data(), id: articleDocument.id });
      });
    };
    return articleList
  } catch (err) {
    throw err;
  }
}

export const editorialArticleTags = async (tags) => {
  try {
    const articleList = [];
    const editorialCollectionSnapShot = await firestore.collection('editorial').get();
    const articleQueries = []
    editorialCollectionSnapShot.forEach(async (editorialDocument) => {
      articleQueries.push(firestore.collection(`editorial/${editorialDocument.id}/article`).where('tags', 'array-contains-any', tags).get())
    });
    const articleResponse = await Promise.all(articleQueries)

    for (let index = 0; index < articleResponse.length; index++) {
      const articleCollectionSnapShot = articleResponse[index];
      articleCollectionSnapShot.forEach(function (articleDocument) {
        articleList.push({ ...articleDocument.data(), id: articleDocument.id });
      });
    };
    return articleList
  } catch (err) {
    throw err;
  }
}