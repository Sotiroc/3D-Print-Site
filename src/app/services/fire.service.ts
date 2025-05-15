import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../model/user.model'; //Import user model
import { Observable } from 'rxjs';
import { Firestore, 
  collection, 
  addDoc, 
  collectionData, 
  DocumentData,
  CollectionReference
 } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root' // Makes this service available throughout the app
})
export class FireService {
  // References to the 'users' and 'users2' collections in Firestore
  private userCollection: CollectionReference<DocumentData>;
  private userCollection2: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    // Initialize the 'users' and 'users2' collection references
    this.userCollection = collection(this.firestore, 'users');
    this.userCollection2 = collection(this.firestore, 'users2');
  }

  /**
   * Add a new user to both the 'users' and 'users2' Firestore collections.
   * @param user - The user object to add.
   * @returns A Promise that resolves when the user is added to both collections.
   */
  addUser(user: User): Promise<void> {
    const addToUsers = addDoc(this.userCollection, user);
    const addToUsers2 = addDoc(this.userCollection2, user);

    return Promise.all([addToUsers, addToUsers2])
      .then(() => {
        console.log('User added successfully to both collections!');
      })
      .catch((error) => {
        console.error('Error adding user to collections:', error);
        throw error; // Re-throw the error for handling in the component
      });
  }

  /**
   * Get all users from the Firestore 'users' collection.
   * @returns An Observable of the list of users.
   */
  getUsers(): Observable<User[]> {
    return collectionData(this.userCollection, { idField: 'id' }) as Observable<User[]>;
  }
}
