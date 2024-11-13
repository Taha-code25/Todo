import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
  Pressable,
} from 'react-native';
import style from './MainStyles';

function Main() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [toggleAddBtn, setAddBtn] = useState(true);
  const [editItem, setEditItem] = useState(null);

  const {
    container,
    header,
    inputView,
    input,
    listStyle,
    textStyle,
    mainStyles,
    buttonStyle,
    list,
    addIcon,
    iconStyle,
    pencilStyle,
    trashStyle,
  } = style;

  const addItems = () => {
    if (task.trim()) {
      if (toggleAddBtn) {
        // Add new task
        setTaskList([...taskList, {text: task, completed: false}]);
      } else {
        // Edit existing task
        const updatedTasks = taskList.map((item, index) => {
          if (index === editItem) {
            return {...item, text: task}; // Update task text
          }
          return item;
        });
        setTaskList(updatedTasks);
        setAddBtn(true); // Reset to "add" mode after editing
        setEditItem(null);
      }
      setTask(''); // Clear input
    }
  };

  const editTask = index => {
    Alert.alert('Edit Task', 'Do you want to edit the task', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          const editedTask = taskList.find((item, i) => i === index);
          console.log(editedTask);
          setAddBtn(false);
          setTask(editedTask.text);
          setEditItem(index);
        },
      },
    ]);
  };

  const deleteTask = index => {
    const updatedTasks = taskList.filter((item, i) => i !== index);
    setTaskList(updatedTasks);
  };

  const cancel = () => {
    setTask('');
    setAddBtn(true);
  };

  const renderTask = ({item, index}) => {
    return (
      <View style={listStyle}>
        <Text style={textStyle}>{item.text}</Text>
        <View style={buttonStyle}>
          {!toggleAddBtn && editItem === index ? null : (
            <Pressable onPress={() => editTask(index)}>
              <Image
                source={require('../../assets/Images/pencil.png')}
                style={[iconStyle, pencilStyle]}
              />
            </Pressable>
          )}

          {!toggleAddBtn && editItem === index ? null : (
            <Pressable onPress={() => deleteTask(index)}>
              <Image
                source={require('../../assets/Images/trash.png')}
                style={[iconStyle, trashStyle]}
              />
            </Pressable>
          )}
        </View>
      </View>
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/Images/background.png')}
      style={mainStyles}>
      <View style={container}>
        <Text style={header}>TodoApp</Text>
        <View style={inputView}>
          <TextInput
            style={input}
            placeholder="Enter Yout task here!"
            value={task}
            onChangeText={setTask}
          />
          {toggleAddBtn ? (
            <Pressable activeOpacity={0.8} onPress={addItems}>
              <Image
                source={require('../../assets/Images/add.png')}
                style={addIcon}
              />
            </Pressable>
          ) : (
            <Pressable activeOpacity={0.8} onPress={addItems}>
              <Image
                source={require('../../assets/Images/image.png')}
                style={addIcon}
              />
            </Pressable>
          )}
        </View>
      </View>
      <View style={list}>
        <FlatList
          data={taskList}
          renderItem={renderTask}
          keyExtractor={(item, index) => index.toString()} // Using index as key
          contentContainerStyle={{flexGrow: 1}}
        />
      </View>
    </ImageBackground>
  );
}

export default Main;
