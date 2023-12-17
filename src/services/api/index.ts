import { collection, doc, runTransaction } from "firebase/firestore";
import { db } from "../firebase";
import { Invitation } from "../../utils/types/guest";

const invitationsCollection = collection(db, "invitations");

export const getInvitation = (id: string) => {
  const invitationDocRef = doc(invitationsCollection, id);
  try {
    return runTransaction(db, async (transaction) => {
      const invitationDoc = await transaction.get(invitationDocRef);
      if (!invitationDoc.exists()) {
        // eslint-disable-next-line no-throw-literal
        throw "Document does not exist!";
      }

      const invitationData = invitationDoc.data();
      console.log("Invitation data: ", invitationData);
      return invitationData;
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

export const updateInvitation = (id: string, data: Invitation) => {
  const invitationDocRef = doc(invitationsCollection, id);
  try {
    const newInvitation = runTransaction(db, async (transaction) => {
      const invitationDoc = await transaction.get(invitationDocRef);
      if (!invitationDoc.exists()) {
        // eslint-disable-next-line no-throw-literal
        throw "Document does not exist!";
      }

      transaction.update(invitationDocRef, { ...data });
      console.log("Invitation updated ", data);
      return data;
    });

    return newInvitation;
  } catch (e) {
    // This will be a "population is too big" error.
    console.error(e);
    return Promise.reject(e);
  }
};
