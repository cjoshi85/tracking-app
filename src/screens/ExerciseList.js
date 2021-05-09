import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { getExerciseList } from "../api/firebaseAPI";
import { getLoader } from "../utils/utils";

export default class ExerciseList extends React.Component {
  constructor(props) {
    super(props);
    const {exerciseId, exercises} = this.props.route.params;
    this.state = {
      exerciseId,
      loading: true,
      exerciseList: [],
      exercises
    }
  }

  async componentDidMount() {
    const {exercises} = this.state;
    const exerciseList = await getExerciseList(this.state.exerciseId);
    this.setState({
      exerciseList,
      loading: false
    })
  }

  getExerciseName = (id) => {
    const {exerciseList} = this.state;
    const obj = exerciseList.exercises.find(item => item.id === id);
    if (obj) {
      return obj.name;
    }
    return null;
  };

  getMaxWeight = (reps) => {
    reps.sort((a, b) => b.weight - a.weight);
    return reps[0].weight;
  }

  render() {
    const {loading, exerciseList, exercises} = this.state;
    if (loading) {
      return getLoader('large')
    }
    const ItemSeparator = () => (
      <View style={{height: 10}}/>
    );

    const renderExerciseItem = ({item}) => {
      const {id, reps} = item;
      return (
        <View style={styles.exerciseContainer}>
          <Text style={styles.titleText}>{this.getExerciseName(id)}</Text>
          <Text style={styles.titleText}>Max Weight: {this.getMaxWeight(reps)}</Text>
        </View>
      )
    }
    return (
      <FlatList
        data={exercises}
        renderItem={renderExerciseItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeparator}
        style={{marginTop: 20}}
      />
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
