import React from 'react';
import {
  View,
  Text,
  TextInput,
  Picker,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';

class Lesson10quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {salutation: 'Mr', name: ''};
  }
  render() {
    let message =
      'Email sent to ' + this.state.salutation + ' ' + this.state.name;
    return (
      <View>
        <Text>Salutation:</Text>
        <Picker
          onValueChange={itemValue => this.setState({salutation: itemValue})}
          selectedValue={this.state.salutation}>
          <Picker.Item label="Mr" value="Mr" />
          <Picker.Item label="Mdm" value="Mdm" />
          <Picker.Item label="Ms" value="Ms" />
        </Picker>
        <Text>Name</Text>
        <TextInput
          style={{borderColor: 'black', borderWidth: 1}}
          onChangeText={text => this.setState({name: text})}
        />
        <TouchableHighlight onPress={() => Alert.alert(message)}>
          <Image source={require('./src/images/email.png')} />
        </TouchableHighlight>
      </View>
    );
  }
}
export default Lesson10quiz;
