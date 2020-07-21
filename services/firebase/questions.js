import { firestore } from "./firebase.config";

/**
 * 
 * @param {string} date -> Format yyyy-mm-dd
 * @param {Array<Question>} questions
 */
export const addNewQuestionSet = async (date, questions) => {
    try {
        const docRef = await firestore.collection(`questions`).doc(date).set(questions);
        console.log("docREf", docRef)

      } catch (error) {
        throw error;
      }
}

/**
 * 
 * @param {string} date -> Format yyyy-mm-dd
 */
export const getQuestionSetForDate = async (date) => {
    try {
        const doc = await firestore.doc(`questions/${date}`).get();
        if (doc.exists) {
          return { ...doc.data(), id: doc.id }
        } else {
          return {}
        }
      }
      catch (err) {
        return null
      }
}