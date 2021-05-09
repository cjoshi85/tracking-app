import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { getExerciseDashboard } from "../api/firebaseAPI";
import { USER_ID } from "../utils/constants";
import { getLoader } from "../utils/utils";
import Button from "../../components/Button";

export default class ExerciseDashboard extends React.Component {
  constructor(props) {
    super(props);
    const {exerciseId} = this.props.route.params;
    this.state = {
      loading: true,
      data: [],
      exerciseId
    }
  }

  async componentDidMount() {
    const data = await getExerciseDashboard(USER_ID, this.state.exerciseId);
    this.setState({
      data,
      loading: false
    })
  }

  goToExerciseDetail = (exercises) => {
    const {exerciseId} = this.state;
    this.props.navigation.navigate('ExerciseList', {
      exerciseId,
      exercises
    });
  }

  render() {
    const {loading, data} = this.state;
    if (loading) {
      return getLoader('large')
    }
    const renderExerciseItem = (item) => {
      const exercise = item.data();
      if (exercise && Object.keys(exercise) && Object.keys(exercise).length) {
        const {date, exercises} = exercise;
        console.log({exercise: exercises});
        return (
          <TouchableOpacity onPress={() => this.goToExerciseDetail(exercises)}>
            <View style={styles.exerciseContainer}>
              <Text style={[styles.titleText, {fontWeight: 'bold', marginBottom: 6}]}>Date: {date.toDate().toDateString()}</Text>
              <Text style={styles.titleText}>Total Exercises: {exercises.length}</Text>
            </View>
          </TouchableOpacity>
        )
      }
      return null
    };
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {data.map(renderExerciseItem)}
        <Button buttonText={'Add New Workout Details'} customButtonStyle={{backgroundColor: '#44D7B6'}} customStyle={{marginTop: 20}}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 20
  },
  exerciseContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginHorizontal: 10,
    backgroundColor: '#F78765'
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF'
  }
})
