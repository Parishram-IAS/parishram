import { firestore } from './firebase.config';

export const getArticleList = async (editorialId) => {
    try {
        const querySnapshot = await firestore.collection(`/editorial/${editorialId}/article`).get()
        const articleList = querySnapshot.map((doc) => {
            return `${doc.id} => ${doc.data()}`
        });
        return articleList;
    } catch (err) {
        console.log('error',err)
    }

}
