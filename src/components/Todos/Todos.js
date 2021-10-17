import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableHighlight} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import uuid from 'react-native-uuid';

import styles from './Todos.styles';

import AddTodo from '../AddTodo/AddTodo';
import EmptyList from './EmptyList';

const Todos = ({getTodos}) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodosFromStorage();
    getTodos(todos);
  }, [todos]);

  const saveToStorage = async newTodo => {
    try {
      const jsonValue = JSON.stringify(newTodo);
      await AsyncStorage.setItem('Todos', jsonValue);
    } catch (error) {}
  };

  const getTodosFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('Todos');
      const jsonValue = JSON.parse(value);
      setTodos(jsonValue);
    } catch (error) {}
  };

  const handleStatus = async id => {
    try {
      const selected = todos.find(item => item.id === id);
      selected.status = !selected.status;
      const newList = [...todos];
      const jsonValue = JSON.stringify(newList);
      await AsyncStorage.setItem('Todos', jsonValue);
    } catch (error) {}
  };

  const removeTodo = async id => {
    try {
      const filtered = todos.filter(item => item.id !== id);
      const jsonValue = JSON.stringify(filtered);
      await AsyncStorage.setItem('Todos', jsonValue);
    } catch (error) {}
  };

  const renderTodos = ({item}) => (
    <View style={styles.todos}>
      <TouchableHighlight
        onPress={() => handleStatus(item.id)}
        onLongPress={() => removeTodo(item.id)}
        underlayColor="">
        <Text
          style={[styles.todoText, item.status === true && styles.completed]}>
          {item.title}
        </Text>
      </TouchableHighlight>
    </View>
  );

  const handleTodo = item => {
    const newTodo = [...todos, {id: uuid.v4(), title: item, status: false}];
    saveToStorage(newTodo);
  };

  return (
    <View style={styles.container}>
      {todos.length > 0 ? (
        <FlatList data={todos} renderItem={renderTodos} />
      ) : (
        <EmptyList />
      )}

      <AddTodo addTodo={handleTodo} />
    </View>
  );
};

export default Todos;
