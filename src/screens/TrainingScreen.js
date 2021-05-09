import React from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Button from "../../components/Button";
import { getTrainingDashboard, getExerciseListOfUser, getExerciseDashboard } from "../api/firebaseAPI";
import { getLoader } from "../utils/utils";
import { USER_ID } from "../utils/constants";

export default class TrainingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      exerciseList: []
    }
  }

  async componentDidMount() {
    let exerciseList = await getExerciseListOfUser(USER_ID);
    this.setState({
      exerciseList,
      loading: false
    })
  };

  goToExerciseDashboard = async (exerciseId) => {
    this.props.navigation.navigate('ExerciseDashBoard', {
      exerciseId
    });
  };

  render() {
    const {navigation} = this.props;
    const {loading, exerciseList} = this.state;

    const renderExerciseItem = (item) => {
      return (
        <Button key={item.id} buttonText={item.name} onPress={() => this.goToExerciseDashboard(item.id)} customStyle={{marginBottom: 10}}/>
      )
    };
    if (loading) {
      return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
          {getLoader('large')}
        </View>
      )
    }
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {exerciseList.map(renderExerciseItem)}
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingTop: 20
  }
});
