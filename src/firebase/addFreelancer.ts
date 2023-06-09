import { doc, setDoc } from "firebase/firestore";
import { IProfileInputFreelancer } from "../components/ProfileInputFreelancer/ProfileInputFreelancer.component";

import { db } from "./firebase.config";

export const addFreelancer = async (freelancer: Partial<IProfileInputFreelancer>) => {
  await setDoc(doc(db, "freelancer", String(freelancer.uid)), freelancer);
};
