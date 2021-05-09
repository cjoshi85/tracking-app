import firestore from '@react-native-firebase/firestore';

export async function getTrainingDashboard() {
  // const exercises = await firestore()
  //   .collection('training')
  //   .doc('0w2z7jvKRaPx4RBjL76E')
  //   .collection('chest')
  //   .get()
  //   .then(documentSnapshot => {
  //     let docs = documentSnapshot.docs;
  //     docs.map(item => {
  //       console.log(item.data());
  //     });
  //   });
  const exercises = await firestore()
    .collection('training')
    .doc('0w2z7jvKRaPx4RBjL76E')
    .get()
    .then(documentSnapshot => {
      console.log({documentSnapshot});
      // let docs = documentSnapshot.docs;
      // docs.map(item => {
      //   console.log(item.data());
      // });
    });
  // console.log({exercises});
};

export async function getExerciseListOfUser(userId) {
  const exercises = await firestore()
    .collection('training')
    .doc(userId)
    .get()
    .then(documentSnapshot => {
      return documentSnapshot.data();
    });
  return exercises.exerciseList;
}

export async function getExerciseDashboard(userId, exerciseId) {
  const dashboard = await firestore()
    .collection('training')
    .doc(userId)
    .collection(exerciseId)
    .get()
    .then(documentSnapshot => {
      return documentSnapshot.docs;
    });
  console.log({dashboard});
  return dashboard
}

export async function getExerciseList(exerciseId) {
  const exercises = await firestore()
    .collection('exercises')
    .doc(exerciseId)
    .get()
    .then(document => {
      return document.data();
    })
  return exercises;
}
