// src/firebase/firebase.service.ts
import { Injectable } from '@nestjs/common';
import { firestore } from './firebaseConfig';

@Injectable()
export class FirebaseService {
  getFirestore() {
    return firestore;
  }
}
