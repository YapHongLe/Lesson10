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

class Worksheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      yearOfStudy: 'Year 1',
    };
  }

  render() {
    let message = 'Hi ' + this.state.username + '!';
    return (
      <View>
        <Text>Name: </Text>
        <TextInput
          style={styles.text}
          onChangeText={text => this.setState({username: text})}
          value={this.state.username}
        />
        <Text>Year Of Study:</Text>
        <Picker
          selectedValue={this.state.yearOfStudy}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({yearOfStudy: itemValue})
          }>
          <Picker.Item label="Year 1" value="Year 1" />
          <Picker.Item label="Year 2" value="Year 2" />
          <Picker.Item label="Year 3" value="Year 3" />
        </Picker>
        <Text>My name is {this.state.username}</Text>
        <Text>I am in {this.state.year}</Text>
        <TouchableHighlight onPress={() => alert(message)}>
          <View>
            <Image source={require('./src/images/tick.jpg')} />
            <Text>Confirm</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    height: 40,
    color: 'gray',
    borderWidth: 1,
  },
});

export default Worksheet;
