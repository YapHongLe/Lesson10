import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Picker,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

class addExpenseScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amt: '',
      desc: '',
      cat: 'Entertainment',
    };
  }
  static navigationOptions = {
    title: 'Add an Expense',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#7B858A',
      fontSize: 24,
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.labelText, {color: '#38464F', flex: 2}]}>
            Amount:
          </Text>
          <TextInput
            style={[styles.input, {width: 250}]}
            onChangeText={text => this.setState({amt: text})}
          />
        </View>
        <View>
          <Text
            style={[styles.labelText, {color: '#38464F', marginVertical: 20}]}>
            Description:
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({desc: text})}
            Description={this.state.desc}
          />
        </View>
        <View style={{marginVertical: 20}}>
          <Text style={styles.labelText}>Category: {this.state.cat}</Text>
          <Picker
            selectedValue={this.state.cat}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({cat: itemValue})
            }>
            <Picker.Item label="Entertainment" value="Entertainment" />
            <Picker.Item label="A" value="A" />
            <Picker.Item label="B" value="B" />
          </Picker>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate('ViewExpense', {
                amt: this.state.amt,
                desc: this.state.desc,
                cat: this.state.cat,
              })
            }>
            <View style={[styles.button, {borderRadius: 15, width: 180}]}>
              <Image source={require('./src/images/expense.png')} />
              <Text>Save Expenses</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Alert.alert('Tip: Track your spending!')}>
            <View style={[styles.button, {borderRadius: 30, width: 60}]}>
              <Image source={require('./src/images/icon.png')} />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

class viewExpenseScreen extends React.Component {
  static navigationOptions = {
    title: 'View Expense',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#7B858A',
      fontSize: 24,
    },
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white', padding: 10}}>
        <Text
          style={[styles.labelText, {color: '#38464F', marginVertical: 20}]}>
          Amount: {this.props.navigation.getParam('amt', 'NO-VALUE')}
        </Text>
        <Text style={[styles.labelText, {color: '#38464F', marginTop: 10}]}>
          Description:
        </Text>
        <Text style={[styles.labelText, {color: '#38464F', marginBottom: 10}]}>
          {this.props.navigation.getParam('desc', 'NO-VALUE')}
        </Text>
        <Text style={styles.labelText}>
          Category: {this.props.navigation.getParam('cat', 'NO-VALUE')}
        </Text>
      </View>
    );
  }
}

const mainNavigation = createStackNavigator({
  AddExpense: {screen: addExpenseScreen},
  ViewExpense: {screen: viewExpenseScreen},
});

const App = createAppContainer(mainNavigation);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', padding: 10},
  labelText: {
    textAlignVertical: 'center',
    fontSize: 18,
  },
  input: {
    height: 50,
    borderColor: '#86B2CA',
    borderWidth: 2,
    borderRadius: 15,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#86B2CA',
    padding: 15,
    alignItems: 'center',
  },
});

export default App;
