The solution involves using `.then()` to handle the promise returned by `getDoc()`, ensuring that the code that accesses the data is only executed after the data has been successfully retrieved:

```javascript
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();
const docRef = doc(db, "yourCollection", "yourDocId");

getDoc(docRef).then((docSnapshot) => {
  if (docSnapshot.exists()) {
    console.log("Document data:", docSnapshot.data());
    // Access properties of docSnapshot.data() here safely
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.error("Error getting document:", error);
});
```
Alternatively, you can use `async/await` for a more readable solution:

```javascript
import { getFirestore, doc, getDoc } from "firebase/firestore";

async function getData() {
  const db = getFirestore();
  const docRef = doc(db, "yourCollection", "yourDocId");
  try {
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      console.log("Document data:", docSnapshot.data());
      // Access properties of docSnapshot.data() here safely
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
}

getData();
```