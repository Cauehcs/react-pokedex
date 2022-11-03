import { db } from "./firebase";
import { child, get, ref, set } from "firebase/database";

export class Database {
  public set(path: string, value: any): void {
    set(ref(db, path), value);
  }

  public get(path: string): any {
    const res = get(child(ref(db), path))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          return null;
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return res;
  }
}
